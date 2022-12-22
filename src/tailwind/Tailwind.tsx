export default function Tailwind<P extends Record<string, unknown>>(
  Element: keyof JSX.IntrinsicElements,
) {
  return (props: P | (args: P) => ) => <Element />;
}
