import styles from '../styles/meal-list.module.scss';
import AddToCartBtn from './addToCartBtn';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

function MealCard({ meal, mealType, deleteMeal, deleteReqUrl }) {

    const { data: session, status } = useSession();

    return (
        <div className={styles.meal_card}>
            <div className={styles.img_price_container}>
                <img src={meal.img} alt={meal.name} />
                <p className={styles.price}>{meal.price} JD</p>
            </div>
            <div>
                <h3>{meal.name}</h3>
                <p>{meal.description}</p>
                <AddToCartBtn meal={meal} user_id="123" total={meal.price} />
            </div>
            {
                session && session.user.isAdmin && (
                    <>
                        <span onClick={() => deleteMeal(deleteReqUrl, meal._id)}>Delete</span>
                        <Link href={`/${mealType}/edit/${meal._id}`} passHref>
                            <span type="button">Edit</span>
                        </Link>
                    </>
                )
            }
        </div>
    )
}

export default MealCard