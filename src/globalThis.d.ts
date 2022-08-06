export {};

declare global {
  interface Window {
    figma: Partial<Record<"tokens", unknown>>;
  }
}
