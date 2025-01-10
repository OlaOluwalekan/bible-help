import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        paperColor: '#f1ede9',
        paperLine: '#94acd4',
        topColor: '#333',
      },
      transformStyle: {
        'preserver-3d': 'preserver-3d',
      },
      perspective: {
        '1000px': '1000px',
      },
    },
  },
  plugins: [
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, any>) => void
    }) {
      addUtilities({
        '.transform-style-preserver-3d': {
          'transform-style': 'preserve-3d',
        },
        'rotate-y-0': {
          transform: 'rotateY(0deg)',
        },
        'rotate-y--180': {
          transform: 'rotateY(-180deg)',
        },
      })
    },
    require('daisyui'),
  ],
} satisfies Config
