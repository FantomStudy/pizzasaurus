import { ofetch } from "ofetch";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

if (!baseURL) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

export const api = ofetch.create({
  baseURL,
  credentials: "include",
});
