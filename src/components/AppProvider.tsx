import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { dict } from '../data/i18n'
import { site, type LangCode, type ThemeMode } from '../data/site'
import { AppContext } from '../hooks/useApp'

function readStoredLang(): LangCode {
  try {
    const v = localStorage.getItem(site.storage.lang)
    if (v === 'et' || v === 'en' || v === 'ru') return v
  } catch {
    /* ignore */
  }
  return site.defaultLang
}

function readStoredTheme(): ThemeMode {
  try {
    const v = localStorage.getItem(site.storage.theme)
    if (v === 'light' || v === 'dark') return v
  } catch {
    /* ignore */
  }
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light'
  }
  return 'dark'
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>(site.defaultLang)
  const [theme, setTheme] = useState<ThemeMode>('dark')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setLangState(readStoredLang())
    setTheme(readStoredTheme())
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    document.documentElement.lang = lang
    try {
      localStorage.setItem(site.storage.lang, lang)
    } catch {
      /* ignore */
    }
  }, [lang, ready])

  useEffect(() => {
    if (!ready) return
    try {
      localStorage.setItem(site.storage.theme, theme)
    } catch {
      /* ignore */
    }
  }, [theme, ready])

  const value = useMemo(
    () => ({
      lang,
      setLang: (code: LangCode) => setLangState(code),
      theme,
      toggleTheme: () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light')),
      t: dict[lang],
    }),
    [lang, theme],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
