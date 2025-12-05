import { useState } from 'react'
import './List.css'
import TodoItem from './TodoItem'

const List =({todo, onUpdate, onDelete})=>{
    const [search, setSearch] = useState("")

    const onChangeSearch =(e)=>{
        setSearch(e.target.value)
    }

    const filtering =()=>{
        if (search === "") {
            return todo;
        }else{
            return todo.filter((td)=>{
                return td.content.toLowerCase().includes(search.toLowerCase());
            })
        }
    }

    const filterTodo = filtering();

    return (
        <div className="List">
            <h3>Todo List</h3>
            <input 
                value={search} 
                onChange={onChangeSearch} 
                placeholder="검색어를 입력하세요"
            />
            <div className="todo_wrappers">
                {filterTodo.map((td)=>{
                    return (
                        <TodoItem key={td.id} {...td} onUpdate={onUpdate} onDelete={onDelete}/>
                    )
                })}
            </div>
        </div>
    )
}
export default List