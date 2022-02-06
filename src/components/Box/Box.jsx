import React, { useState, useEffect } from "react";
import "./Box.css";
import PasswordTextField from "../PasswordTextField/PasswordTextField";
import NumberSlider from "../NumberSlider/NumberSlider";

const Main = () => {
  const [numberOfCharacters, setNumberOfCharacters] = useState(27);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    let passStr = "";
    for (let i = 0; i < numberOfCharacters; i++) {
      let j = Math.floor(Math.random() * (126 - 33) + 33);
      passStr += String.fromCharCode(j);
    }

    return passStr;
  };

  return (
    <div className="box">
      <h3>How many characters do you want in your password?</h3>
      <div className="controllers">
        <NumberSlider
          numberOfCharacters={numberOfCharacters}
          setNumberOfCharacters={setNumberOfCharacters}
        />
        <button
          className="button"
          onClick={() => {
            setPassword(generatePassword);
            setCopied(false);
          }}
        >
          Generate
        </button>
      </div>
      <div className="password-button-container">
        <PasswordTextField
          password={password}
          copied={copied}
          setCopied={setCopied}
        />
      </div>
    </div>
  );
};

export default Main;
