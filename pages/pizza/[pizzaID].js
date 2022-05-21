import { useRouter } from 'next/router';

function Pizza({ pizza }) {

    const router = useRouter();

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    return (
        <div key={pizza._id}>
            <h1>{pizza.name}</h1>
            <p>{pizza.description}</p>
        </div>
    )
}

export default Pizza;

export async function getStaticPaths() {

    return {
        paths: [
            { params: { pizzaID: "5f465cac3e4344556c66a29c" } },
            { params: { pizzaID: "5f50da598a692200178d525e" } },
        ],
        fallback: true
    }
}

export async function getStaticProps(context) {

    const { params } = context;

    const response = await fetch(`http://localhost:5000/pizza/${params.pizzaID}`);
    const data = await response.json();

    if (!data._id) return { notFound: true }

    return {
        props: {
            pizza: data
        },
        revalidate: 30,
    }
}