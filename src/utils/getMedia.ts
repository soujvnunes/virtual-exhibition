export default function getMedia(query: string) {
  return window.matchMedia(query).matches;
}
