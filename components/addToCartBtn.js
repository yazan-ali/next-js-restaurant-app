import { useState } from 'react';
import { useSession } from 'next-auth/react';

function AddToCartBtn({ meal, starters, total, size, dough_type }) {

    const { data: session, status } = useSession();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const addItemToCart = async () => {

        setIsLoading(true);

        const newCartItem = {
            meal: {
                name: meal.name,
                img: meal.img,
                description: meal.description,
                size: size ? size : null,
                dough_type: dough_type ? dough_type : null,
            },
            starters: starters ? starters : [],
            total,
        }

        const response = await fetch("/api/cart", {
            method: "POST",
            body: JSON.stringify({ cartItem: newCartItem }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
        if (!data.success) {
            setMessage(data.message)
        }
        setIsLoading(false)
    }

    return (
        <>
            <p style={{ color: "gray", padding: 10, fontSize: 15 }}>{message}</p>
            <button type="button" className="primary_btn" onClick={addItemToCart}>Add to cart</button>
        </>
    )
}

export default AddToCartBtn