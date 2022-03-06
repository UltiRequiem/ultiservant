import "dotenv/config";

export const ENV = process.env.NODE_ENV;

export const PROD = ENV === "production";
export const DEV = ENV === "development";

export const TOKEN = DEV
  ? process.env.DISCORD_TOKEN_DEV
  : process.env.DISCORD_TOKEN;

export const CLIENT_ID = DEV ? "949702056191619072" : "949492734639620107";

export const GUILD_ID = "940222379865563156";
