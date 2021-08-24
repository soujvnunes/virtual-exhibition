import { Button, Typography } from "components";
import { useMode } from "hooks";

function Home() {
  const mode = useMode();

  return (
    <>
      <Button onClick={() => mode.dispatch({ type: useMode.types.toggle })}>
        {mode.is}
      </Button>
      <Button
        onClick={() => {
          const props = "light";

          localStorage.setItem("mode", props);

          mode.dispatch({ type: useMode.types.set, props });
        }}>
        Set theme light
      </Button>
      <Typography as="h1" gutterBottom>
        Heading 3
      </Typography>
      <Typography as="h2" gutterBottom>
        Heading 2
      </Typography>
      <Typography as="h3" gutterBottom>
        Heading 1
      </Typography>
      <Typography variant="p" gutterBottom>
        Paragraph
      </Typography>
      <Typography weight="bold" size="large" gutterBottom>
        Span
      </Typography>
      <Typography variant="h2" weight="bold">
        Span
      </Typography>
    </>
  );
}

export default Home;
