import { useState, useRef } from 'react'
import './Editor.css'

const Edit =({ onCreate })=>{

    const [content, setContent] = useState("");
    const contentRef = useRef();

    const toChangeContent =(e)=> {
        setContent(e.target.value)
    }

    const enterSubmit =(e)=>{
        if(e.keyCode === 13) {
            toSubmit();
        }
    }

    const toSubmit =()=>{
        if(content === ""){
            contentRef.current.focus();
            return;
        }
        onCreate(content)
        setContent("")
    }

    return (
        <div className="Editor">
            <input 
                value={content}
                ref={contentRef}
                onKeyDown={enterSubmit}
                onChange={toChangeContent}
                placeholder="새로운 todo..."
            />
            <button onClick = {toSubmit}>추가</button>
        </div>
    )
}
export default Edit
