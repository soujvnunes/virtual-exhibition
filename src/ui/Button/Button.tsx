import type React from "react";
import { useTheme } from "utils/useTheme";

export default function Button(
  props: React.ComponentPropsWithoutRef<"button">,
) {
  const theme = useTheme();

  return <button className={theme.background} {...props} />;
}
