import React, { useEffect, useState } from 'react'
import Counter from './components/Counter.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx';
import ThemeBtn from './components/ThemeBtn.jsx';
import Card from './components/Card.jsx';
import './App.css'

function App() {

  const [thememode,setThememode] = useState("light");

  const lightTheme =()=>{
    setThememode("light");
  }

  const darkTheme = ()=>{
    setThememode("dark");
  }

  // actual chnge in theme 

  useEffect(()=>{

    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(thememode);

  },[thememode])


  return (
    <ThemeProvider value={{thememode , lightTheme, darkTheme}}>
        
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
      </ThemeProvider>
  )
}

export default App
