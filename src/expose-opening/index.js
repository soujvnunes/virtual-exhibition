import {
  Button,
  DialogContent,
  DialogContentText,
  Grid,
  Icon,
} from "@material-ui/core";
import clsx from "clsx";
import { Fragment } from "react";
import { EXPOSE_DESCRIPTION } from "../constants";
import Dialog from "../dialog";
import useStyles from "./style";
import { _ } from "../modules";
import Logos from "../logos";

function ExposeOpening() {
  const {
    signatureTitle,
    signatureOverline,
    note,
    buttonExplore,
    logos,
  } = useStyles({
    isMobile: _("sm down"),
  });

  return (
    <Dialog open maxWidth="sm" scroll="body">
      <DialogContent>
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
              {...((index === 4 || index === 5) && { align: "center" })}
              className={clsx({
                [signatureTitle]: index === 4,
                [signatureOverline]: index === 5,
                [note]: index === 6,
              })}
            >
              {paragraph}
            </DialogContentText>
            {index === 5 && (
              <Grid container justify="center">
                <Grid item>
                  <Button
                    classes={{ root: buttonExplore }}
                    variant="outlined"
                    endIcon={<Icon>chevron_right</Icon>}
                  >
                    Explorar
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

export default ExposeOpening;
