export function isValidURL(value: string): boolean {
  try {
    const newUrl = new URL(value);
    return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
  } catch (err) {
    return false;
  }
}
