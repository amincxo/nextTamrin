import React from 'react'
import Link from 'next/link'

function Albumes({albums}) {
  return (
    <div>
        <h1>Albumes</h1>
        <ul>
            {albums.map((album)=> (
                <li key={album.id} >
                    <Link href={`/albums/${album.id}`}><h3>{album.title}</h3></Link>
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