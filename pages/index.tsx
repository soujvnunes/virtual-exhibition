import { Button, Typography } from "ui";
import { Main } from "containers";

export default function Home() {
  return (
    <Main title="UFAL 60 Anos">
      <Typography href="/dedication" variant="p" color="text">
        dedication
      </Typography>
      <Button color="main" base="bottom">
        Botão
      </Button>
      <Typography variant="p" color="text" state="focused">
        Texto
      </Typography>
    </Main>
  );
}
