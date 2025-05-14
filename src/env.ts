interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string;
}

export const env: ImportMetaEnv ={
    VITE_BACKEND_URL: import.meta.env.VITE_BACKEND_URL || "",
}