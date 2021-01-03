import logo from "./logo.svg";
import { root, header, logo as appLogo, link } from "./index.module.css";
import Typography from "../typography";

function App() {
  return (
    <div className={root}>
      <header className={header}>
        <img src={logo} className={appLogo} alt="logo" />
        <Typography variant="title" weight="bolder">
          This is a title.
        </Typography>
        <Typography variant="label" weight="bolder">
          This is a label.
        </Typography>
        <Typography size="small">
          Edit src/App.js and save to reload.
        </Typography>
        <Typography>Edit src/App.js and save to reload.</Typography>
        <Typography size="large">
          Edit src/App.js and save to reload.
        </Typography>
        <Typography className={link} href="https://reactjs.org">
          Learn React
        </Typography>
      </header>
    </div>
  );
}

export default App;
