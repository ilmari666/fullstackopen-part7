import { css } from 'reakit';
import defaultTheme from 'reakit-theme-default';

const theme = {
  ...defaultTheme,

  palette: {
    ...defaultTheme.palette,
    primary: ['darkblue', 'blue', 'lightblue']
  },

  Button: css`
    ${defaultTheme.Button};
    color: white;
  `
};

export default theme;
