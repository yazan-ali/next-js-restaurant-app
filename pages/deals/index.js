import MealList from '../../components/mealList';
import MealCard from '../../components/mealCard';

function Deals({ dealList }) {


    return (
        <MealList
            mealType="deals"
            meals={dealList}
            MealCard={MealCard}
            deleteReqUrl="/api/deals"
            img="https://storage.eu.content-cdn.io/am-resources/c79bc8ac-4c69-460f-829b-4d40568d0cca/Images/userimages/banners-may/Deals_banner.jpg"
            pageTitle="Pizza House | Deals"
            pageDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
    )
}

export default Deals;


export async function getStaticProps() {
    const response = await fetch("https://limitless-beyond-06124.herokuapp.com/deals");
    const data = await response.json();
    return {
        props: {
            dealList: data
        },
        revalidate: 30,
    }
}