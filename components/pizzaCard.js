import styles from '../styles/meal-list.module.scss'
import Link from 'next/link';

function PizzaCard({ meal, deleteMeal, deleteReqUrl }) {
    return (
        <div className={styles.meal_card}>
            <div>
                <img src={meal.img} />
                <p className={styles.price}>{meal.price?.type_1?.medium} JD</p>
            </div>
            <div>
                <Link href={`/pizza/${meal._id}`} passHref>
                    <h3 style={{ cursor: "pointer" }}>{meal.name}</h3>
                </Link>
                <p>{meal.description}</p>
                <Link href={`/pizza/${meal._id}`} passHref>
                    <button type="button" className={styles.primary_btn}>Add to cart</button>
                </Link>
            </div>
            <span onClick={() => deleteMeal(deleteReqUrl, meal._id)}>Delete</span>
        </div>
    )
}

export default PizzaCard