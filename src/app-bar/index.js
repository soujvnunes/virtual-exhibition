import {
  Toolbar,
  Icon,
  IconButton,
  AppBar as MuiAppBar,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../button";
import Logos from "../logos";
import { useWindowDimension } from "../modules";

const useStyles = makeStyles(({ spacing }) => ({
  iconButtonAccessibility: {
    marginLeft: "auto",
    marginRight: spacing(1),
  },
  iconButtonLogos: {
    padding: 0,
  },
  logos: {
    width: "auto",
    height: spacing(6),
  },
}));

function AppBar() {
  const { iconButtonAccessibility, iconButtonLogos, logos } = useStyles();
  const { height, scroll } = useWindowDimension();
  const showLogos = scroll >= height;

  return (
    <MuiAppBar color="transparent" elevation={0}>
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
