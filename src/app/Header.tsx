import styled from "styled-components";

import Adornment from "ui/Adornment";
import Button from "ui/Button";
import Container from "ui/Container";
import Icon from "ui/Icon";
import Logos from "app/Logos";

const HeaderRoot = styled(Container)`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.size.x3l};
`;
const HeaderTheme = styled(Button)`
  margin-left: auto;
`;
const HeaderNews = styled(Button)`
  margin-left: ${({ theme }) => theme.size.x2s};
`;

export default function Header() {
  return (
    <HeaderRoot as="header">
      <Logos />
      <HeaderTheme>
        <Adornment>
          <Icon $name="Sun" />
        </Adornment>
      </HeaderTheme>
      <HeaderNews
        href="https://ufal.br/noticias?tag=Ufal60anos"
        rel="noreferrer"
        target="_blank"
      >
        Notícias
        <Adornment $edge="end">
          <Icon $name="Exit" />
        </Adornment>
      </HeaderNews>
    </HeaderRoot>
  );
}
