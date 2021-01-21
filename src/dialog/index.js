import { Dialog as MuiDialog } from "@material-ui/core";
import useStyles from "./style";

function Dialog(props) {
  const { paper, backdrop } = useStyles();

  return (
    <MuiDialog
      classes={{ paper }}
      BackdropProps={{ classes: { root: backdrop } }}
      {...props}
    />
  );
}

export default Dialog;
