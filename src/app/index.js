import Typography from "../typography";
import { root } from "./index.module.css";

function App() {
  return (
    <div className={root}>
      <Typography variant="title">This is a title.</Typography>
      <Typography variant="label">This is a label.</Typography>
      <Typography>This is a parahraph.</Typography>
      <Typography href="https://reactjs.org">Learn React</Typography>
    </div>
  );
}

export default App;
