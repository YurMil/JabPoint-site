import { createContext, useContext } from 'react'
import type { Dictionary } from '../data/i18n'
import type { LangCode, ThemeMode } from '../data/site'

export type AppContextValue = {
  lang: LangCode
  setLang: (code: LangCode) => void
  theme: ThemeMode
  toggleTheme: () => void
  t: Dictionary
}

export const AppContext = createContext<AppContextValue | null>(null)

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
