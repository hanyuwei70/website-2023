/** @type {import('tailwindcss').Config} */


  // 根据不同季节，计算不同颜色
  let seasonColor = ''
  let seasonColor2 = ''
const now = new Date()
const month =now.getMonth() + 1
if (month >=1 && month <= 3) {
  // 春天
  seasonColor = '#517a47'
  seasonColor2 = '#779f68'
} else if (month >=4 && month <= 6) {
  seasonColor = '#346c75'
  seasonColor2 = '#6699a1'
} else if (month >=7 && month <= 9) {
  seasonColor = '#422c24'
  seasonColor2 = '#5c4b41'
} else if (month >=10 && month <= 12) {
  seasonColor = '#003049'
  seasonColor2 = '#5c4b41'
}

export default {

  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      // 'primary': '#003049',
      primary: seasonColor,
      // 'secondary': '#3f6075',
      secondary: seasonColor2,
      'leftbar-bg': '#ececec',
      'rightbar-bg': '#fcfcfc',
      'content-main-bg': '#fcfcfc',
      'white': '#fff',
      'season': seasonColor,
      link: '#0056cc'
    }
  },
  plugins: [],
}

