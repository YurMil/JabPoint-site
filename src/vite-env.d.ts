/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_MAPS_EMBED_KEY?: string
  /** `'true'` / `'1'` enables the full-site maintenance screen */
  readonly VITE_MAINTENANCE_MODE?: string
  /** `'true'` / `'1'` marks this build as the staging preview (banner + noindex) */
  readonly VITE_STAGING?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
