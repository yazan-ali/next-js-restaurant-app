import MealList from '../../components/mealList';
import PizzaCard from '../../components/pizzaCard';

function PizzaList() {

    return (
        <h1>hi</h1>
        // <MealList
        //     mealType="pizza"
        //     meals={pizzaList}
        //     MealCard={PizzaCard}
        //     deleteReqUrl="/api/pizza"
        //     img="https://martjackamstorage.azureedge.net/am-resources/c79bc8ac-4c69-460f-829b-4d40568d0cca/Images/userimages/banners-may/Pizza_Banner-en.jpg"
        //     pageTitle="Pizza House | Pizza"
        //     pageDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        //         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        // />
    )
}

export default PizzaList;


// export async function getStaticProps() {
//     const response = await fetch(`https://next-js-restaurant-pto3ljysn-yazan-ali.vercel.app/api/pizza`);
//     const data = await response.json();
//     return {
//         props: {
//             pizzaList: data
//         },
//         revalidate: 30,
//     }
// }