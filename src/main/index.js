import { useEffect, useRef, useState } from "react";
import { Box } from "@material-ui/core";
import AppBar from "../app-bar";
import Nav from "../nav";
import Intro from "../intro";
import Hero from "../hero";
import { useWindowDimension } from "../modules";
import useStyles from "./style";

function Main() {
  const { scroll } = useWindowDimension();
  const [height, setHeight] = useState(0);
  const [scrollMain, setScrollMain] = useState(0);
  const wrapper = useRef(null);
  const { main } = useStyles({ scroll: scrollMain });

  useEffect(() => {
    setHeight(wrapper.current.scrollHeight);
  }, [wrapper]);

  useEffect(() => {
    setScrollMain(scroll);
  }, [scroll]);

  return (
    <>
      <Nav />
      <AppBar />
      <Box position="fixed" width="100%" height="100%" ref={wrapper}>
        <Box component="main" className={main}>
          <Intro />
          <Hero />
        </Box>
      </Box>
      <div style={{ height }} />
    </>
  );
}

export default Main;
