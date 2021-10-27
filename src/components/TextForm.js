import React, { useState } from "react";
import PropTypes from "prop-types";
import "./TextForm.css";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("success", "converted to uppercase");
  };

  const handleLoweCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("success", "converted to lowercase");
  };

  const handleDetectChange = (event) => {
    setText(event.target.value);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("success", "text has been copied");
  };

  const handleExtraSpaces = () => {
    var newStr = text.split(/[ ]+/);
    setText(newStr.join(" "));
    props.showAlert("success", "Extra spaces removed");
  };

  const clearText = () => {
    setText("");
    props.showAlert("success", "all text has been cleared");
  };

  const convertFirstCharcCaps = () => {
    setText(text.charAt(0).toUpperCase() + text.slice(1));
  };
  /*
    in React to set text as it is a functionall based component to set value we have to use other
    not like class based component.LIKE

    For Class Based we do to change the state
    text = 'ABCED' // TO set the new value of text.

    But For Fucntional based we have to use "useState" Hooks to change the state
    setText('ABCED')
  */
  return (
    <>
      <div className="container my-3">
        <h2
          className="mb-4"
          style={{ color: props.switchMode === "light" ? "black" : "white" }}
        >
          {props.heading}
        </h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleDetectChange}
            id="mytextBox"
            rows="8"
            style={{
              backgroundColor:
                props.switchMode === "light" ? "white" : "#80808042",
              color: props.switchMode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <div>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleUpperCase}
            disabled={!text}
          >
            Convert Text To Uppercase
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleLoweCase}
            disabled={text.length === 0}
          >
            Convert Text To Lower Case
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={convertFirstCharcCaps}
            disabled={text.length === 0}
          >
            Convert First Charc Caps
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleCopyText}
            disabled={text.length === 0}
          >
            Copy Text
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleExtraSpaces}
            disabled={text.length === 0}
          >
            Handle Text Spaces
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={clearText}
            disabled={text.length === 0}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div
        className="container my-2"
        style={{ color: props.switchMode === "light" ? "black" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <div className="text-summary">
          <p className="text-details">
            {
              text.split(/\s+/).filter((elemnt) => {
                return elemnt.length !== 0;
              }).length
            }{" "}
            words
          </p>
          <p>{text.length} characters</p>
        </div>
        <div>
          <p>
            {0.008 *
              text.split(" ").filter((elemnt) => {
                return elemnt.length !== 0;
              }).length}{" "}
            takes times to read the text
          </p>
        </div>
      </div>
      <div
        className="container my-2"
        style={{ color: props.switchMode === "light" ? "black" : "white" }}
      >
        <h2>Preview</h2>
        <div className="text-summary">
          <p>
            {text.length > 0
              ? text
              : "Enter something in the text-box above to preview it here"}
          </p>
        </div>
      </div>
    </>
  );
}

TextForm.prototype = {
  heading: PropTypes.string,
};

TextForm.defaultProps = {
  heading: "Enter The Text To Analyze !!!",
};
