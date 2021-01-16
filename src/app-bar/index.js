import {
  Toolbar,
  Icon,
  IconButton,
  AppBar as MuiAppBar,
  Container,
} from "@material-ui/core";
import useStyles from "./style";
import Button from "../button";
import Logos from "../logos";
import { useWindowDimension } from "../modules";

function AppBar() {
  const { iconButtonAccessibility, iconButtonLogos, logos } = useStyles();
  const { height, scroll } = useWindowDimension();
  const showLogos = scroll >= height;

  return (
    <MuiAppBar>
      <Toolbar component={Container}>
        {showLogos && (
          <IconButton classes={{ root: iconButtonLogos }}>
            <Logos classes={{ root: logos }} variant="outlined" />
          </IconButton>
        )}
        <Button
          classes={{ root: iconButtonAccessibility }}
          variant="outlined"
          endIcon={<Icon>chevron_right</Icon>}
        >
          Notícias
        </Button>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
