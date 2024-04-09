/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CRYPTO_COMPARE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
