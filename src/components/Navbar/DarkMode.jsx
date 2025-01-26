import React, { useEffect, useState } from 'react'
import LightButton from '../../assets/website/light-mode-button.png'
import DarkButton from '../../assets/website/dark-mode-button.png'
const DarkMode = () => {
    const [theme,setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme'):'light')
 const element = document.documentElement;
 useEffect(()=>{
  localStorage.setItem('theme',theme);
  if(theme=== 'dark') {
    element.classList.add('dark');
    element.classList.remove('light')
  } else {
    element.classList.add('light')
    element.classList.remove('dark')

 }})
 
 
    return (
    <div className='relative '>
      <img onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')} src ={LightButton} alt="" className={`absolute w-12 ${theme ==='dark'? "opacity-0":"opacity-100"} cursor-pointer z-10  transition-all duration-200` }/>
      <img onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}  src={DarkButton} alt="" className={` w-12 cursor-pointer` }/>
    </div>
  )
}

export default DarkMode
