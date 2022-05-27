import { useRef } from 'react';

function Checkbox({ starter, handleTotalPriceChange }) {

    const price = parseFloat(starter.price)
    const checkRef = useRef();

    const handleClick = () => {
        if (checkRef.current.checked) {
            handleTotalPriceChange(price, starter.name)
        } else {
            handleTotalPriceChange(-price, starter.name)
        }
    }

    return (
        <li>
            <input ref={checkRef} id={starter._id} type="checkbox" onChange={handleClick} />
            <label htmlFor={starter._id}>{starter.name} {starter.price} JD</label>
        </li>
    )
}

export default Checkbox;