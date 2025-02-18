
import styles from '../styles/Home.module.css'


export default function Home({data}) {
    return (
    <div>
        <h3>amin tamrin next </h3>
        <h1>{data}</h1>
    </div>
  )
}


export async function getStaticProps () {
    //fetch data from api
    const data = 'Amin Borvayeh';

    return {
        props: {
            data
        },
    };    
}