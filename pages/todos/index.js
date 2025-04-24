// import React, { useEffect ,useState } from 'react'
import useSWR from "swr";
const url = "https://jsonplaceholder.typicode.com/todos";
const fecher = (url) => fetch(url).then((res) => res.json()) ;

function Todos() {
    // const [todos , setTodos] = useState ([]);
    // useEffect( ()=> {
    //     fetch(`https://jsonplaceholder.typicode.com/todos`)
    //     .then(res => res.json())
    //     .then(data => setTodos(data)) ;
    // }, [] )

    const { data , error } = useSWR( url, fecher );

    console.log({data , error})
    
  return (
    <div>
        {data ? data.map(todo => <h3 key={todo.id} >{todo.title}</h3>) : <h1>Loading...</h1> }
    </div>
  )
}

export default Todos