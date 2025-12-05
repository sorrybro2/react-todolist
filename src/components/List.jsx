import './List.css'
import TodoItem from './TodoItem'

const List =({todo})=>{
    return (
        <div className="List">
            <h3>Todo List</h3>
            <input placeholder="검색어를 입력하세요"/>
            <div className="todo_wrappers">
                {todo.map((td)=>{
                    return (
                        <TodoItem key={td.id} {...td}/>
                    )
                })}
            </div>
        </div>
    )
}
export default List