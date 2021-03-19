import { Toolbar, AppBar } from "@material-ui/core";
import { useEffect, useState } from "react";
import useStyles from "./style";
import NavProgress from "../nav-progress";
import { useConsumer, useWindowDimension } from "../modules";
import NavIntro from "../nav-intro";
import NavDecades from "../nav-decades";

export default function Nav() {
  const { heroRef } = useConsumer();
  const [mountNavDecades, setMountNavDecades] = useState(false);
  const [decades, setDecades] = useState(false);
  const [offsetTop, setOffsetTop] = useState(0);
  const { root } = useStyles();
  const { scroll, height } = useWindowDimension();
  const intro = scroll > offsetTop - height;
  const Component = mountNavDecades ? NavDecades : NavIntro;

  useEffect(() => {
    if (heroRef) {
      setOffsetTop(heroRef.current.offsetTop);
    }
  }, [heroRef]);
  useEffect(() => {
    setTimeout(() => {
      setMountNavDecades(decades);
    }, 500);
  }, [decades]);
  useEffect(() => {
    setDecades(intro);
  }, [intro, scroll]);

  return (
    <AppBar classes={{ root }} component="nav">
      <NavProgress onIntro={intro} />
      <Toolbar disableGutters={mountNavDecades}>
        <Component onDecades={decades} />
      </Toolbar>
    </AppBar>
  );
}
