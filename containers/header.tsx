import { Button, Icon } from "ui";

export default function Header() {
  return (
    <header className="flex justify-center">
      <Button base="top" color="text" adornmentEnd={<Icon>menu</Icon>}>
        Exposição
      </Button>
    </header>
  );
}
