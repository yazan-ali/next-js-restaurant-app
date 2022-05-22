import MealList from '../../components/mealList';
import MealCard from '../../components/mealCard';

function DessertList({ dessertList }) {

    return (
        <>
            <MealList
                meals={dessertList}
                MealCard={MealCard}
                deleteReqUrl="http://localhost:5000/desserts"
                img="https://martjackamstorage.azureedge.net/am-resources/c79bc8ac-4c69-460f-829b-4d40568d0cca/Images/userimages/banners-may/Desserts_Banner.jpg"
                pageTitle="Pizza House | Desserts"
                pageDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
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