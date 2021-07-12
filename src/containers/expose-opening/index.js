import {
  Button,
  DialogContent,
  DialogContentText,
  Grid,
  Icon,
} from "@material-ui/core";
import clsx from "clsx";
import { Fragment, useEffect, useState } from "react";
import { EXPOSE_DESCRIPTION, EXPOSE_OPENING_KEY } from "../../constants";
import Dialog from "../../components/dialog";
import useStyles from "./style";
import {
  useCache,
  useConsumer,
  useWindowDimension,
  _,
} from "../../libs/modules";
import Logos from "../../components/logos";

export default function ExposeOpening() {
  const {
    signatureTitle,
    signatureOverline,
    note,
    buttonExplore,
    logos,
    dialogContent,
  } = useStyles({
    isMobile: _("sm down"),
  });
  const { heroRef } = useConsumer();
  const [offsetTop, setOffsetTop] = useState(0);
  const [open, setOpen] = useState(false);
  const { scroll } = useWindowDimension();
  const [cache, setCache] = useCache({ key: EXPOSE_OPENING_KEY });

  useEffect(() => {
    if (heroRef) {
      setOffsetTop(heroRef.current.offsetTop);
    }
  }, [heroRef]);
  useEffect(() => {
    if (!cache && offsetTop) {
      setTimeout(() => {
        setOpen(scroll >= offsetTop);
      }, 1500);
    }
  }, [cache, offsetTop, scroll]);
  function handleExploreClick() {
    setOpen(false);
    setCache({ setKey: EXPOSE_OPENING_KEY, cache: "opened" });
  }

  return (
    <Dialog {...{ open }} scroll="body">
      <DialogContent classes={{ root: dialogContent }}>
        {EXPOSE_DESCRIPTION.map((paragraph, index) => (
          <Fragment key={paragraph}>
            {index === 4 && (
              <Grid container justify="center">
                <Grid item>
                  <Logos classes={{ root: logos }} />{" "}
                </Grid>
              </Grid>
            )}
            <DialogContentText
              align={index === 4 || index === 5 ? "center" : "left"}
              className={clsx({
                [signatureTitle]: index === 4,
                [signatureOverline]: index === 5,
                [note]: index === 6,
              })}>
              {paragraph}
            </DialogContentText>
            {index === 5 && (
              <Grid container justify="center">
                <Grid item>
                  <Button
                    classes={{ root: buttonExplore }}
                    variant="outlined"
                    endIcon={<Icon>chevron_right</Icon>}
                    onClick={handleExploreClick}>
                    Continuar
                  </Button>
                </Grid>
              </Grid>
            )}
          </Fragment>
        ))}
      </DialogContent>
    </Dialog>
  );
}
