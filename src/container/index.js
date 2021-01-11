import { Box, Container as MuiContainer, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../header";
import Content from "../content";
import Navigation from "../navigation";
import { useWindowDimension } from "../modules";

const useStyles = makeStyles(() => ({
  container: {
    minHeight: ({ minHeight }) => minHeight,
  },
}));

function Container() {
  const classes = useStyles({
    minHeight: useWindowDimension("height"),
  });

  return (
    <Box position="fixed" top={0} left={0} bottom={0} right={0} zIndex="drawer">
      <MuiContainer
        className={classes.container}
        component={Grid}
        container
        direction="column"
        justify="space-between"
      >
        <Header />
        <Content />
        <Navigation />
      </MuiContainer>
    </Box>
  );
}

export default Container;
