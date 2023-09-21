/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    fontFamily : {
      global  : ['Barlow', 'sans-serif'],
      heading : ['Fraunces', 'sans-serif'],
    },
    fontSize : {
      'heading' : ['36px', {
          lineHeight : '40px',
          letterSpacing : '0px',
        }
      ],
    'regular' : ['18px', {
        lineHeight : '28px',
        letterSpacing : '0px',
      }
    ],
  },
    screens: {
      'mobile' : '375px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },

    colors: {
      transparent : 'transparent',
      'white' : 'hsl(0, 0%, 100%)',
      'yellow' : 'hsl(51, 100%, 49%)',
      'soft-red' : 'hsl(7, 99%, 70%)',
      'dark-blue' : 'hsl(198, 62%, 26%)',
      'grayish-blue' : 'hsl(210, 4%, 67%)',
      'moderate-cyan' : 'hsl(168, 34%, 41%)',
      'desaturated-cyan' : 'hsl(167, 40%, 24%)',
      'desaturated-blue' : 'hsl(212, 27%, 19%)',
      'dark-grayish-blue': 'hsl(232, 10%. 55%)',
      'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
    },
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
