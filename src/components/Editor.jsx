import { useState } from 'react'
import './Editor.css'

const Edit =({ onCreate })=>{

    const [content, setContent] = useState();

    const toChangeContent =(e)=> {
        setContent(e.target.value)
    }

    const toSubmit =()=>{
        onCreate(content)
    }

    return (
        <div className="Editor">
            <input 
                value={content}
                onChange={toChangeContent}
                placeholder="새로운 todo..."
            />
            <button onClick = {toSubmit}>추가</button>
        </div>
    )
}
export default Edit
