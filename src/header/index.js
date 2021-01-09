import {
  AppBar,
  Toolbar,
  Icon,
  Container,
  IconButton as MuiIconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "../icon-button";
import Button from "../button";
import Logos from "../logos";

const useStyles = makeStyles(({ spacing }) => ({
  toolbar: {
    minHeight: spacing(8),
  },
  iconButtonLogos: {
    marginRight: "auto",
  },
  iconButtonAccessibility: {
    marginRight: spacing(1),
  },
}));

function Header() {
  const { iconButtonAccessibility, iconButtonLogos, toolbar } = useStyles();

  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Toolbar className={toolbar} component={Container}>
        <MuiIconButton className={iconButtonLogos} edge="start">
          <Logos variant="outlined" />
        </MuiIconButton>
        <IconButton className={iconButtonAccessibility}>
          <Icon>accessibility</Icon>
        </IconButton>
        <Button variant="outlined" endIcon={<Icon>chevron_right</Icon>}>
          Notícias
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
