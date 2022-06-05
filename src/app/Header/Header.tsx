import styled from "styled-components";
import { Button, Container, Flex, Icon, Logos } from "ui";
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
  padding-top: ${t("8")};
  padding-bottom: ${t("8")};
`;
const ButtonA11y = styled(Button)`
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
      <ButtonA11y>teste</ButtonA11y>
      <ButtonNews>Notícias</ButtonNews>
    </HeaderRoot>
  );
}
