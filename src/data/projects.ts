export type ProjectCategory =
  | 'Video Game'
  | 'Sound Design'
  | 'Video'
  | 'Music';

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  role?: string;
  tools?: string[];
  video?: {
    type: 'youtube' | 'vimeo' | 'file';
    src: string;
    title: string;
  };
  images?: { src: string; alt: string }[];
};

import Image_1_Fallin from '../assets/projets/Image_1_Fallin.png';
import Image_2_Fallin from '../assets/projets/Image_2_Fallin.png';

import Image_1_GWEN from '../assets/projets/Image_1_GWEN.png';
import Image_1_JETT from '../assets/projets/Image_1_JETT.png';

import Image_1_Music from '../assets/projets/Image_1_Music.png';
import Image_2_Music from '../assets/projets/Image_2_Music.png';
import Image_3_Music from '../assets/projets/Image_3_Music.png';

import Image_1_OtterGame from '../assets/projets/Image_1_OtterGame.png';
import Image_2_OtterGame from '../assets/projets/Image_2_OtterGame.png';

import Image_1_RoyaleCake from '../assets/projets/Image_1_RoyaleCake.png';
import Image_2_RoyaleCake from '../assets/projets/Image_2_RoyaleCake.png';

import Image_1_Video from '../assets/projets/Image_1_Video.png';
import Image_2_Video from '../assets/projets/Image_2_Video.png';
import Image_3_Video from '../assets/projets/Image_3_Video.png';
import Image_4_Video from '../assets/projets/Image_4_Video.png';

export const categories: { key: ProjectCategory; label: string }[] = [
  { key: 'Video Game', label: 'Video Game Projects' },
  { key: 'Sound Design', label: 'Sound Design Projects' },
  { key: 'Video', label: 'Video Projects' },
  { key: 'Music', label: 'Music Projects' },
];

