import styled from "styled-components";
import { Button, ButtonIcon, Container, Flex, Icon, Logos } from "ui";
import { token as t } from "utils";

const HeaderRoot = styled((props) => (
  <Flex
    as={Container}
    $container
    $align="center"
    forwardedAs="header"
    {...props}
  />
))`
  height: calc(${t("48")} + ${t("16")});
`;
const ButtonIconA11y = styled((props) => (
  <ButtonIcon {...props}>{Icon.A11y}</ButtonIcon>
))`
  margin-left: auto;
`;
const ButtonNews = styled((props) => (
  <Button
    $iconEnd={Icon.Exit}
    href="https://ufal.br/noticias?tag=Ufal60anos"
    rel="noreferrer"
    target="_blank"
    {...props}
  />
))`
  margin-left: ${t("12")};
`;

export default function Header() {
  return (
    <HeaderRoot>
      <Logos />
      <ButtonIconA11y />
      <ButtonNews>Notícias</ButtonNews>
    </HeaderRoot>
  );
}
