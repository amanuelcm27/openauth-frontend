import { useState } from "react";

export function useAsync<T>(fn: () => Promise<T>) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function run(): Promise<T | undefined> {
    try {
      setLoading(true);
      setError(null);
      return await fn();
    } catch (e: any) {
      setError(e?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return { run, loading, error };
}
