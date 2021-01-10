import { Container as MuiContainer, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../header";
import Content from "../content";
import Footer from "../footer";

const useStyles = makeStyles(() => ({
  container: {
    minHeight: "100vh",
  },
}));

function Container() {
  const { container } = useStyles();

  return (
    <MuiContainer
      className={container}
      component={Grid}
      container
      direction="column"
      justify="space-between"
    >
      <Header />
      <Content />
      <Footer />
    </MuiContainer>
  );
}

export default Container;
