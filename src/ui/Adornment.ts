import { styled } from "styled-components";

type AdornmentProps = {
  $edge?: "start" | "end";
};

export default styled.span<AdornmentProps>(({ $edge, theme }) => {
  function getEdge(edge: AdornmentProps["$edge"]) {
    return $edge === edge ? theme.size.x3s : `calc(-1 * ${theme.size.x3s})`;
  }

  return {
    marginRight: getEdge("start"),
    marginLeft: getEdge("end"),
  };
});
