import React from "react";
import "./NumberSlider.css";

const NumberSlider = ({ numberOfCharacters, setNumberOfCharacters }) => {
  return (
    <div className="slider-wrapper">
      <input
        type="range"
        className="slider"
        step={1}
        min={8}
        max={100}
        value={numberOfCharacters}
        onChange={(e) => {
          setNumberOfCharacters(e.target.value);
        }}
      />
      <output className="bubble">{numberOfCharacters}</output>
    </div>
  );
};

export default NumberSlider;
