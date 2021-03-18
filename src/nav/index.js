import { Toolbar, AppBar } from "@material-ui/core";
import { useEffect, useState } from "react";
import useStyles from "./style";
import NavProgress from "../nav-progress";
import { useConsumer, useWindowDimension } from "../modules";
import NavIntro from "../nav-intro";
import NavDecades from "../nav-decades";

export default function Nav() {
  const [{ heroRef }] = useConsumer();
  const [mountNavDecades, setMountNavDecades] = useState(false);
  const [onDecades, setOnDecades] = useState(false);
  const [offsetTop, setOffsetTop] = useState(0);
  const { root } = useStyles();
  const { scroll, height } = useWindowDimension();
  const commonProps = { onDecades };
  const onIntro = scroll > offsetTop - height;
  const CompChild = mountNavDecades ? NavDecades : NavIntro;

  useEffect(() => {
    if (heroRef) {
      setOffsetTop(heroRef.current.offsetTop);
    }
  }, [heroRef]);
  useEffect(() => {
    setTimeout(() => {
      setMountNavDecades(onDecades);
    }, 500);
  }, [onDecades]);
  useEffect(() => {
    setOnDecades(onIntro);
  }, [onIntro, scroll]);

  return (
    <AppBar classes={{ root }} component="nav">
      <NavProgress {...{ onIntro }} />
      <Toolbar disableGutters={mountNavDecades}>
        <CompChild {...commonProps} />
      </Toolbar>
    </AppBar>
  );
}
