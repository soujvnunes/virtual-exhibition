import { Button, Typography } from "ui";
import Link from "next/link";
import { Main } from "containers";

export default function Home() {
  return (
    <Main title="UFAL 60 Anos">
      <Link href="/dedication">dedication</Link>
      <Button>test</Button>
      {["h2", "h3", "p", "span"].map((variant) => (
        <Typography
          key={variant}
          variant={variant}
          weight={variant === "p" ? "bold" : undefined}
          color="main"
          state="focused"
        >
          {variant}
        </Typography>
      ))}
    </Main>
  );
}
