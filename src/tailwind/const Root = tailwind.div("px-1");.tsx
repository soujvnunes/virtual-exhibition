const Root = tailwind.div("px-1");
const Container = tailwind.section((props) => props.fluid && "w-full");
const Chapter = tailwind.h2((props) => [
  {
    "text-fuchsia-300": props.secondary,
    "text-fuchsia-700": props.primary,
  },
]);
const Title = tailwind(Chapter)((props) => [
  "text-2xl",
  {
    "font-bold": props.bold,
  },
]);

function Component() {
  return (
    <Root>
      <Container fluid>
        <Title primary bold>
          Hello
        </Title>
        <Chapter secondary>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Chapter>
      </Container>
    </Root>
  );
}
