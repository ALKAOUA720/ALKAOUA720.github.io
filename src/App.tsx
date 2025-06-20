import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.less";
import { getBingImage } from "./utils/utils";

function App() {
  const [count, setCount] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState("");

  const init = () => {
    const imgUrl = getBingImage();
    setBackgroundImage(imgUrl);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div
      className="back-page-body"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="page-content">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            数量是 {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
