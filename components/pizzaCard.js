import Link from 'next/link';

function PizzaCard({ meal, deleteMeal, deleteReqUrl }) {
    return (
        <>
            <Link href={`/pizza/${meal._id}`} passHref>
                <h1>{meal.name}</h1>
            </Link>
            <p>{meal.description}</p>
            <p>{meal.type}</p>
            <span onClick={() => deleteMeal(deleteReqUrl, meal._id)}>Delete</span>
        </>
    )
}

export default PizzaCard