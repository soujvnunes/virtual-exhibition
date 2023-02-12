import styled from "styled-components";

type AdornmentProps = {
  $edge?: "start" | "end";
};

const Adornment = styled.span<AdornmentProps>`
  margin-right: ${({ $edge, theme }) =>
    `calc(${$edge === "start" ? 1 : -1} * ${theme.sizing.sm})`};
  margin-left: ${({ $edge, theme }) =>
    `calc(${$edge === "end" ? 1 : -1} * ${theme.sizing.sm})`};
  display: inherit;
`;

Adornment.displayName = "Adornment";
export default Adornment;
