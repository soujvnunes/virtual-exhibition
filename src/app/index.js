import logo from "./logo.svg";
import { AppRoot, AppHeader, AppLogo, AppLink } from "./index.module.css";

function App() {
  return (
    <div className={AppRoot}>
      <header className={AppHeader}>
        <img src={logo} className={AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
