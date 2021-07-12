import { Typography } from "@material-ui/core";
import { _ } from "../../library/modules";

export default function SectionParagraph(props) {
  return (
    <Typography
      variant={_("sm down") ? "body2" : "body1"}
      align={_("sm down") ? "center" : "left"}
      {...props}
    />
  );
}
