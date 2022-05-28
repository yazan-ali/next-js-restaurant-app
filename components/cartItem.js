import { useState } from 'react';
import styles from '../styles/cart.module.scss';

function CartItem({ cartItem }) {

    const [qty, setQty] = useState(1);
    const [item, setItem] = useState(cartItem);

    const handleQtyChange = (alpha) => {
        if (qty === 1 && alpha < 0) {
            handleDeleteItem()
        } else {
            setQty(prev => prev + alpha);
        }
    }

    const handleDeleteItem = async () => {
        await fetch(`/api/cart/${item._id}`, { method: "DELETE", });
        setItem(null)
    }

    if (!item) {
        return
    }

    return (
        <div className={styles.cart_item}>
            <section>
                <p className={styles.qty}>x{qty}</p>
                <img src={item.meal.img} alt={item.meal.name} />
                <p className={styles.price}>{item.total * qty} JD</p>
            </section>
            <section>
                <h3 className={styles.pizza_name} style={{ cursor: "pointer" }}>{item.meal.name}</h3>
                <p>{item.meal.description}</p>
                <div>
                    <span>{item.meal.size}</span>
                    <span style={{ marginLeft: 10 }}>{item.meal.dough_type}</span>
                </div>
                <ul>
                    {item.starters.map((starter, i) => (
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