import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export function DarkMode () {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = window.localStorage.getItem('theme')
      return storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
    return false
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (darkMode) {
        document.documentElement.classList.add('dark')
        window.localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        window.localStorage.setItem('theme', 'light')
      }
    }
  }, [darkMode])

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <>
      <button id="buttonDarkOrLightMode"onClick={handleDarkMode} className='absolute right-0 lg:static ml-auto lg:ml-0 mr-5 lg:mr-0'>
        {darkMode
          ? (
            <FontAwesomeIcon icon={faMoon} className='text-4xl lg:text-3xl text-[#ffffff]' />
            )
          : (
            <FontAwesomeIcon icon={faSun} className='text-4xl lg:text-3xl text-[#484c52]' />
            )}
      </button>
    </>
  )
}
