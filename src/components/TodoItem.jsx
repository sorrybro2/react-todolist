import './TodoItem.css'

const TodoItem =({id, isCheck, content, date})=>{
    return (
        <div className="TodoItem">
            <input readOnly checked={isCheck} type="checkbox"/>
            <div className="content">{content}</div>
            <div className="date">{date}</div>
            <button>삭제</button>
        </div>
    )
}
export default TodoItem