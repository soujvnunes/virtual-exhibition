import Button from "../button";
import Grid from "../grid";
import Icon from "../icon";
import { useTheme } from "../modules";
import Typography from "../typography";
import { root } from "./index.module.css";

function App() {
  const [theme, setTheme] = useTheme();

  return (
    <div className={root}>
      <Grid container>
        <Grid span={4} item>
          <Typography variant="title">This is a title.</Typography>
        </Grid>
        <Grid span={8} item>
          <Typography variant="title">This is a title.</Typography>
          <Button
            onClick={() => setTheme(!theme)}
            variant="outlined"
            endIcon={<Icon name="face" />}
          >
            I&apos;m a button
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid span={6} item>
          <Typography variant="title">This is a title.</Typography>
        </Grid>
        <Grid span={6} item>
          <Typography variant="title">This is a title.</Typography>
          <Button
            onClick={() => setTheme(!theme)}
            variant="outlined"
            endIcon={<Icon name="face" />}
          >
            I&apos;m a button
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
