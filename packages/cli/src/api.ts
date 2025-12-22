// packages/cli/src/api.ts

const API_BASE = "https://openauth.pythonanywhere.com";

export async function post(path: string, body: any) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Developer-Key": body.developer_api_key || "",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Request failed");
  }

  return data;
}
