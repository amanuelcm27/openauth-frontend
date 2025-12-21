import { DEFAULT_API_BASE } from "./config";

export async function apiFetch(path: string, body: any, appSecret: string) {
  if (!appSecret) {
    throw new Error("appSecret is required");
  }

  const res = await fetch(`${DEFAULT_API_BASE}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-APP-SECRET": appSecret,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json();

  if (!res.ok) {
    const msg = data?.error || JSON.stringify(data);
    throw new Error(msg);
  }

  return data;
}
