import React from "react";
import "./index.scss";

function App() {
  const [lengthValue, setLengthValue] = React.useState(10);
  const [capitals, setCapitals] = React.useState(false);
  const [lowercase, setLowercase] = React.useState(true);
  const [numbers, setNumbers] = React.useState(false);
  const [symbols, setSymbols] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [err, setErr] = React.useState(false);

  const generateRandomPassword = () => {
    if (lengthValue > 0) {
      const lowercaseAll = "abcdefghijklmnopqrstuvwxyz";
      const capitalsAll = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numbersAll = "0123456789";
      const symbolsAll = "!@#$%^&*()";
      let charset = "";
      let pass = "";

      if (capitals) {
        charset += capitalsAll;
      }
      if (lowercase) {
        charset += lowercaseAll;
      }
      if (numbers) {
        charset += numbersAll;
      }
      if (symbols) {
        charset += symbolsAll;
      }

      for (let i = 0; i < lengthValue; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        pass += charset[randomIndex];
      }
      setErr(false);
      setPassword(pass);
    } else {
      setErr(true);
    }
  };
  return (
    <div className="App">
      <span className="subtitle">Password:</span>
      <h2>
        {err
          ? "Invalid length"
          : password === ""
          ? generateRandomPassword()
          : password}
      </h2>
      <div className="row">
        <span>Password length:</span>
        <input
          className="pwg-length"
          type="text"
          value={lengthValue}
          onChange={(e) => {
            setLengthValue(e.target.value);
          }}
        />
      </div>
      <div className="row">
        <span>Capitals:</span>
        <input
          checked={capitals}
          className="styled-checkbox"
          id="checkbox1"
          type="checkbox"
          value="value1"
          onClick={() => (capitals ? setCapitals(false) : setCapitals(true))}
          onChange={(e) => {}}
        />
        <label htmlFor="checkbox1" />
      </div>
      <div className="row">
        <span>Lowercase letters:</span>
        <input
          checked={lowercase}
          className="styled-checkbox"
          id="checkbox2"
          type="checkbox"
          value="value1"
          onClick={() => (lowercase ? setLowercase(false) : setLowercase(true))}
          onChange={(e) => {}}
        />
        <label htmlFor="checkbox2" />
      </div>
      <div className="row">
        <span>Numbers:</span>
        <input
          checked={numbers}
          className="styled-checkbox"
          id="checkbox3"
          type="checkbox"
          value="value1"
          onClick={() => (numbers ? setNumbers(false) : setNumbers(true))}
          onChange={(e) => {}}
        />
        <label htmlFor="checkbox3" />
      </div>
      <div className="row">
        <span>Symbols:</span>
        <input
          checked={symbols}
          className="styled-checkbox"
          id="checkbox4"
          type="checkbox"
          value="value1"
          onClick={() => (symbols ? setSymbols(false) : setSymbols(true))}
          onChange={(e) => {}}
        />
        <label htmlFor="checkbox4" />
      </div>
      <button onClick={() => generateRandomPassword()}>Generate</button>
    </div>
  );
}

export default App;
