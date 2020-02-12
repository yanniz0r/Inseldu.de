import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "JetBrains Mono";
        src: url('/fonts/JetBrainsMono-Bold.woff2') format('woff2');
    }

    body {
        font-family: "JetBrains Mono"
    }
`;