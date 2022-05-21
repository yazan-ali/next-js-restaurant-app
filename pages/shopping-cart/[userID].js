import useSWR from "swr";
import { useRouter } from 'next/router';

const fetcher = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

function ShoppingCart() {

    const { userID = "5f4ab736caff0d250c283b07" } = useRouter();
    const { data, error } = useSWR(`http://localhost:5000/cart/${userID}`, fetcher);

    if (error) {
        <h1>An error has occurred</h1>
    }

    if (!data) {
        return <h2>Loading...</h2>
    }

    const deleteCartItem = async (id) => {
        const response = await fetch(`http://localhost:5000/cart/${id}`, {
            method: "DELETE",
        })
        const data = await response.json();
    }

    return (
        <div>
            {
                data.map(item => (
                    <>
                        <h1>{item.cartItem.name}</h1>
                        <span onClick={() => deleteCartItem(item._id)}>Delete {item._id}</span>
                    </>
                ))
            }
        </div>
    )
}

export default ShoppingCart;