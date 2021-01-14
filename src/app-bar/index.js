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
import { useWindowDimension } from "../modules";

const useStyles = makeStyles(({ spacing }) => ({
  iconButtonAccessibility: {
    marginLeft: "auto",
    marginRight: spacing(1),
  },
}));

function AppBar() {
  const { iconButtonAccessibility } = useStyles();
  const showLogos = useWindowDimension("scroll") >= 900;

  return (
    <MuiAppBar color="transparent" elevation={0}>
      <Toolbar component={Container}>
        {showLogos && (
          <MuiIconButton edge="start">
            <Logos variant="outlined" />
          </MuiIconButton>
        )}
        <IconButton classes={{ root: iconButtonAccessibility }}>
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
