import logo from "./logo.svg";
import { root, header, logo as appLogo, link } from "./index.module.css";

function App() {
  return (
    <div className={root}>
      <header className={header}>
        <img src={logo} className={appLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>
          <a
            className={link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </h1>
      </header>
    </div>
  );
}

export default App;
