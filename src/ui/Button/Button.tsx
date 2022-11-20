import { useTheme } from "ui/useTheme";

export default function Button(
  props: React.ComponentPropsWithoutRef<"button">,
) {
  const theme = useTheme();

  return <button className={theme.color?.background} {...props} />;
}
