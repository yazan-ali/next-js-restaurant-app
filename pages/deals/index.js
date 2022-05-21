import MealList from '../../components/mealList';
import MealCard from '../../components/mealCard';

function Deals({ dealList }) {


    return (
        <>
            <MealList
                meals={dealList}
                MealCard={MealCard}
                deleteReqUrl="http://localhost:5000/deals"
                img="https://martjackamstorage.azureedge.net/am-resources/c79bc8ac-4c69-460f-829b-4d40568d0cca/Images/userimages/banners-may/Pasta_Banner.jpg"
            />
        </>
    )
}

export default Deals;


export async function getStaticProps() {
    const response = await fetch("http://localhost:5000/deals");
    const data = await response.json();
    return {
        props: {
            dealList: data
        },
        revalidate: 30,
    }
}