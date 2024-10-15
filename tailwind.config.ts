import { type Config } from 'tailwindcss';

const colors = {
  teal: '#00FFE1',
  purple: '#6200FF',
  grey: {
    0: '#FFFFFF',
    5: '#EBEBEB',
    10: '#DADADA',
    20: '#C2C2C2',
    30: '#AAAAAA',
    40: '#919191',
    50: '#797979',
    60: '#616161',
    70: '#494949',
    80: '#313131',
    90: '#181818',
    100: '#000000',
  },
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      inherit: 'inherit',
      currentColor: 'currentColor',
      transparent: 'transparent',
    },
    backgroundColor: {
      highlight: colors.teal,
      accesent: colors.purple,
      neutral: {
        DEFAULT: colors.grey[0],
        inverted: colors.grey[100],
      },
      subtle: colors.grey[5],
      bold: colors.grey[80],
    },
    textColor: {
      copy: colors.grey[100],
      subtle: colors.grey[60],
      muted: colors.grey[40],
      inverted: colors.grey[20],
    },
    borderColor: {
      copy: colors.grey[60],
      subtle: colors.grey[40],
      muted: colors.grey[20],
    },
  },
  plugins: [],
} satisfies Config;
