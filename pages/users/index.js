import Link from 'next/link'
import React from 'react'

function Users({ users }) {
  return (
    <div>
        <ul>
            {
                users.map((user) => ( 
                    <li key={user.id} >
                        <Link href={`/users/${user.id}`} > {user.name} </Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Users


export async function getStaticProps() {
    const res = await fetch ('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return {
        props: {users: data},
    }
}