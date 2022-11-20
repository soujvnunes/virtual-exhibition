import { useTheme } from "ui/useTheme";

export default function Grid(props: React.ComponentPropsWithoutRef<"div">) {
  const theme = useTheme();

  return (
    <div
      // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain, @typescript-eslint/no-non-null-assertion
      className={theme.grid?.container! + " " + theme.grid?.margin!}
      {...props}
    />
  );
}
