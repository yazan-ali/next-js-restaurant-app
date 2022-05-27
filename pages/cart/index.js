import useSWR from "swr";
import styles from '../../styles/cart.module.scss';
import { useSession } from 'next-auth/react';
import CartItem from '../../components/cartItem';
import Router from 'next/router';

const fetcher = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

function Cart() {

    const { data: session, status } = useSession()
    const { data, error } = useSWR(`/api/cart`, fetcher)

    if (!session && status !== "loading") {
        return Router.push("/")
    }

    if (!data) return <h1>Loading...</h1>

    if (data.length === 0) return <h1>Your shopping cart is empty</h1>

    return (
        <main className={styles.shopping_cart}>
            {data.map(cart_item => (
                <CartItem key={cart_item._id} cartItem={cart_item} />
            ))}
        </main>
    )
}

export default Cart;