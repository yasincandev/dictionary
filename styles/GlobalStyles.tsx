import React, { ReactNode } from 'react'
import { createGlobalStyle, ThemeProvider as Provider } from 'styled-components'
import { dark, light, fonts } from '@/themes'
import { useThemeStore } from '@/store/ThemeStore'
import { shallow } from 'zustand/shallow'
import { useFontStore } from '@/store/FontStore'

type ThemeProviderProps = {
  children: ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme] = useThemeStore((state) => [state.theme], shallow)

  const themeObject = theme === 'light' ? light : dark

  const [font] = useFontStore((state) => [state.font], shallow)
  console.log('font', font)
  console.log('fonts', fonts[font])

  const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: all 0.2s linear;
  }
    body {
      background: ${themeObject.gradient};
      font-family: ${fonts[font]};
      color: ${themeObject.text};
      font-size: 16px;
     
    }
  `

  return (
    <Provider theme={themeObject}>
      <GlobalStyle />
      {children}
    </Provider>
  )
}

export default ThemeProvider
