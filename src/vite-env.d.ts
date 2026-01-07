/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMSPREE_ID?: string;
  readonly VITE_FORMSPREE_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
