import { useRouter } from 'next/router';
import MealList from '../../../components/mealList';
import PizzaCard from '../../../components/pizzaCard';

function PizzaListByType({ pizzaList, type }) {

    const router = useRouter();

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    const pizzaType = type[0].toUpperCase() + type.slice(1)


    return (
        <>
            <MealList
                meals={pizzaList}
                MealCard={PizzaCard}
                deleteReqUrl="http://localhost:5000/pizza"
                img="https://martjackamstorage.azureedge.net/am-resources/c79bc8ac-4c69-460f-829b-4d40568d0cca/Images/userimages/banners-may/Pizza_Banner-en.jpg"
                pageTitle={`Pizza House | Pizza | ${pizzaType}`}
                pageDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
        </>
    )
}

export default PizzaListByType;

export async function getStaticPaths() {
    return {
        paths: [
            { params: { pizzaType: "beef" } },
            { params: { pizzaType: "chicken" } },
            { params: { pizzaType: "vegetarian" } },
        ],
        fallback: true
    }
}

export async function getStaticProps(context) {

    const { params } = context;

    const response = await fetch(`http://localhost:5000/pizza/type/${params.pizzaType}`);
    const data = await response.json();

    if (data.length === 0) return { notFound: true }

    return {
        props: {
            pizzaList: data,
            type: params.pizzaType
        },
        revalidate: 30,
    }
}