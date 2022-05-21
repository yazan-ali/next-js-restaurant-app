import MealList from '../../components/mealList';
import MealCard from '../../components/mealCard';

function PastaList({ pastaList }) {

    return (
        <>
            <MealList
                meals={pastaList}
                MealCard={MealCard}
                deleteReqUrl="http://localhost:5000/pasta"
                img="https://martjackamstorage.azureedge.net/am-resources/c79bc8ac-4c69-460f-829b-4d40568d0cca/Images/userimages/banners-may/Pasta_Banner.jpg"
            />
            {/* {pastaList.map(pasta => (
                <div key={pasta._id}>
                    <h1>{pasta.pasta_name}</h1>
                    <span onClick={() => deletePasta(`http://localhost:5000/pasta`, pasta._id)}>Delete</span>
                </div>
            ))} */}
        </>
    )
}

export default PastaList;


export async function getStaticProps() {
    const response = await fetch("http://localhost:5000/pasta");
    const data = await response.json();
    return {
        props: {
            pastaList: data
        },
        revalidate: 30,
    }
}