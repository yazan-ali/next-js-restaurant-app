import Head from 'next/head';
import useItemDelete from '../hooks/useDeleteItem';
import styles from '../styles/meal-list.module.scss'

function MealList({ meals, MealCard, img, deleteReqUrl, pageTitle, pageDescription }) {

    const [mealList, status, deleteMeal] = useItemDelete(meals);

    return (
        <main className={styles.root}>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Head>
            <img className={styles.meal_list_img} src={img} alt="pizza-house" />
            <section className={styles.meal_list}>
                {mealList.map(meal => (
                    <MealCard
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