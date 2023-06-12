import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText]=useState("");
    // setText("hdbvch");

const handleUpClick = () => {
    let newText= text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to upper case","success")
}

const handleLoClick = () => {
    let newText= text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to lower case","success")
}

const handleOnChange = (event) => {
    setText(event.target.value)
}

const removeText =() => {
    setText('')
    props.showAlert("Text cleared","success")
}

const handleCopy = () => {
    var text=document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text copied","success")
}

const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(' '))
    props.showAlert("Extra spaces removed","success")
}

  return (
    <>
    <div className="container" style={{color: props.mode==="light"?"black":"white"}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control my-3" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==="light"?"white":"#7371ff", color: props.mode==="light"?"black":"white"}}></textarea>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={removeText}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        
    </div>
    <div className="container my-2" style={{color: props.mode==="light"?"black":"white"}}>
        <h1>Summary</h1>
        <p>{text.split(" ").length} words and {text.length} chars</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in textbox to preview'}</p>
    </div>
    </>
  )
}
