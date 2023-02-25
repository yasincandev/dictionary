import { create } from 'zustand'

export type FontState = {
  id?: number
  text: string
  font: 'ubuntu' | 'prompt' | 'nunito' | 'montserrat' | 'poppins'
}

type Action = {
  toggleFont: (selectedFont: FontState['font']) => void
}

export const useFontStore = create<FontState & Action>((set, get) => ({
  id: 1,
  text: 'Ubuntu',
  font: 'ubuntu',
  toggleFont: (selectedFont) => {
    const { id, text, font } = get()
    set(() => ({ id: id, text: text, font: selectedFont }))
  },
}))
