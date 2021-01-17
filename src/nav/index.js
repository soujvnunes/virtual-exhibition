import { Toolbar, AppBar } from "@material-ui/core";
import { useEffect, useState } from "react";
import useStyles from "./style";
import NavProgress from "../nav-progress";
import { useWindowDimension } from "../modules";
import NavIntro from "../nav-intro";
import NavDecades from "../nav-decades";

function Nav() {
  const [mountNavDecades, setMountNavDecades] = useState(false);
  const [onDecades, setOnDecades] = useState(false);
  const { root } = useStyles();
  const { scroll } = useWindowDimension();
  const commonProps = { onDecades };
  const onIntro = scroll > 0;

  useEffect(() => {
    setTimeout(() => {
      setMountNavDecades(onDecades);
    }, 500);
  }, [onDecades]);

  useEffect(() => {
    setOnDecades(onIntro);
  }, [scroll]);

  function renderChildren() {
    if (mountNavDecades) {
      return <NavDecades {...commonProps} />;
    }

    return <NavIntro {...commonProps} />;
  }

  return (
    <AppBar classes={{ root }} component="nav">
      <NavProgress {...{ onIntro }} />
      <Toolbar disableGutters={mountNavDecades}>{renderChildren()}</Toolbar>
    </AppBar>
  );
}

export default Nav;
