import { Dialog as MuiDialog } from "@material-ui/core";
import useStyles from "./style";
import { _ } from "../modules";

function Dialog(props) {
  const { paper, backdrop } = useStyles({ isMobile: _("sm down") });

  return (
    <MuiDialog
      maxWidth="lg"
      classes={{ paper }}
      BackdropProps={{ classes: { root: backdrop } }}
      {...props}
    />
  );
}

export default Dialog;
