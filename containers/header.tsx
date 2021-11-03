import { Button, Icon, Typography } from "ui";

export default function Header() {
  return (
    <header className="flex justify-center">
      <Typography variant="h1">Exposição Virtual da UFAL</Typography>
      <Button base="top" color="text" adornmentEnd={<Icon>menu</Icon>}>
        Exposição
      </Button>
    </header>
  );
}
