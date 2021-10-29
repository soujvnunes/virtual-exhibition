import { Button, Typography } from "ui";
import { Main } from "containers";

export default function Home() {
  return (
    <Main title="UFAL 60 Anos">
      <Typography href="/dedication" variant="p" color="text">
        dedication
      </Typography>
      {["main", "accent", "error", "warning", "text"].map((color) => (
        <Button
          key={color}
          color={color}
          base={
            { main: "bottom", accent: "left", error: "top", warning: "right" }[
              color
            ]
          }
        >
          {color}
        </Button>
      ))}
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