// Replace placeholders with your real work.
export const projects: Project[] = [
  // Video game
  {
    id: 'vg_1',
    title: 'That One Otter Game — Interactive Audio System',
    category: 'Video Game',
    description:
      'Adaptive footsteps, ambience layers, and SFX designed to react to gameplay states. I built the entire voice system (NPC and Players) with variations and distance-based filtering. The goal was to keep realism and at the same time creating à cartoon feeling for users. ',
    role: 'Sound designer / implementation',
    tools: ['Reaper', 'UNREAL ENGINE', 'MetaSounds'],
    video: {
      type: 'youtube',
      src: 'https://www.youtube.com/watch?v=jShFcQuL0iU',
      title: '// ARTFX OFFICIAL // That One Otter Game / Teaser',
    },
    images: [
      { src: Image_1_OtterGame, alt: 'Voices Implementation screenshot' },
      { src: Image_2_OtterGame, alt: 'Audio implementation screenshot' },
    ],
  },
  {
    id: 'vg_2',
    title: 'Fallin Thru Time — SFX design & Music',
    category: 'Video Game',
    description:
      'On this projet, I composed the whole music, and I designed most of SFX and AMB in the game. I designed character voices too.',
    role: 'Sound design',
    tools: ['Logic Pro', 'Reaper'],
    video: {
      type: 'youtube',
      src: 'https://www.youtube.com/watch?v=QXpn8mnQSfQ',
      title: 'Fallin Thru Time - Trailer Video',
    },
    images: [
      { src: Image_1_Fallin, alt: 'Reaper Voice Session' },
      { src: Image_2_Fallin, alt: 'Logic Pro Music Session' },
    ],
  },
  // {
  //   id: 'vg-03',
  //   title: 'Neon Drift — Vehicle Pass-bys & City Ambience',
  //   category: 'Video Game',
  //   description:
  //     'Designed pass-by systems, doppler-friendly layers, and city ambience beds with day/night variations. The ambience uses modular loops (traffic, crowds, signage hum, distant sirens) and a simple intensity map so the mix evolves as the player approaches intersections and tunnels. Vehicle sounds were shaped to keep energy without harshness.',
  //   role: 'Audio designer',
  //   tools: ['Ableton Live', 'Reaper'],
  //   video: {
  //     type: 'youtube',
  //     src: 'https://www.youtube-nocookie.com/embed/5qap5aO4i9A',
  //     title: 'Neon Drift — ambience reel (placeholder)',
  //   },
  //   images: [
  //     { src: placeholderA, alt: 'City at night' },
  //     { src: placeholderB, alt: 'Vehicle audio layers' },
  //   ],
  // },

  // Sound design
  {
    id: 'sd_1',
    title: 'Jusant Trailer Resound',
    category: 'Sound Design',
    description:
      'A resound that I made for my sound design school in Grenoble. I designed everything with Logic pro, and I also made the music on this project.',
    role: 'Sound designer & Composer',
    tools: ['Ableton Live', 'RX', 'Serum'],
    video: {
      type: 'youtube',
      src: 'https://www.youtube.com/watch?v=4Byp17AUomA',
      title: 'Jusant Trailer by Noam Loucif',
    },
    images: [
      // { src: NA, alt: '' },
      // { src: NA, alt: '' },
    ],
  },
  {
    id: 'sd_2',
    title: 'Valorant spell Sound Design',
    category: 'Sound Design',
    description:
      'I created an alternative sound design for an Omen spell from Valorant',
    role: 'Sound design',
    tools: ['Reaper',],
    video: {
      type: 'youtube',
      src: 'https://www.youtube.com/watch?v=fPDpMfMENzc',
      title: 'Resound Omen TP from Valorant',
    },
    images: [
      // { src: NA, alt: '' },
      // { src: NA, alt: '' },
    ],
  },
  {
    id: 'sd_3',
    title: 'Unity Project Demo (ShotLock)',
    category: 'Sound Design',
    description:
      'I designed SFX for footsteps, and the whole spell using Unity during my studies',
    role: 'Sound design',
    tools: ['Reaper', 'Unity'],
    video: {
      type: 'youtube',
      src: 'https://www.youtube.com/watch?v=1f_X9G5t27A',
      title: 'Unity Project Demo (ShotLock)',
    },
    images: [
      // { src: NA, alt: '' },
      // { src: NA, alt: '' },
    ],
  },
  {
    id: 'sd_4',
    title: 'Unity Project Demo (ShotLock)',
    category: 'Sound Design',
    description:
      'I designed SFX and ambiances for this StarWars cinematic during my studies',
    role: 'Sound design',
    tools: ['Reaper',],
    video: {
      type: 'youtube',
      src: 'https://www.youtube.com/watch?v=l1YJX-oqSWw',
      title: 'Resound Star Wars cinematic',
    },
    images: [
      // { src: NA, alt: '' },
      // { src: NA, alt: '' },
    ],
  },
  {
    id: 'sd_5',
    title: 'Xerath Resound',
    category: 'Sound Design',
    description:
      'I designed SFX for Xerath spells from League Of Legends.',
    role: 'Sound design',
    tools: ['Reaper',],
    video: {
      type: 'youtube',
      src: 'https://www.youtube.com/watch?v=Xx_Cwmokios',
      title: 'Xerath Sound Design by Noam Loucif',
    },
    images: [
      // { src: NA, alt: '' },
      // { src: NA, alt: '' },
    ],
  },
  {
    id: 'sd_6',
    title: 'Overwatch cinematic resound',
    category: 'Sound Design',
    description:
      'I designed SFX for this Overwatch cinematic during my studies, I had only 2 hours to create everything.',
    role: 'Sound design',
    tools: ['Reaper',],
    video: {
      type: 'youtube',
      src: 'https://www.youtube.com/watch?v=W9z7XsGWSHM',
      title: 'Short Design OverWatch Noam Loucif',
    },
    images: [
      // { src: NA, alt: '' },
      // { src: NA, alt: '' },
    ],
  },
  {
    id: 'sd_7',
    title: 'Vehicle Engine Sound Design',
    category: 'Sound Design',
    description:
      'I created an motor sound using serum and portal in only 2 hours during my studies in sound design for video games.',
    role: 'Sound design',
    tools: ['Reaper','Serum Plugin'],
    video: {
      type: 'youtube',
      src: 'https://www.youtube.com/watch?v=v2izR4OppZo',
      title: 'Vehicle Engine designed with Serum',
    },
    images: [
      // { src: NA, alt: '' },
      // { src: NA, alt: '' },
    ],
  },
  {
    id: 'sd_8',
    title: 'Skye Resound from Valorant',
    category: 'Sound Design',
    description:
      'I designed an alternative sound design for Skye spells from Valorant.',
    role: 'Sound design',
    tools: ['Reaper'],
    video: {
      type: 'youtube',
      src: 'https://www.youtube.com/watch?v=Sfym-tcPZxs',
      title: 'Skye resound from Valorant',
    },
    images: [
      // { src: NA, alt: '' },
      // { src: NA, alt: '' },
    ],
  },
  {
    id: 'sd_9',
    title: 'Jett Resound from Valorant',
    category: 'Sound Design',
    description:
      'I designed an alternative sound design for Jett spells from Valorant.',
    role: 'Sound design',
    tools: ['Reaper'],
    video: {
      type: 'youtube',
      src: 'https://youtu.be/cJTXowPhUPI',
      title: 'Jett from Valorant Resound',
    },
    images: [
      { src: Image_1_JETT, alt: 'Reaper session' },
      // { src: NA, alt: '' },
    ],
  },
  {
    id: 'sd_10',
    title: 'Gwen Resound from League of Legends',
    category: 'Sound Design',
    description:
      'I designed an alternative sound design for a skin of Gwen spells from League of Legends.',
    role: 'Sound design',
    tools: ['Reaper'],
    video: {
      type: 'youtube',
      src: 'https://youtu.be/Y3llfvPwmYE',
      title: 'Gwen from LoL Resound',
    },
    images: [
      { src: Image_1_GWEN, alt: 'Reaper session' },
      // { src: NA, alt: '' },
    ],
  },
  {
    id: 'sd_11',
    title: 'Slot Sound Design available on Stake',
    category: 'Sound Design',
    description:
      'I designed Music & UI sounds for a slot machine available on Stake.',
    role: 'Sound design',
    tools: ['Reaper','Logic Pro'],
    video: {
      type: 'youtube',
      src: 'https://youtu.be/BjIZPEKRBIs',
      title: 'Slot Sound Design by Noam Loucif',
    },
    images: [
      { src: Image_1_RoyaleCake, alt: 'Reaper session of UI sounds' },
      { src: Image_2_RoyaleCake, alt: 'Logic Pro session' },
    ],
  },

  // Video
  {
    id: 'vid_1',
    title: 'Video Sound Design - Youtuber',
    category: 'Video',
    description:
      'I put some SFX on this youtube video from a French Youtuber, and I mixed voices, SFX, and Music together to match industry standards.',
    role: 'Sound Designer',
    tools: ['REAPER'],
    video: {
      type: 'youtube',
      src: 'https://www.youtube.com/watch?v=4ADGQh7hU_w',
      title: 'Devine le Chiffre sur Roblox !!',
    },
    images: [
      { src: Image_1_Video, alt: 'Reaper session screenshot' },
      // { src: NA, alt: '' },
    ],
  },
  {
    id: 'vid_2',
    title: 'Video Sound Design - Youtuber',
    category: 'Video',
    description:
      'I put some SFX & musics on this youtube video from a French Youtuber, and I mixed voices, SFX, and Music together to match industry standards.',
    role: 'Sound Design',
    tools: ['REAPER'],
    video: {
      type: 'youtube',
      src: 'https://www.youtube.com/watch?v=GfeYDbSdxuk',
      title: 'JE SUIS DANS LES BACKROOMS POUR VOLER DES BRAINROTS !',
    },
    images: [
      { src: Image_2_Video, alt: 'Reaper session screenshot' },
      // { src: NA, alt: '' },
    ],
  },
  {
    id: 'vid_3',
    title: 'Video Sound Design - Youtuber',
    category: 'Video',
    description:
      'I put some SFX & musics on this youtube video from a French Youtuber, and I mixed voices, SFX, and Music together to match industry standards.',
    role: 'Sound Designer',
    tools: ['REAPER'],
    video: {
      type: 'youtube',
      src: 'https://www.youtube.com/watch?v=o8S7TLstZng',
      title: 'TOUT Ce Que Je RECHERCHE APPARAÎT Sur Steal a Brainrot !',
    },
    images: [
      { src: Image_3_Video, alt: 'Reaper session screenshot' },
      // { src: NA, alt: '' },
    ],
  },
  {
    id: 'Hassan_vid_1',
    title: 'Video Sound Design - Fiction Youtuber',
    category: 'Video',
    description:
      'I put some SFX & musics on this youtube video from a French Youtuber, and I mixed voices, SFX, and Music together to match industry standards.',
    role: 'Sound Designer',
    tools: ['REAPER'],
    video: {
      type: 'youtube',
      src: 'https://www.youtube.com/watch?v=UFX4BNE4AMw',
      title: 'LE BLOC 2 - RETOUR EN 2026',
    },
    images: [
      { src: Image_3_Video, alt: 'Reaper session screenshot' },
      // { src: NA, alt: '' },
    ],
  },
  {
    id: 'Hassan_vid_2',
    title: 'Video Sound Design - Fiction Youtuber',
    category: 'Video',
    description:
      'I put some SFX & musics on this youtube video from a French Youtuber, and I mixed voices, SFX, and Music together to match industry standards.',
    role: 'Sound Designer',
    tools: ['REAPER'],
    video: {
      type: 'youtube',
      src: 'https://www.youtube.com/watch?v=2NcB5GEIwzY&t=637s',
      title: 'LE BLOC 2 - BAVURE POLICIÈRE (Épisode 2)',
    },
    images: [
      { src: Image_4_Video, alt: 'Reaper session screenshot' },
      // { src: NA, alt: '' },
    ],
  },

  // Music
  {
    id: 'Music_1',
    title: 'Music production',
    category: 'Music',
    description:
      'I composed that music for an artist i work with using Logic Pro.',
    role: 'Composer',
    tools: ['Logic Pro', 'Kontakt Library', 'Native Instrument Plugins'],
    video: {
      type: 'youtube',
      src: 'https://youtu.be/wftrCpumI7o',
      title: '[FREE] type beat ~ "Ouh Ah"',
    },
    images: [
      { src: Image_1_Music, alt: 'Image_1_Music' },
    ],
  },
  {
    id: 'Music_2',
    title: 'Music production',
    category: 'Music',
    description:
      'I composed that music for an artist i work with using Logic Pro.',
    role: 'Composer',
    tools: ['Logic Pro', 'Kontakt Library', 'Native Instrument Plugins'],
    video: {
      type: 'youtube',
      src: 'https://youtu.be/hk5Xnfj9lsk',
      title: '[FREE] CyberPunk type beat ~ "V""',
    },
    images: [
      { src: Image_2_Music, alt: 'Image_2_Music' },
      // { src: NA, alt: '' },
    ],
  },
  {
    id: 'mus-03',
    title: 'Music production',
    category: 'Music',
    description:
      'I composed that music for an artist i work with using Logic Pro.',
    role: 'Composer',
    tools: ['Logic Pro', 'Kontakt Library', 'Native Instrument Plugins'],
    video: {
      type: 'youtube',
      src: 'https://www.youtube.com/watch?v=FD35ngp5LE0&list=RDFD35ngp5LE0&start_radio=1',
      title: 'T\'es là',
    },
    images: [
      { src: Image_3_Music, alt: 'Image_3_Music' },
      // { src: placeholderD, alt: 'Texture and groove notes' },
    ],
  },
];

export const featuredByCategory: Partial<Record<ProjectCategory, string>> = {
  // 'Video Game': 'vg-01',
  'Sound Design': 'sd_10',
  Video: 'Hassan_vid_2',
  Music: 'Music_2',
};
