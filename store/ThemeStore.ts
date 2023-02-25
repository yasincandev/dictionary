import { create } from 'zustand'

type State = {
  theme: 'light' | 'dark'
}

type Action = {
  toggleTheme: (theme: State['theme']) => void
}

export const useThemeStore = create<State & Action>((set) => ({
  theme: 'light',
  toggleTheme: (theme) => set(() => ({ theme: theme })),
}))
