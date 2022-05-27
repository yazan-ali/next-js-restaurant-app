import { useRouter } from 'next/router';
import PizzaPage from '../../components/pizzaPage';

function Pizza({ pizza, starters }) {

    const router = useRouter();

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <PizzaPage pizza={pizza} starters={starters} />
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

    const urls = [`https://pizza-house.vercel.app/api/pizza/${params.pizzaID}`, "https://pizza-house.vercel.app/api/starters"];


    const responses = await Promise.all(urls.map(url => fetch(url)))
    const data = await Promise.all(responses.map(res => res.json()))

    if (!data[0]._id || data[1].length === 0) return { notFound: true }


    return {
        props: {
            pizza: data[0],
            starters: data[1]
        },
        revalidate: 30,
    }
}