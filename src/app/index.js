import Button from "../button";
import ButtonIcon from "../button-icon";
import Icon from "../icon";
import { useTheme } from "../modules";
import Typography from "../typography";
import { root } from "./index.module.css";

function App() {
  const [theme, setTheme] = useTheme();

  return (
    <div className={root}>
      <Typography variant="title">This is a title.</Typography>
      <Typography>This is a paragraph.</Typography>
      <Typography href="https://reactjs.org">Learn React</Typography>
      <Button
        onClick={() => setTheme(!theme)}
        variant="outlined"
        startIcon={<Icon name="face" />}
      >
        I&apos;m a button
      </Button>
      <Button
        onClick={() => setTheme(!theme)}
        variant="outlined"
        endIcon={<Icon name="face" />}
      >
        I&apos;m a button
      </Button>
      <ButtonIcon onClick={() => setTheme(!theme)} variant="outlined">
        <Icon name="face" />
      </ButtonIcon>
    </div>
  );
}

export default App;
