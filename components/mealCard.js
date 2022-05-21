function MealCard({ meal, deleteMeal, deleteReqUrl }) {
    return (
        <>
            <h1>{meal.name}</h1>
            <p>{meal.description}</p>
            <span onClick={() => deleteMeal(deleteReqUrl, meal._id)}>Delete</span>
        </>
    )
}

export default MealCard