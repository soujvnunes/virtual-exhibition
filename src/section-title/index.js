import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { _ } from "../modules";
import { Rapport } from "../asset";

function SectionTitle(props) {
  const heading6 = _("sm down") && "h6";
  const heading4 = _("md down") && "h4";
  const alignCenter = _("sm down") && { align: "center" };

  return (
    <Typography
      component="h2"
      variant={heading6 || heading4 || "h2"}
      color="textSecondary"
      gutterBottom
      {...alignCenter}
      {...props}
    />
  );
}

export default withStyles(() => ({
  root: {
    letterSpacing: 6.853924,
    "& > span": {
      WebkitBackgroundClip: "text",
      textFillColor: "transparent",
      backgroundImage: `url(${Rapport})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  },
}))(SectionTitle);
