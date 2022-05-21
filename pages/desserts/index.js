import MealList from '../../components/mealList';
import MealCard from '../../components/mealCard';

function DessertList({ dessertList }) {

    return (
        <>
            <MealList
                meals={dessertList}
                MealCard={MealCard}
                deleteReqUrl="http://localhost:5000/desserts"
                img="https://martjackamstorage.azureedge.net/am-resources/c79bc8ac-4c69-460f-829b-4d40568d0cca/Images/userimages/banners-may/Pasta_Banner.jpg"
            />
            {/* {dessertList.map(dessert => (
                <div key={dessert._id}>
                    <h1>{dessert.name}</h1>
                    <span onClick={() => deleteDessert("http://localhost:5000/desserts", dessert._id)}>Delete</span>
                </div>
            ))} */}
        </>
    )
}

export default DessertList;


export async function getStaticProps() {
    const response = await fetch("http://localhost:5000/desserts");
    const data = await response.json();
    return {
        props: {
            dessertList: data
        },
        revalidate: 30,
    }
}