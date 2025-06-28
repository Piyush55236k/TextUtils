import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [previewText, setPreviewText] = useState(''); // new state

  const handleOnChange = (event) => {
    setText(event.target.value);
    setIsDisabled(false); // optional: re-enable preview on change
  };

  const upperCase = (event) => {
    setText(text.toUpperCase());

  };

  const lowerCase = (event) => {
    setText(text.toLowerCase());

  };
    const clearText = (event) => {
    setText('');

  };
   const reverseText = (event) => {
  event.preventDefault(); // optional if used in a button
  let newText2 = text.split("").reverse().join("");
  setText(newText2);
};

  const extractNumber = (event) => {
  event.preventDefault(); // optional if used in a button
  const nums = text.match(/\d+/g) || [];
  let newText2 = nums.map(Number).join(" ");
  setText(newText2);
};
const findAndReplace = (event) => {
  event.preventDefault();
  let find = prompt("Enter string to find:");
  let replaceWith = prompt("Enter string to replace it with:");

  if (find && replaceWith) {
    const newText = text.replaceAll(find, replaceWith);
    setText(newText);
  }
};

  const showPreview = () => {
    setIsDisabled(true);
    setPreviewText(text);  // append new text to preview
  };

  return (
    <div className ="container min-vh-100">
      <div className="container mt-5">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            id="text"
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 p-3 my-2" onClick={upperCase} >
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 p-3 my-2" onClick={lowerCase} >
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 p-3 my-2" onClick={clearText} >
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 p-3 my-2" onClick={reverseText} >
          Reverse Text
        </button>
        <button className="btn btn-primary mx-1 p-3 my-2" onClick={extractNumber} >
         Extract Number
        </button>
        <button className="btn btn-primary mx-1 p-3 my-2" onClick={findAndReplace} >
         Find and Replace
        </button>
      </div>

      <div className="container my-4">
        <h2>Your Text Summary</h2>
        <h5>
          {text.trim().split(/\s+/).length-1} words and {text.length} characters
        </h5>
        <h5>{0.008 * text.trim().split(/\s+/).length} minutes to read</h5>

        <h2 className="my-3">Preview Your Text</h2>
        <button
          className="btn btn-primary"
          disabled={isDisabled}
          onClick={showPreview}
        >
          Preview Text
        </button>
        <div className="container d-justify mt-3" id="preview">
          {previewText}
        </div>
      </div>
    </div>
  );
}
