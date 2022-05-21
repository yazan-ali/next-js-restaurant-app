import MealList from '../../components/mealList';
import PizzaCard from '../../components/pizzaCard';

function PizzaList({ pizzaList }) {

    return (
        <>
            <MealList
                meals={pizzaList}
                MealCard={PizzaCard}
                deleteReqUrl="http://localhost:5000/pizza"
                img="https://martjackamstorage.azureedge.net/am-resources/c79bc8ac-4c69-460f-829b-4d40568d0cca/Images/userimages/banners-may/Pasta_Banner.jpg"
            />
        </>
    )
}

export default PizzaList;


export async function getStaticProps() {
    const response = await fetch("http://localhost:5000/pizza");
    const data = await response.json();
    return {
        props: {
            pizzaList: data
        },
        revalidate: 30,
    }
}