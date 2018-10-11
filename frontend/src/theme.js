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
    margin-top: 10px;
    margin-bottom: 10px;
  `,

  Box:`
    color: #000011;
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 1rem; font-style: normal; font-variant: normal; font-weight: 500; line-height: 26.4px; 
  `,

  Navigation:`
    position: float;
    padding-top: 0.2rem;
    padding-left: 3rem;
    height: 2rem;
    width: 100%;
    background: linear-gradient(to bottom, rgba(244,244,244,1) 17%,rgba(229,229,229,1) 81%);
`
};

export default theme;
