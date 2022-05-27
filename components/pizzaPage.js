import { useEffect, useReducer, useCallback } from 'react';
import styles from '../styles/pizza-page.module.scss';
import checkbox_style from '../styles/checkboxList.module.scss';
import Head from "next/head";
import usePrice from '../hooks/usePrice';
import { pizza_size_options, pizza_dough_type_options } from '../pizza_options';
import DropDownMenu from '../components/dropDownMenu';
import CheckboxList from '../components/checkboxList';
import AddToCartBtn from './addToCartBtn';


const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_SIZE":
            return { ...state, size: action.payload }
        case "CHANGE_TYPE":
            return { ...state, type: action.payload }
        case "SET_SELECTED_STARTERS":
            return {
                ...state,
                selectedStarters: action.payload.selectedStarters,
                startersPrice: action.payload.startersPrice
            }
        default:
            return state;
    }
};

function PizzaPage({ pizza, starters }) {

    const [state, dispatch] = useReducer(reducer, {
        selectedStarters: [],
        startersPrice: 0,
        size: pizza_size_options[0],
        type: pizza_dough_type_options[0]
    })

    const [price, getPrice] = usePrice(pizza.price)

    useEffect(() => {
        getPrice(state.size, state.type, state.startersPrice)
    }, [state.size, state.type, state.startersPrice])


    const onSizeChange = useCallback((size) => {
        dispatch({ type: "CHANGE_SIZE", payload: size });
    }, [])

    const onTypeChange = useCallback((type) => {
        dispatch({ type: "CHANGE_TYPE", payload: type });
    }, [])

    return (
        <main className={styles.pizza_page_root} >
            <Head>
                <title>{`Pizza House | ${pizza.name}`}</title>
                <meta name="description" content={pizza.description} />
            </Head>
            <img className={styles.meal_list_img} src="https://martjackamstorage.azureedge.net/am-resources/c79bc8ac-4c69-460f-829b-4d40568d0cca/Images/userimages/banners-may/Pizza_Banner-en.jpg" alt="pizza house" />
            <div className={styles.pizza_card_container}>
                <section className={styles.pizza_card}>
                    <div>
                        <img src={pizza.img} alt={`${pizza.name} PIZZA`} />
                    </div>
                    <div>
                        <h1 className={styles.pizza_name}>{pizza.name}</h1>
                        <p>{pizza.description}</p>
                        {state.selectedStarters.length > 0 && <span>Starters: </span>}
                        <ul>
                            {state.selectedStarters.map((starter, i) => (
                                <li key={i} style={{ fontSize: 13 }}>{starter}</li>
                            ))}
                        </ul>
                        <p className={styles.price}>Total: {price} JD</p>
                        <div className={styles.menus_container}>
                            <DropDownMenu
                                list={pizza_size_options}
                                placeholder={"Select Size"}
                                onChange={onSizeChange}
                            />
                            <DropDownMenu
                                list={pizza_dough_type_options}
                                placeholder={"Select Dough Type"}
                                onChange={onTypeChange}
                            />
                        </div>
                    </div>
                </section>
                <section className={checkbox_style.starters}>
                    <CheckboxList
                        starters={starters}
                        dispatch={dispatch}
                    />
                    <AddToCartBtn
                        meal={pizza}
                        user_id="123"
                        total={price}
                        starters={state.selectedStarters}
                        size={state.size}
                        dough_type={state.type}
                    />
                </section>
            </div>
        </main>
    )
}

export default PizzaPage;