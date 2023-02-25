import React from 'react'
import {
  Headers,
  Heading,
  StyledButton,
  StyledNav,
  StyledOption,
  StyledSelect,
  SubHeading,
  Toggles,
} from './styles'
import { useThemeStore } from '@/store/ThemeStore'
import { FontState, useFontStore } from '@/store/FontStore'
import { fontsData } from '@/utils/Fonts'
import { shallow } from 'zustand/shallow'
import { Moon } from '../Icons/Moon'
import { Sun } from '../Icons/Sun'

const Navbar = () => {
  const [theme, toggleTheme] = useThemeStore(
    (state) => [state.theme, state.toggleTheme],
    shallow
  )
  const { font, toggleFont } = useFontStore()
  return (
    <StyledNav>
      <Headers>
        <Heading>Dictionary</Heading>
        <SubHeading>Search for a word</SubHeading>
      </Headers>
      <Toggles>
        <StyledButton
          onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? <Moon /> : <Sun />}
        </StyledButton>
        <StyledSelect
          id="font-select"
          value={font}
          onChange={(e) => toggleFont(e.target.value as FontState['font'])}
        >
          {fontsData.map((fontData) => (
            <StyledOption
              key={fontData.id}
              value={fontData.font}
            >
              {fontData.text}
            </StyledOption>
          ))}
        </StyledSelect>
      </Toggles>
    </StyledNav>
  )
}

export default Navbar
