import logo from "./logo.svg";
import "./App.css";
import foret from "./foret.jfif";
import video from "./video.mp4";

import "./style.css";


function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
          <h1 className="titlered"> Marwen Othmen</h1>
          <br />
          <img className src={foret} />

          <br />

          <img src={"plage.jfif"} />
        </div>

        <video width={320} height={240} controls>
          <source src={video}type="video/mp4" />
        </video>
      </header>
    </div>
  );
}

export default App;
