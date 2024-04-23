export function set(key: string, data: unknown) {
  try {
    const rawData = JSON.stringify(data);
    localStorage.setItem(key, rawData);
  } catch (e) {
    throw e;
  }
}

export function get<TData>(key: string): TData | null {
  try {
    const rawData = localStorage.getItem(key);
    if (!rawData) {
      return null;
    }

    return JSON.parse(rawData);
  } catch (e) {
    throw e;
  }
}
