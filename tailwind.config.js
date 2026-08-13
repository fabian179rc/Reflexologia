export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-teal': '#00d4aa',
        'brand-blue': '#00aaff',
        'brand-dark': '#0a0f1a',
        'brand-card': '#111827',
        'brand-muted': '#0d1520',
        'brand-text': '#e8edf5',
        'brand-gray': '#8899aa',
        'brand-border': '#1e3a4a',
        'brand-red': '#ef4444',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          from: { boxShadow: '0 0 10px #00d4aa33' },
          to: { boxShadow: '0 0 25px #00d4aa66' },
        },
      },
    },
  },
  plugins: [],
};
