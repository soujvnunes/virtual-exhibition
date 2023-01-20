import styled from "styled-components";

type AdornmentProps = {
  $edge?: "start" | "end";
};

const Adornment = styled.span<AdornmentProps>`
  margin-right: ${({ theme, $edge }) =>
    $edge === "start" ? `${theme.spacing.xs}px` : `-${theme.spacing.xs}px`};
  margin-left: ${({ theme, $edge }) =>
    $edge === "end" ? `${theme.spacing.xs}px` : `-${theme.spacing.xs}px`};
  display: inherit;
`;

Adornment.displayName = "Adornment";
export default Adornment;
