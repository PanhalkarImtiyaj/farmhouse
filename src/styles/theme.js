// Design tokens for Dream Farm House Project
// Based on Saguna Baug website styling

export const theme = {
    colors: {
        // Primary - Saguna Baug Green
        primary: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#6ab978',  // Saguna Baug primary green
            500: '#4ade80',
            600: '#22c55e',
            700: '#16a34a',
            800: '#15803d',
            900: '#14532d',
        },

        // Secondary - Earth tones (keeping farmhouse theme)
        secondary: {
            50: '#faf8f5',
            100: '#f5f0e8',
            200: '#e8dcc8',
            300: '#d4c0a0',
            400: '#bfa478',
            500: '#a88a5e',
            600: '#8b7049',
            700: '#6d573a',
            800: '#5a4830',
            900: '#4c3d29',
        },

        // Accent - Warm beige
        accent: {
            50: '#fdfcfa',
            100: '#f9f6f1',
            200: '#f2ebe0',
            300: '#e6d9c8',
            400: '#d4c0a8',
            500: '#bfa88a',
            600: '#a08968',
            700: '#7d6b51',
            800: '#655644',
            900: '#53473a',
        },

        // Neutral
        neutral: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#e5e5e5',
            300: '#d4d4d4',
            400: '#a3a3a3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
        },

        // Semantic colors - Saguna Baug inspired
        success: '#6ab978',  // Saguna Baug green
        warning: '#f59e0b',
        error: '#dc2626',
        info: '#3b82f6',

        // Background - Saguna Baug style
        background: {
            primary: '#ffffff',
            secondary: '#fafafa',
            tertiary: '#f5f5f5',
        },

        // Text - Exact Saguna Baug colors
        text: {
            primary: '#333333',      // rgb(51, 51, 51) - Headings
            secondary: '#666666',    // rgb(102, 102, 102) - Body text
            tertiary: '#999999',
            inverse: '#f1f1f1',      // rgb(241, 241, 241) - Button text
            link: '#6ab978',         // rgb(106, 185, 120) - Links
        },
    },

    typography: {
        fontFamily: {
            heading: "'Rubik', sans-serif",
            body: "'Rubik', sans-serif",
            mono: "'Courier New', monospace",
        },

        fontSize: {
            xs: '0.75rem',      // 12px
            sm: '0.875rem',     // 14px
            base: '1rem',       // 16px
            lg: '1.125rem',     // 18px
            xl: '1.25rem',      // 20px
            '2xl': '1.5rem',    // 24px
            '3xl': '1.875rem',  // 30px
            '4xl': '2.25rem',   // 36px
            '5xl': '3rem',      // 48px
            '6xl': '3.75rem',   // 60px
            '7xl': '4.5rem',    // 72px
        },

        fontWeight: {
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
        },

        lineHeight: {
            tight: 1.25,
            normal: 1.5,
            relaxed: 1.75,
            loose: 2,
        },
    },

    spacing: {
        0: '0',
        1: '0.25rem',   // 4px
        2: '0.5rem',    // 8px
        3: '0.75rem',   // 12px
        4: '1rem',      // 16px
        5: '1.25rem',   // 20px
        6: '1.5rem',    // 24px
        8: '2rem',      // 32px
        10: '2.5rem',   // 40px
        12: '3rem',     // 48px
        16: '4rem',     // 64px
        20: '5rem',     // 80px
        24: '6rem',     // 96px
        32: '8rem',     // 128px
    },

    breakpoints: {
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },

    borderRadius: {
        none: '0',
        sm: '0.125rem',   // 2px
        base: '0.25rem',  // 4px
        md: '0.375rem',   // 6px
        lg: '0.5rem',     // 8px
        xl: '0.75rem',    // 12px
        '2xl': '1rem',    // 16px
        '3xl': '1.5rem',  // 24px
        full: '9999px',
    },

    shadows: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        none: 'none',
    },

    transitions: {
        fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
        base: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
        slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
    },

    zIndex: {
        dropdown: 1000,
        sticky: 1020,
        fixed: 1030,
        modalBackdrop: 1040,
        modal: 1050,
        popover: 1060,
        tooltip: 1070,
    },
};

export default theme;
