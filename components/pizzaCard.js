import styles from '../styles/meal-list.module.scss'
import Link from 'next/link';
import { useSession } from 'next-auth/react';

function PizzaCard({ meal, deleteMeal, deleteReqUrl }) {

    const { data: session, status } = useSession();

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
                    <button type="button" className="primary_btn">Add to cart</button>
                </Link>
            </div>
            {
                session && session.user.isAdmin && (
                    <>
                        <span onClick={() => deleteMeal(deleteReqUrl, meal._id)}>Delete</span>
                        <Link href={`/pizza/edit/${meal._id}`} passHref>
                            <span type="button">Edit</span>
                        </Link>
                    </>
                )
            }
        </div>
    )
}

export default PizzaCard