import { useTheme } from "../modules";
import Typography from "../typography";
import { root } from "./index.module.css";

function App() {
  const [theme, setTheme] = useTheme();

  return (
    <div className={root}>
      <Typography variant="title">This is a title.</Typography>
      <Typography variant="label">This is a label.</Typography>
      <Typography>This is a paragraph.</Typography>
      <Typography href="https://reactjs.org">Learn React</Typography>
      <button type="button" onClick={() => setTheme(!theme)}>
        Click
      </button>
    </div>
  );
}

export default App;
