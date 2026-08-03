/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_MAPS_EMBED_KEY?: string
  /** `'true'` / `'1'` enables the full-site maintenance screen */
  readonly VITE_MAINTENANCE_MODE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
