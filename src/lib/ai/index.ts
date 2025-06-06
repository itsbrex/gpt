import "dotenv/config";
import { OpenAI } from "openai";

export type { OpenAI } from "openai";

if (!process.env.OPENAI_API_KEY) throw new Error("OPENAI_API_KEY is not set.");

export const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
