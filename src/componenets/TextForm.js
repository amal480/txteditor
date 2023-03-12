import React, { useEffect, useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("")
    const [words, setwords] = useState(0)

    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([text], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        element.click();
}

    const handleUpClick = () => {
        let newt = text.toUpperCase();
        setText(newt)
    }

    const handleLoClick = () => {
        let newt = text.toLowerCase();
        setText(newt)
    }

    const handleClearClick = () => {
        let newt = '';
        setText(newt)
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value)
    }
    const trim=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "))
        
    }

    useEffect(() => {
        const list1 = text.split(" ");
        let count = 0;
        list1.forEach((word) => {
            if (word.trim() !== "")
                count++;
        });
        setwords(count);
    }, [text]);

    return (
        <>
        <div className='container' >

            <div className='container'>
                {/* <div classNameName="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div> */}
                <div className="mb-3">
                    <h1 htmlFor="mybox" className={`form-label text-${props.tmode} my-3`}>{props.text}</h1>
                    <textarea className={`form-control text-${props.tmode}`} value={text} placeholder='Text' onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'grey':'white'}} id="box" rows="8"></textarea>
                </div>

                <button disabled={text.length===0} className={`btn btn-primary mx-1 text-${props.tmode}`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className={`btn btn-primary mx-1 text-${props.tmode}`} onClick={handleLoClick}>Convert to Lowercase</button>
                <button className={`btn btn-primary mx-1 text-${props.tmode}`} onClick={handleClearClick}>Clear Text</button>
                <button className={`btn btn-primary mx-1 text-${props.tmode}`} onClick={downloadTxtFile}>Download Text</button>
                <button className={`btn btn-primary mx-1 text-${props.tmode}`} onClick={trim}>Trim</button>
            </div>
            <div className="container">
                <h2 className={`text-${props.tmode}`}>Your text summary</h2>
                <p className={`text-${props.tmode}`}>{words} words and {text.length} characters</p>
                <h2>Preview:</h2>
                <p>{text.length<=0?'Enter text':text}</p>
            </div>
            
            </div>
        </>
    )
}
