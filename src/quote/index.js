import { Typography } from "@material-ui/core";
import useStyles from "./style";
import { _ } from "../modules";

export default function Quote(props) {
  const { root } = useStyles({ isMobile: _("sm down") });

  return <Typography classes={{ root }} variant="body2" {...props} />;
}
