declare module 'bun' {
  interface Env {
    W_USERNAME: string;
    W_PASSWORD: string;
    W_MAC: string;
    W_PORT: number;
    W_BYPASS: string;
  }
}

