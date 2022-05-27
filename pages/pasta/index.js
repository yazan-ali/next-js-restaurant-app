import MealList from '../../components/mealList';
import MealCard from '../../components/mealCard';

function PastaList({ pastaList }) {

    return (
        <MealList
            mealType="pasta"
            meals={pastaList}
            MealCard={MealCard}
            deleteReqUrl="/api/pasta"
            img="https://martjackamstorage.azureedge.net/am-resources/c79bc8ac-4c69-460f-829b-4d40568d0cca/Images/userimages/banners-may/Pasta_Banner.jpg"
            pageTitle="Pizza House | Pasta"
            pageDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
    )
}

export default PastaList;


export async function getStaticProps() {
    const response = await fetch("http://localhost:3000/api/pasta");
    const data = await response.json();
    return {
        props: {
            pastaList: data
        },
        revalidate: 30,
    }
}