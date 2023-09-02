import { styled } from "styled-components";

export default styled.ul(({ theme }) => {
  const marginTop = `calc(-1 * ${theme.size.x2s})`;

  return {
    display: "flex",
    width: `calc(100% + ${theme.size.x2s})`,
    marginTop,
    marginLeft: marginTop,
  };
});
