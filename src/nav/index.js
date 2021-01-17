import { Toolbar, AppBar } from "@material-ui/core";
import { useEffect, useState } from "react";
import useStyles from "./style";
import NavProgress from "../nav-progress";
import { useWindowDimension } from "../modules";
import NavIntro from "../nav-intro";
import NavDecades from "../nav-decades";

function Nav() {
  const [unmount, setUnmount] = useState(false);
  const [explore, setExplore] = useState(false);
  const { root } = useStyles();
  const { scroll } = useWindowDimension();
  const commonProps = { explore };
  const onIntro = scroll > 0;

  useEffect(() => {
    setTimeout(() => {
      setUnmount(explore);
    }, 500);
  }, [explore]);

  useEffect(() => {
    setExplore(onIntro);
  }, [scroll]);

  function renderChildren() {
    if (unmount) {
      return <NavDecades {...commonProps} />;
    }

    return <NavIntro {...commonProps} />;
  }

  return (
    <AppBar classes={{ root }} component="nav">
      <NavProgress {...{ onIntro }} />
      <Toolbar disableGutters={unmount}>{renderChildren()}</Toolbar>
    </AppBar>
  );
}

export default Nav;
