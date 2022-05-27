import { useState, useEffect, memo } from 'react';
import Checkbox from './checkbox'

function CheckboxList({ starters, dispatch }) {

    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedStarters, setSelectedStarters] = useState([]);

    useEffect(() => {
        dispatch({
            type: "SET_SELECTED_STARTERS",
            payload: {
                selectedStarters,
                startersPrice: totalPrice
            }
        })
    }, [totalPrice, selectedStarters])

    const handleTotalPriceChange = (alpha, starter_name) => {
        if (alpha < 0) {
            const updatedList = selectedStarters.filter(starter => starter !== starter_name)
            setSelectedStarters(updatedList)
        } else {
            setSelectedStarters([...selectedStarters, starter_name])
        }
        setTotalPrice(prev => prev + alpha)
    }

    return (
        <ul>
            {
                starters.map((starter, i) => (
                    <Checkbox key={i} starter={starter} handleTotalPriceChange={handleTotalPriceChange} />
                ))}
        </ul >
    )
}

export default memo(CheckboxList);