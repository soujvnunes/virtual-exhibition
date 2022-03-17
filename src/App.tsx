import { Container, IconA11y, IconExit, IconLogos } from "ui";

function App() {
  return (
    <Container as="header" className="flex items-center h-[64px]">
      <div className="flex items-center">
        <IconLogos size="lg" />
        <h1 className="font-serif leading-none italic">
          Exposição <span className="block -ml-sm">Virtual</span>
        </h1>
      </div>
      <button className="p-xs border border-main/40 rounded ml-auto text-main-light">
        <IconA11y />
      </button>
      <button className="py-xs pr-sm pl-lg border border-main/40 rounded ml-sm text-main-light flex text-sm items-center uppercase font-bold tracking-wider">
        Notícias
        <IconExit className="ml-sm" />
      </button>
    </Container>
  );
}
export default App;
