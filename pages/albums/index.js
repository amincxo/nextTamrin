import React from 'react'

function Albumes({albums}) {
  return (
    <div>
        <h1>Albumes</h1>
        <ul>
            {albums.map((album)=> (
                <li key={album.id} >
                    <h3>{album.title}</h3>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Albumes

export async function getServerSideProps(context) {
    const {parama , req , res , query } = context 
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    console.log(query)
    const data = await response.json();
    return { 
        props: {albums : data},
    };
}