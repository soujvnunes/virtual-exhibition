import { useEffect, useRef, useState } from "react";
import { Box } from "@material-ui/core";
import clsx from "clsx";
import AppBar from "../app-bar";
import Nav from "../nav";
import Intro from "../intro";
import Hero from "../hero";
import { useConsumer, useWindowDimension, _ } from "../modules";
import useStyles from "./style";
import Dedication from "../dedication";
import ExposeOpening from "../expose-opening";

export default function Main() {
  const { animateScroll } = useConsumer();
  const { scroll } = useWindowDimension();
  const [height, setHeight] = useState(0);
  const [scrollMain, setScrollMain] = useState(0);
  const wrapper = useRef(null);
  const { main } = useStyles({ scroll: scrollMain, animateScroll });
  const allowScroll = _("md up");
  const renderScroller = allowScroll && <div style={{ height }} />;

  useEffect(() => {
    setHeight(wrapper.current.scrollHeight);
  }, [wrapper, height]);
  useEffect(() => {
    setScrollMain(scroll);
  }, [scroll]);

  return (
    <>
      <ExposeOpening />
      <Nav />
      <AppBar />
      <Box
        position={allowScroll ? "fixed" : "relative"}
        width="100%"
        height="100%"
        ref={wrapper}>
        <Box component="main" className={clsx({ [main]: allowScroll })}>
          <Intro />
          <Dedication />
          <Hero />
        </Box>
      </Box>
      {renderScroller}
    </>
  );
}
