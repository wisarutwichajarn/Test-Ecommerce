/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        primary:{
          yellowNavbar:'#FFF1B9',// สีที่ใช้เมื่อไม่ได้ระบุ shade
          yellowNavbarGradient:'#FFE47A',// สีที่ใช้เมื่อไม่ได้ระบุ shade
          yellowFooter:'#FFFCB3',// สีที่ใช้เมื่อไม่ได้ระบุ shade
          yellowLOginGradient1:'#FFF7D6',// สีที่ใช้เมื่อไม่ได้ระบุ shade
          yellowLOginGradient2:'#FFFBEA',// สีที่ใช้เมื่อไม่ได้ระบุ shade
          yellowLOginGradient3:'#FFFDF3',// สีที่ใช้เมื่อไม่ได้ระบุ shade
          yellowLOginGradient4:'#FFF0B6',// สีที่ใช้เมื่อไม่ได้ระบุ shade
        },
        boxShadow: {
          'right-bottom': '4px 4px 10px rgba(0, 0, 0, 0.3)', // กำหนดเงาทางขวาและล่าง
        },
        
      },
    },
  },
  plugins: [],
}