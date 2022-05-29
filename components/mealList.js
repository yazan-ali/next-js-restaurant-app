import Head from 'next/head';
import useItemDelete from '../hooks/useDeleteItem';
import styles from '../styles/meal-list.module.scss';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

function MealList({ mealType, meals, MealCard, img, deleteReqUrl, pageTitle, pageDescription }) {

    const { data: session, status } = useSession();
    const [mealList, message, deleteMeal] = useItemDelete(meals);

    return (
        <main className={styles.root}>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Head>
            <div className={styles.meal_list_img}>
                <img src={img} alt="pizza-house" />
            </div>
            {
                session?.user.isAdmin && <div style={{ margin: "25px 0" }}>
                    <Link href={`/${mealType}/add`} passHref>
                        <a className="primary_btn">Add {mealType}</a>
                    </Link>
                </div>
            }
            <section className={styles.meal_list}>
                {mealList.map(meal => (
                    <MealCard
                        mealType={mealType}
                        meal={meal}
                        key={meal._id}
                        deleteMeal={deleteMeal}
                        deleteReqUrl={deleteReqUrl}
                    />
                ))}
            </section>
        </main>
    )
}

export default MealList