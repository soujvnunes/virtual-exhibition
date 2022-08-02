import Logos from "app/Logos";
import styled from "styled-components";
import { Adornment, Button, Container, Icon } from "ui";
import { getToken } from "utils";

const HeaderRoot = styled(Container)`
  height: ${getToken("size.64")};
  display: flex;
  align-items: center;
`;
const ButtonA11y = styled(Button)`
  margin-left: auto;
`;
const ButtonNews = styled(Button)`
  margin-left: ${getToken("size.12")};
`;

export default function Header() {
  return (
    <HeaderRoot as="header">
      <Logos />
      <ButtonA11y>
        <Adornment>
          <Icon.A11y />
        </Adornment>
      </ButtonA11y>
      <ButtonNews
        href="https://ufal.br/noticias?tag=Ufal60anos"
        rel="noreferrer"
        target="_blank"
      >
        Notícias
        <Adornment $edge="end">
          <Icon.Exit />
        </Adornment>
      </ButtonNews>
    </HeaderRoot>
  );
}
