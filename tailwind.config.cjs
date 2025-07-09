/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    // Salmon
    'border-salmon-light', 'hover:border-salmon-light',
    'border-salmon-medium', 'hover:border-salmon-medium',
    'border-salmon-dark', 'hover:border-salmon-dark',
    // Aqua
    'border-aqua-light', 'hover:border-aqua-light',
    'border-aqua-medium', 'hover:border-aqua-medium',
    'border-aqua-dark', 'hover:border-aqua-dark',
    // Forest
    'border-forest-light', 'hover:border-forest-light',
    'border-forest-med', 'hover:border-forest-med',
    'border-forest-dark', 'hover:border-forest-dark',
  ],
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gentlePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-out forwards',
        'gentlePulse': 'gentlePulse 2s ease-in-out infinite',
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "sans-serif"],
        round8: ["Round8", 'sans-serif'],
        gnomon: ["Gnomon", 'sans-serif'],
      },
      colors: {
        'forest-light': '#95C639',
        'forest-med': '#7EA831',
        'forest-dark': '#455C1B',
        'salmon-light': '#B37A97',
        'salmon-medium': '#B33F7B',
        'salmon-dark': '#662446',
        'aqua-light': '#6E98E6',
        'aqua-medium': '#496AB3',
        'aqua-dark': '#0B1D51',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        rb: {
          red: "#FFADAD",
          orange: "#FFD6A5",
          yellow: "#FDFFB6",
          green: "#CAFFBF",
          lightblue: "#9BF6FF",
          blue: "#A0C4FF",
          purple: "#BDB2FF",
          pink: "#FFC6FF",
          white: "#FFFFFC"
        },
        primary: {
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#737373",
          500: "#525252",
          600: "#404040",
          DEFAULT: "#737373",
          foreground: "#f1efea",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: 0,
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: 0,
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gumroad-gradient": "linear-gradient(135deg, #9B51E0 0%, #FF90E8 100%)",
        "gumroad-yellow": "#FFD803",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
