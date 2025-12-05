import './TodoItem.css'

const TodoItem =({id, isCheck, content, date, onUpdate})=>{
    const onChangeCheckbox =()=>{
        onUpdate(id)
    }
    return (
        <div className="TodoItem">
            <input onChange={onChangeCheckbox} checked={isCheck} type="checkbox"/>
            <div className="content">{content}</div>
            <div className="date">{date}</div>
            <button>삭제</button>
        </div>
    )
}
export default TodoItem