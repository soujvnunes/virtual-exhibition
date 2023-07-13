export default (query: string): boolean => window.matchMedia(query).matches;
