import Logos from "app/Logos";
import { Adornment, Icon } from "ui";
import { HeaderButtonNews, HeaderButtonTheme, HeaderRoot } from "app/Header";

export default function Header() {
  return (
    <HeaderRoot as="header">
      <Logos />
      <HeaderButtonTheme>
        <Adornment as={Icon.Sun} />
      </HeaderButtonTheme>
      <HeaderButtonNews
        href="https://ufal.br/noticias?tag=Ufal60anos"
        rel="noreferrer"
        target="_blank"
      >
        Notícias
        <Adornment as={Icon.Exit} $edge="end" />
      </HeaderButtonNews>
    </HeaderRoot>
  );
}
