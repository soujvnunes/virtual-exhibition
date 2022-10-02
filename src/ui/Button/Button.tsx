import type React from "react";
import { useTheme } from "utils";

export default function Button(
  props: React.ComponentPropsWithoutRef<"button">,
) {
  const theme = useTheme();

  return <button className={theme.color.background} {...props} />;
}
