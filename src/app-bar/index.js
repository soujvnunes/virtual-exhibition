import {
  Toolbar,
  Icon,
  IconButton,
  AppBar as MuiAppBar,
  Container,
  Button,
} from "@material-ui/core";
import useStyles from "./style";
import Logos from "../logos";
import { useWindowDimension } from "../modules";

function AppBar() {
  const { height, scroll } = useWindowDimension();
  const onHero = scroll >= height;
  const { buttonNews, iconButtonLogos, logos } = useStyles({
    showLogos: onHero,
  });

  function handleOnIntroClick() {
    window.scrollTo(0, 0);
  }

  return (
    <MuiAppBar>
      <Container component={Toolbar}>
        <IconButton
          classes={{ root: iconButtonLogos }}
          onClick={handleOnIntroClick}
        >
          <Logos classes={{ root: logos }} variant="outlined" />
        </IconButton>
        <Button
          href="https://ufal.br/noticias?tag=Ufal60anos"
          target="_blank"
          classes={{ root: buttonNews }}
          variant="outlined"
          endIcon={<Icon>chevron_right</Icon>}
        >
          Notícias
        </Button>
      </Container>
    </MuiAppBar>
  );
}

export default AppBar;
