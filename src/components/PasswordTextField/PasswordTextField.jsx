import React, { useState, useEffect } from "react";
import { BsClipboard } from "react-icons/bs";
import { BsClipboardCheck } from "react-icons/bs";
import "./PasswordTextField.css";

const PasswordTextField = ({ password, copied, setCopied }) => {
  return (
    <div className="password-textfield-container">
      <input
        id="password"
        label="Password"
        placeholder="Password"
        className="password-textfield"
        autoComplete="off"
        value={password}
        type="text"
      />
      <div className="password-textfield-icon-container">
        {copied ? (
          <div className="password-textfield-icon-div checked">
            <BsClipboardCheck size="1.5em" color="white" />
          </div>
        ) : (
          <div className="password-textfield-icon-div">
            <BsClipboard
              onClick={() => {
                navigator.clipboard.writeText(password);
                setCopied(true);
              }}
              size="1.5em"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordTextField;
