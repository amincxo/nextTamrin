import React from 'react'

function UserDetail({ data }) {
  return (
    <div>
        <h1>User Detail</h1>
        <h3>{data.name}</h3>
        <h3>{data.email}</h3>
    </div>
  )
}

export default UserDetail;

export async function getStaticPaths () {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    const paths = data.map((user) => ({
        params :
         {
            userId: user.id.toString(),
         }}));
    
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps (context) {
    const {params} = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`) 
    const data = await res.json();
    console.log(data)
    return{
        props: { data }
    }
}