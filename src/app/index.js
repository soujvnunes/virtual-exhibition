import Button from "../button";
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
      <Button onClick={() => setTheme(!theme)}>I&apos;m a button</Button>
    </div>
  );
}

export default App;
