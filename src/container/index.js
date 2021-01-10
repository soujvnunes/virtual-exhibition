import { useEffect, useReducer } from "react";
import { Container as MuiContainer, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../header";
import Content from "../content";
import Footer from "../footer";
import { reducer } from "../modules";
import { REDUCER_HEIGHT } from "../constants";

const useStyles = makeStyles(() => ({
  container: {
    minHeight: ({ height }) => height,
  },
}));

function Container() {
  const [{ height }, dispatch] = useReducer(reducer, { height: 0 });
  const { container } = useStyles({ height });
  const { innerHeight } = window;

  useEffect(() => {
    dispatch({ type: REDUCER_HEIGHT, payload: innerHeight });
  }, [window]);

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
