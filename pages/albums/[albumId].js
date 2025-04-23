import React from 'react'

function AlbumDetails({ album }) {
  return (
    <div>
        <h2>AlbumDetails</h2>
        <h3>{album.id} - {album.userId} | {album.title} </h3>
    </div>
  )
}

export default AlbumDetails


export async function getServerSideProps(context) {
    const { params } = context;
    const res =  await fetch(`https://jsonplaceholder.typicode.com/albums/${params.albumId}`)
    const data = await res.json();
    console.log(data);

    return {
        props: {album: data},
    }
}