import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 1.4rem;
    max-width: 100%;
  }
  img {
    border-radius: 15px;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.7);
  }
`;