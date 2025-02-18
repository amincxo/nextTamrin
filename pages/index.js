
import styles from '../styles/Home.module.css'


export default function Home({posts}) {
    return (
    <div>
        <h3>amin tamrin next </h3>
        <ul>
            {posts.map(post =>(<li key={post.id} >{post.title}</li>) )}
        </ul>
    </div>
  )
}


export async function getStaticProps () {
    //fetch data from api
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();


    return {
        props: {
            posts :data
        },
    };    
}