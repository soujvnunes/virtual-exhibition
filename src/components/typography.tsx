import { Props, Ref } from "defs/typography.d";
import { useDevice } from "hooks";
import { isProp, sizes } from "libs";
import { forwardRef } from "react";
import styled from "styled-components";

/**
 * todo: extend CSSObject with { key:... | boolean } so can be used this way:
 * marginBlockEnd: $props.gutterBottom ? isSpan && "1em" : !isSpan && 0,
 */
function setSpanProp(
  params: boolean,
  truthy: string | undefined,
  fallback: number | undefined,
) {
  return params ? truthy : fallback;
}
const Root = styled.span<Props>(({ as, theme, $props }) => {
  const device = useDevice(theme.size.breakpoints);
  const isSpan = $props.variant === "span" || as === "span";
  const calcRatioFactor = theme.size.factor[device] * theme.size.ratio;
  const calcWithSize = $props.size ? sizes[$props.size] : 0;
  const calcParagraphSize = $props.variant === "p" ? 1 : 0.75;
  const calcHeadingSize = isProp($props.variant, ["h1", "h2", "h3"])
    ? theme.font.size[$props.variant] + calcRatioFactor
    : calcParagraphSize;

  return {
    fontSize: `${calcHeadingSize + calcWithSize}rem`,
    fontWeight: $props.weight,
    ...(!$props.noGutters && {
      marginTop: isSpan ? undefined : 0,
      marginBottom: $props.gutterBottom
        ? setSpanProp(isSpan, "1em", undefined)
        : setSpanProp(isSpan, undefined, 0),
    }),
  };
});
const Typography = forwardRef<Ref, Props>(
  ({ as, variant, weight, gutterBottom, size, noGutters, ...props }, ref) => (
    <Root
      ref={ref}
      as={as || variant}
      $props={{
        variant: variant || as || "span",
        weight,
        gutterBottom,
        size,
        noGutters,
      }}
      {...props}
    />
  ),
);

Typography.displayName = "Typography";
export default Object.assign(Typography, { Root });
