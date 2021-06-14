const zeroLeft = (n: number): string =>
  Math.floor(n).toLocaleString().padStart(2, '0');

export { zeroLeft };
