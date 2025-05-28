interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string;
  readonly VITE_CLOUD_NAME: string;
  readonly VITE_CLOUD_API_KEY: string;
  readonly VITE_CLOUD_SECRET_KEY: string;
}

export const env: ImportMetaEnv ={
    VITE_BACKEND_URL: import.meta.env.VITE_BACKEND_URL || "",
    VITE_CLOUD_NAME: import.meta.env.VITE_CLOUD_NAME || "",
    VITE_CLOUD_API_KEY: import.meta.env.VITE_CLOUD_API_KEY || "",
    VITE_CLOUD_SECRET_KEY: import.meta.env.VITE_CLOUD_SECRET_KEY || "",
}