declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production";
    readonly DISCORD_TOKEN: string;
    readonly DISCORD_TOKEN_DEV: string;
  }
}
