import './List.css'
import TodoItem from './TodoItem'

const List =()=>{
    return (
        <div className="List">
            <h3>Todo List</h3>
            <input placeholder="검색어를 입력하세요"/>
            <div className="todo_wrappers">
                <TodoItem/>
                <TodoItem/>
            </div>
        </div>
    )
}
export default List