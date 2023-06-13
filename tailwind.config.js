/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    borderRadius: {
      DEFAULT: 'var(--radius)',
      'full': '9999px',
    },
    container:
    {
      center: true,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main': '#71afdd',
        'sub': '#A3B4BF',
        'text': '#222831',
        'dtext': '#E2E2E2',
        'dbg': '#18181B',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
