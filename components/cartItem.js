import { useState } from 'react';
import styles from '../styles/cart.module.scss';

function CartItem({ cartItem }) {

    const [qty, setQty] = useState(1);

    const handleQtyChange = (alpha) => {
        setQty(prev => prev + alpha);
    }

    return (
        <div className={styles.cart_item}>
            <section>
                <p className={styles.qty}>x{qty}</p>
                <img src={cartItem.meal.img} alt={cartItem.meal.name} />
                <p className={styles.price}>{cartItem.total * qty} JD</p>
            </section>
            <section>
                <h3 style={{ cursor: "pointer" }}>{cartItem.meal.name}</h3>
                <p>{cartItem.meal.description}</p>
                <div>
                    <span>{cartItem.meal.size}</span>
                    <span style={{ marginLeft: 10 }}>{cartItem.meal.dough_type}</span>
                </div>
                <ul>
                    {cartItem.starters.map((starter, i) => (
                        <li key={i} style={{ fontSize: 13 }}>{starter}</li>
                    ))}
                </ul>
            </section>
            <section className={styles.qty_btn}>
                <i
                    style={{ color: "#00B801" }}
                    className="fas fa-plus-circle"
                    onClick={() => handleQtyChange(1)}
                >
                </i>
                <i
                    style={{ color: "#E43930" }}
                    className="fas fa-minus-circle"
                    onClick={() => handleQtyChange(-1)}
                >
                </i>
            </section>
        </div>
    )
}

export default CartItem