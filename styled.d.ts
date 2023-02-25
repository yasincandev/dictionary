import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    text: string
    toggleBorder: string
    switchColor: string
    gradient: string
    fonts: {
      Ubuntu: string
      Poppins: string
      Nunito: string
      Montserrat: string
    }
    dropdown: {
      background: string
      border: string
      boxShadow: string
      hoverBackground: string
    }
  }
}
