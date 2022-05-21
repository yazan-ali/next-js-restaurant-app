import Image from "next/image";
import useItemDelete from '../hooks/useDeleteItem';

function MealList({ meals, MealCard, img, deleteReqUrl }) {

    const [mealList, status, deleteMeal] = useItemDelete(meals);

    return (
        <div>
            {/* <Image src={img} alt="pizza-house" layout="fill" /> */}
            {mealList.map(meal => (
                <MealCard
                    meal={meal}
                    key={meal._id}
                    deleteMeal={deleteMeal}
                    deleteReqUrl={deleteReqUrl}
                />
            ))}
        </div>
    )
}

export default MealList