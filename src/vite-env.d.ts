interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string;
  readonly VITE_CLOUD_NAME: string;
  readonly VITE_CLOUD_API_KEY: string;
  readonly VITE_CLOUD_SECRET_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}