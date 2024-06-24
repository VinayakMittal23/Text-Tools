import React, { useState } from "react";


const TextForm = (props) => {
  const [text, setText] = useState("Enter text here...");
  const [wordCount, setwordCount] = useState(0);
  const [characterCount, setcharacterCount] = useState(0);
  const [readingTime, setreadingTime] = useState(0);
  const [isClicked, setisClicked] = useState(false);

  let count = text.split((/\s+/)).filter((element)=>{return element.length!==0}).length;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleTextarea = () => {
    let text3 = "";

    if (!isClicked) {
      setText(text3);
      setisClicked(true);
    }
  };

  const handleClick = (type) => {
    if (type == 1) {
      let newText = text.toUpperCase();
      setText(newText);
      // props.showAlert("Converted to uppercase!", "success"); 
    } else if (type == 2) {
      let newText2 = text.toLowerCase();
      // props.showAlert("Converted to lowercase!", "success"); 
      setText(newText2);
    } else if (type == 3) {
      // let count = text.split("  ").length;
      let count = text.split((/\s+/)).filter((element)=>{return element.length!==0}).length;
      setwordCount(count);
    } else if (type == 4) {
      let count2 = text.length;
      setcharacterCount(count2);
    } else if (type == 5) {
      let readTime = 0.008 * count;
      setreadingTime(readTime);
    } else if (type == 6) {
      let clearText = "";
      setText(clearText);
      // props.showAlert("Text Cleared!", "success"); 
    }
  };

  return (
    <>
      <h1 className="fs-3">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          onClick={handleTextarea}
          className="form-control"
          value={text}
          onChange={handleChange}
          id="myBox"
          rows="12"
        ></textarea>
      </div>
      <div className="flex">
        <button onClick={() => handleClick(1)} className="btn btn-primary mx-2 my-1">
          UPPERCASE
        </button>
        <button onClick={() => handleClick(2)} className="btn btn-primary mx-2 my-1">
          lowercase
        </button>
        <button onClick={() => handleClick(3)} className="btn btn-primary mx-2 my-1">
          Word Count
        </button>
        <button onClick={() => handleClick(4)} className="btn btn-primary mx-2 my-1">
          Character Count
        </button>
        <button onClick={() => handleClick(5)} className="btn btn-primary mx-2 my-1">
          Reading Time
        </button>
        <button onClick={() => handleClick(6)} className="btn btn-primary mx-2 my-1">
          Clear Text
        </button>
      </div>
      <div className="my-2 ">
        {wordCount != 0 && wordCount + " words"}{" "}
      </div>
      <div className='my-2 '>{characterCount!=0 &&characterCount + " characters"}
</div>
<div className='my-2 '>{readingTime !=0 && readingTime + " minutes"}
</div>
    </>
  );
};

export default TextForm;
