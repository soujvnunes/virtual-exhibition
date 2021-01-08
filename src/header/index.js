import {
  AppBar,
  Toolbar,
  Icon,
  Button,
  Container,
  IconButton as MuiIconButton,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import IconButton from "../icon-button";

const AccessIconButton = styled(IconButton)(({ theme: { spacing } }) => ({
  marginRight: spacing(1),
}));

function Header() {
  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Toolbar component={Container}>
        <MuiIconButton edge="start">
          <Icon>accessibility</Icon>
        </MuiIconButton>
        <AccessIconButton>
          <Icon>accessibility</Icon>
        </AccessIconButton>
        <Button variant="outlined" endIcon={<Icon>chevron_right</Icon>}>
          Notícias
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
