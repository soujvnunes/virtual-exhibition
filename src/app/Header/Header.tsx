import styled from "styled-components";
import { Button, ButtonIcon, Container, Flex, Icon, Logos } from "ui";
import { token as t } from "utils";

const HeaderRoot = styled(Flex).attrs({
  as: Container,
  $container: true,
  $align: "center",
  forwardedAs: "header",
})`
  height: calc(${t("48")} + ${t("16")});
`;
const ButtonIconA11y = styled(ButtonIcon).attrs({ children: Icon.A11y })`
  margin-left: auto;
`;
const ButtonNews = styled((props) => (
  <Button $iconEnd={Icon.Exit} {...props} />
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
