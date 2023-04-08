import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* ~~~~~~~~ FULL RESET ~~~~~~~~ */
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 150%;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    * {
        font-family: 'Raleway';

        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --color-golden-1000: #D4A61C;
        --color-golden-900: #E3B426;
        --color-golden-800: #E5BA38;
        --color-golden-700: #E8C04A;
        --color-golden-600: #EAC75D;
        --color-golden-500: #ECCD6F;
        --color-golden-400: #EFD381;
        --color-golden-300: #F1D993;
        --color-golden-200: #F3E0A5;
        --color-golden-100: #F5E6B7;
        --color-golden-50: #F8ECC9;

        --color-white: #FFFFFF;

        --color-eerieBlack: #1A1A1A; 
        --color-manatee: #949499;    
        --color-frenchGray: #C7C7CC; 

        --color-error: #FA505A;
        --color-sucess: #37B24D;

        --font-title: 'Scoth Brace';
        --font-paragraph: 'Raleway';

        --font-size-h1: 4rem;    /* 64px */
        --font-size-h2: 3rem;    /* 48px */
        --font-size-h3: 2.5rem;  /* 40px */

        --font-size-p1: 2.25rem; /* 36px */
        --font-size-p2: 2rem;    /* 32px */
        --font-size-p3: 1.5rem;  /* 24px */
        --font-size-p4: 1.25rem; /* 20px */
        --font-size-p5: 1rem;    /* 16px */
        --font-size-p6: 0.875rem; /* 14px */
        --font-size-p7: 0.75rem;  /* 12px */
        --font-size-p8: 0.625rem; /* 10px */

        --font-weight-1: 600;
        --font-weight-2: 400;

        --radius-1: .5rem;    /* 8px */
        --radius-2: .3125rem; /* 5px */

        --size-1: 6rem;       /* 96px */
        --size-2: 5.5rem;     /* 88px */
        --size-3: 5rem;       /* 80px */
        --size-4: 4.5rem;     /* 72px */
        --size-5: 4rem;       /* 64px */
        --size-6: 3.5rem;     /* 56px */
        --size-7: 3rem;       /* 48px */
        --size-8: 2.25rem;    /* 36px */

        --gap-1: 2rem;        /* 32px */
        --gap-2: 1.75rem;     /* 28px */
        --gap-3: 1.5rem;      /* 24px */
        --gap-4: 1.25rem;     /* 20px */
        --gap-5: 1rem;        /* 16px */
        --gap-6: .75rem;      /* 12px */
        --gap-7: .5rem;       /* 8px */
        --gap-8: .25rem;      /* 4px */

        --container: 75rem;   /* 1200px */

        --toastify-color-light: #fff;
        --toastify-color-dark: #121212;
        --toastify-color-info: #3498db;
        --toastify-color-success: #E5BA38;
        --toastify-color-warning: #f1c40f;
        --toastify-color-error: #e74c3c;
        --toastify-color-transparent: rgba(255, 255, 255, 0.7);

        --toastify-icon-color-info: var(--toastify-color-info);
        --toastify-icon-color-success: var(--toastify-color-success);
        --toastify-icon-color-warning: var(--toastify-color-warning);
        --toastify-icon-color-error: var(--toastify-color-error);

        --toastify-toast-width: 320px;
        --toastify-toast-background: #fff;
        --toastify-toast-min-height: 64px;
        --toastify-toast-max-height: 800px;
        --toastify-font-family: sans-serif;
        --toastify-z-index: 9999;

        --toastify-text-color-light: #757575;
        --toastify-text-color-dark: #fff;

        //Used only for colored theme
        --toastify-text-color-info: #fff;
        --toastify-text-color-success: #fff;
        --toastify-text-color-warning: #fff;
        --toastify-text-color-error: #fff;

        --toastify-spinner-color: #616161;
        --toastify-spinner-color-empty-area: #e0e0e0;

        // Used when no type is provided
        // toast("**hello**")
        --toastify-color-progress-light: linear-gradient(
            to right,
            #4cd964,
            #5ac8fa,
            #007aff,
            #34aadc,
            #5856d6,
            #ff2d55
        );
        // Used when no type is provided
        --toastify-color-progress-dark: #bb86fc;
        --toastify-color-progress-info: var(--toastify-color-info);
        --toastify-color-progress-success: var(--toastify-color-success);
        --toastify-color-progress-warning: var(--toastify-color-warning);
        --toastify-color-progress-error: var(--toastify-color-error);
    }

    body{
        background-color: #F5F5F5;

        ::-webkit-scrollbar{
            background-color: #F5F5F5;
            border-radius: 0px 8px 8px 0px;
            width: 5px;
        }
        ::-webkit-scrollbar-thumb{
            background-color: #C7C7CC;
        }
    }

    .Toastify__toast--success {
            background: #D4A61C;
    }

    img {
        max-width: 100%;
    }

    ul {
        list-style: none;
    }
`;
