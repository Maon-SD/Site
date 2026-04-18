import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTopOnRoute() {
  const location = useLocation();

  useEffect(() => {
    // Always reset to top on route change, except when a hash is present.
    if (location.hash) return;

    // Use multiple frames to defeat browser/restoration + images/layout shifts.
    const id1 = requestAnimationFrame(() => window.scrollTo(0, 0));
    const id2 = requestAnimationFrame(() => window.scrollTo(0, 0));
    const id3 = window.setTimeout(() => window.scrollTo(0, 0), 0);

    return () => {
      cancelAnimationFrame(id1);
      cancelAnimationFrame(id2);
      window.clearTimeout(id3);
    };
  }, [location.pathname, location.search, location.hash]);

  return null;
}

