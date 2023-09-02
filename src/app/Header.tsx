import { styled } from "styled-components";

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
  margin-left: ${({ theme }) => theme.size.x3s};
`;
const HeaderNewsIcon = styled(Icon)`
  margin-left: 8px;
`;

export default function Header() {
  return (
    <HeaderRoot as="header">
      <Logos />
      <HeaderTheme>
        <Icon $name="Sun" />
      </HeaderTheme>
      <HeaderNews
        as="a"
        href="https://ufal.br/noticias?tag=Ufal60anos"
        rel="noreferrer"
        target="_blank"
      >
        Notícias
        <HeaderNewsIcon $name="Exit" />
      </HeaderNews>
    </HeaderRoot>
  );
}
