import { Typography } from "@material-ui/core";
import { _ } from "../modules";

export default function SectionParagraph(props) {
  const alignCenter = _("sm down") && { align: "center" };

  return (
    <Typography
      variant={_("sm down") ? "body2" : "body1"}
      {...alignCenter}
      {...props}
    />
  );
}
