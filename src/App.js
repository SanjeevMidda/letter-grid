import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [rotate, setRotate] = useState(0);
  const [colors, setColors] = useState([0, 0, 0]);

  let randomNumber = () => {
    return Math.floor(Math.random() * 255);
  };

  let gridContainerStyles = {
    transform: `rotate(${rotate}deg)`,
    background: `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`,
  };

  let change = () => {
    if (rotate === 360) {
      setRotate(0);
    } else {
      setRotate(rotate + 30);
    }

    setColors([randomNumber(), randomNumber(), randomNumber()]);
  };

  useEffect(() => {
    setInterval(change, 1000);
    console.log(rotate);
  });

  return (
    <div
      className="App"
      onClick={() => {
        setRotate(rotate + 30);
        setColors([randomNumber(), randomNumber(), randomNumber()]);
      }}
    >
      <div className="grid-container" style={gridContainerStyles}>
        <h1 className="move2">1</h1>
        <h1 className="move">2</h1>
        <h1 className="move2">3</h1>
        <h1 className="move">4</h1>
      </div>

      <div className="square"></div>
    </div>
  );
}

export default App;
