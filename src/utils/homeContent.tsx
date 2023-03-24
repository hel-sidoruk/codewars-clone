import React from 'react';
import * as Icons from '../components/Icons';

export const homeContentTop = [
  {
    title: 'Get instant feedback',
    text: 'Solve kata with your coding style right in the browser and use test cases (TDD) to check it as you progress. Retrain with new, creative, and optimized approaches. Find all of the bugs in your programming practice.',
    src: '/l_s_image.jpg',
    pos: 'top',
    icon: <Icons.FingerIcon />,
  },
  {
    title: 'Earn ranks and honor',
    text: 'Kata code challenges are ranked from beginner to expert level. As you complete higher-ranked kata, you level up your profile and push your software development skills to your highest potential.',
    src: '/r_s_image.png',
    pos: 'all',
    icon: <Icons.HonorIcon />,
  },
];

export const homeContentBottom = [
  {
    title: 'Tap into the collective wisdom',
    text: ' Compare your solution with others after each kata for greater understanding. Discuss kata, best practices, and innovative techniques with the community. Have your mind blown by how different other solutions can be from your own.',
    src: '/widsom.png',
    pos: 'bottom',
    icon: <Icons.WorldIcon />,
  },
  {
    title: 'Create your own kata',
    text: 'Author kata that focus on your interests and train specific skill sets. Challenge the community with your insight and code understanding. Create everything from common developer interview questions to challenges that push the limits of your creativity. Gain honor within the coding dojo.',
    src: '/dojo.png',
    pos: 'top',
    icon: <Icons.FileIcon />,
  },
];

export const homeBlocksBottom = [
  {
    title: 'Get new perspectives',
    text: 'Solve challenges then view how others solved the same challenge. Pickup new techniques from some of the most skilled developers in the world.',
    icon: <Icons.EyeIcon />,
  },
  {
    title: 'Learn new languages',
    text: 'Solve challenges in a language you are comfortable with, then do it in a language you want to improve with. Level up across different languages.',
    icon: <Icons.FlagIcon />,
  },
  {
    title: 'Compete with peers',
    text: 'Compete against your friends, colleagues, and the community at large. Allow competition to motivate you towards mastering your craft.',
    icon: <Icons.JoystickIcon />,
  },
];
