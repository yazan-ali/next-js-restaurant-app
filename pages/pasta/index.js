import MealList from '../../components/mealList';
import MealCard from '../../components/mealCard';
import DB_Connect from "../../db-connect";
import Pasta from "../../models/pastaModel"

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
    // const response = await fetch(`https://next-js-restaurant-pto3ljysn-yazan-ali.vercel.app/api/pasta`);
    // const data = await response.json();
    await DB_Connect();
    // try {
    const pasta = await Pasta.find({})
    // } catch (err) {
    // }
    return {
        props: {
            pastaList: pasta
        },
        revalidate: 30,
    }
}