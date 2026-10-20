/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        outer: 'var(--color-outer)',
        'outer-light': 'var(--color-outer-light)',
        canvas: 'var(--color-background)',
        soft: 'var(--color-background-soft)',
        surface: 'var(--color-surface)',
        ink: 'var(--color-text)',
        muted: 'var(--color-text-muted)',
        accent: 'var(--color-accent)',
        'accent-soft': 'var(--color-accent-soft)',
        line: 'var(--color-border)',
      },
      fontFamily: {
        display: ['"Bodoni Moda Variable"', '"Bodoni Moda"', 'Didot', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: { content: '86rem' },
    },
  },
  plugins: [],
}
