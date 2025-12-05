import './App.css'
import { useState, useRef } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

const mockData = [
  {
    id: 0,
    isCheck: false,
    content: "빨래하기",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 1,
    isCheck: false,
    content: "사놓은 인강보기",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    isCheck: false,
    content: "병원가기",
    date: new Date().toLocaleDateString(),
  },
]

function App() {
  const [todo, setTodo] = useState(mockData);
  const idRef = useRef(3)
  const onCreate =(content)=>{
    const newTodo = {
      id:idRef.current++,
      isCheck: false,
      content: content,
      date: new Date().toLocaleDateString()
    }

    setTodo([newTodo, ...todo])
  }

  const onUpdate =(targetId)=>{
    // todo state 값 중 isCheck만 변경하면 됨
    setTodo(todo.map((td)=>{
      return td.id === targetId 
        ? {...td, isCheck: !td.isCheck} 
        : td
    }))
  }

  return (
    <>
      <div className='App'>
          <Header/>
          <Editor onCreate={onCreate}/>
          <List todo={todo} onUpdate={onUpdate}/>
      </div>
    </>
  )
}

export default App
