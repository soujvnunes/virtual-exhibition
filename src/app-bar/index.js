import {
  Toolbar,
  Icon,
  IconButton as MuiIconButton,
  AppBar as MuiAppBar,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "../icon-button";
import Button from "../button";
import Logos from "../logos";

const useStyles = makeStyles(({ spacing }) => ({
  iconButtonLogos: {
    marginRight: "auto",
  },
  iconButtonAccessibility: {
    marginRight: spacing(1),
  },
}));

function AppBar() {
  const classes = useStyles();

  return (
    <MuiAppBar color="transparent" elevation={0}>
      <Toolbar component={Container}>
        <MuiIconButton className={classes.iconButtonLogos} edge="start">
          <Logos variant="outlined" />
        </MuiIconButton>
        <IconButton className={classes.iconButtonAccessibility}>
          <Icon>accessibility</Icon>
        </IconButton>
        <Button variant="outlined" endIcon={<Icon>chevron_right</Icon>}>
          Notícias
        </Button>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
