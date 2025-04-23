import React, { useEffect ,useState } from 'react'

function Todos() {
    const [todos , setTodos] = useState ([]);
    useEffect( ()=> {
        fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(res => res.json())
        .then(data => setTodos(data)) ;
    }, [] )
  return (
    <div>
        {todos.length ? todos.map(todo => <h3 key={todo.id} >{todo.title}</h3>) : <h1>Loading...</h1> }
    </div>
  )
}

export default Todos