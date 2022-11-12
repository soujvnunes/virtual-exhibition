import Logos from "app/Logos";
import styled from "styled-components";
import Adornment from "ui/Adornment";
import Button from "ui/Button";
import Container from "ui/Container";
import Icon from "ui/Icon";

export const HeaderRoot = styled(Container)`
  height: ${(p) => p.theme.size(64)};
  display: flex;
  align-items: center;
`;
export const HeaderButtonTheme = styled(Button)`
  margin-left: auto;
`;
export const HeaderButtonNews = styled(Button)`
  margin-left: ${(p) => p.theme.size(12)};
`;

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
