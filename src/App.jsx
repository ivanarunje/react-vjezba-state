import { useState } from "react";
import "./App.css";

function App() {
  const [obj, setObj] = useState({
    label: "ime",
    value: "Ivana",
  });

  const overHandler = () => {
    setObj({ label: "prezime", value: "Runje" });
  };

  const outHandler = () => {
    setObj({ label: "ime", value: "Ivana" });
  };

  return (
    <div className="App">
      <h1 onMouseOver={overHandler} onMouseOut={outHandler}>
        {obj.label}: {obj.value}
      </h1>
    </div>
  );
}

export default App;
