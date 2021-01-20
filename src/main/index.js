import { useEffect, useRef, useState } from "react";
import { Box } from "@material-ui/core";
import AppBar from "../app-bar";
import Nav from "../nav";
import Intro from "../intro";
import Hero from "../hero";
import { useConsumer, useWindowDimension, _ } from "../modules";
import useStyles from "./style";
import Dedication from "../dedication";

function Main() {
  const [{ animateScroll }] = useConsumer();
  const { scroll } = useWindowDimension();
  const [height, setHeight] = useState(0);
  const [scrollMain, setScrollMain] = useState(0);
  const wrapper = useRef(null);
  const { main } = useStyles({ scroll: scrollMain, animateScroll });
  const allowScroll = _("md up");

  useEffect(() => {
    setHeight(wrapper.current.scrollHeight);
  }, [wrapper, height]);

  useEffect(() => {
    setScrollMain(scroll);
  }, [scroll]);

  return (
    <>
      <Nav />
      <AppBar />
      <Box
        position={allowScroll ? "fixed" : "relative"}
        width="100%"
        height="100%"
        ref={wrapper}
      >
        <Box component="main" {...(allowScroll && { className: main })}>
          <Intro />
          <Dedication />
          <Hero />
        </Box>
      </Box>
      {allowScroll && <div style={{ height }} />}
    </>
  );
}

export default Main;
