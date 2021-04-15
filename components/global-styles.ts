import { createGlobalStyle, keyframes } from 'styled-components';

const gradientAnimation = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "JetBrains Mono";
        src: url('/fonts/JetBrainsMono-Bold.woff2') format('woff2');
    }

    body {
        font-family: "JetBrains Mono";
        background: linear-gradient(to bottom right, #5ee7df 0%, #b490ca 100%);
        background-size: 200% 200%;
	    animation: ${gradientAnimation} 10s ease infinite;
	    overflow-x: hidden;
    }
`;