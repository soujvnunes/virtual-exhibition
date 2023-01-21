import styled from "styled-components";

type AdornmentProps = {
  $edge?: "start" | "end";
};

const Adornment = styled.span<AdornmentProps>`
  margin-right: ${({ theme, $edge }) =>
    `${$edge === "start" ? "" : "-"}${theme.value[12]}`};
  margin-left: ${({ theme, $edge }) =>
    `${$edge === "end" ? "" : "-"}${theme.value[12]}`};
  display: inherit;
`;

Adornment.displayName = "Adornment";
export default Adornment;
