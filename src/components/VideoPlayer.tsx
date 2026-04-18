import styles from './VideoPlayer.module.css';

function parseTimeToSeconds(t: string): number | null {
  // Supported formats: "637", "637s", "1m2s", "1h2m3s"
  const trimmed = t.trim();

  if (/^\d+$/.test(trimmed)) return Number(trimmed);

  const simpleSeconds = trimmed.match(/^(\d+)s$/i);
  if (simpleSeconds) return Number(simpleSeconds[1]);

  const hms = trimmed.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/i);
  if (!hms) return null;

  const hours = hms[1] ? Number(hms[1]) : 0;
  const minutes = hms[2] ? Number(hms[2]) : 0;
  const seconds = hms[3] ? Number(hms[3]) : 0;
  const total = hours * 3600 + minutes * 60 + seconds;
  return Number.isFinite(total) && total > 0 ? total : null;
}

function toYouTubeEmbedUrl(input: string): string {
  // Accepts:
  // - https://www.youtube.com/watch?v=VIDEO_ID
  // - https://youtu.be/VIDEO_ID
  // - https://www.youtube.com/embed/VIDEO_ID
  // - https://www.youtube-nocookie.com/embed/VIDEO_ID
  // Preserves start time when possible (t= / start=)
  try {
    const url = new URL(input);
    const host = url.hostname.replace(/^www\./, '');

    // Already embed URL
    if (url.pathname.startsWith('/embed/')) {
      // Convert to nocookie host for consistency
      const embed = new URL(input);
      embed.hostname = 'www.youtube-nocookie.com';
      return embed.toString();
    }

    let videoId: string | null = null;
    if (host === 'youtu.be') {
      videoId = url.pathname.replace(/^\//, '') || null;
    } else if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'music.youtube.com') {
      videoId = url.searchParams.get('v');
    }

    if (!videoId) return input;

    const embed = new URL(`https://www.youtube-nocookie.com/embed/${videoId}`);

    // start time
    const startParam = url.searchParams.get('start');
    const tParam = url.searchParams.get('t');
    const startSeconds = startParam
      ? parseTimeToSeconds(startParam)
      : tParam
        ? parseTimeToSeconds(tParam)
        : null;
    if (startSeconds) embed.searchParams.set('start', String(startSeconds));

    return embed.toString();
  } catch {
    return input;
  }
}

export function VideoPlayer({
  title,
  type,
  src,
}: {
  title: string;
  type: 'youtube' | 'vimeo' | 'file';
  src: string;
}) {
  if (type === 'file') {
    return (
      <video className={styles.video} controls preload="metadata">
        <source src={src} />
        Your browser does not support the video tag.
      </video>
    );
  }

  const iframeSrc = type === 'youtube' ? toYouTubeEmbedUrl(src) : src;

  return (
    <div className={styles.frame}>
      <iframe
        className={styles.iframe}
        src={iframeSrc}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

