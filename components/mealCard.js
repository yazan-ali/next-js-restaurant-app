import styles from '../styles/meal-list.module.scss'

function MealCard({ meal, deleteMeal, deleteReqUrl }) {
    return (
        <div className={styles.meal_card}>
            <div>
                <img src={meal.img} alt={meal.name} />
                <p className={styles.price}>{meal.price} JD</p>
            </div>
            <div>
                <h3>{meal.name}</h3>
                <p>{meal.description}</p>
                <button type="button" className={styles.primary_btn}>Add to cart</button>
            </div>
            <span onClick={() => deleteMeal(deleteReqUrl, meal._id)}>Delete</span>
        </div>
    )
}

export default MealCard