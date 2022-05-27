import { useState } from 'react';

function usePrice(prices) {

    const [price, setPrice] = useState(prices.type_1.medium);

    const getPrice = (size, type, startersPrice) => {
        const total = 0;
        if (size === "Medium" && type === "Pan") {
            total = prices.type_1.medium;
        } else if (size === "Medium" && type === "San Fransisco") {
            total = prices.type_2.medium;
        } else if (size === "Medium" && type === "Thin N Crispy") {
            total = prices.type_3.medium;
        } else if (size === "Medium" && type === "Stuffed Crust") {
            total = prices.type_4.medium;
        } else if (size === "Medium" && type === "Cheesy Bites") {
            total = prices.type_5.medium;
        } else if (size === "Large" && type === "Pan") {
            total = prices.type_1.large;
        } else if (size === "Large" && type === "San Fransisco") {
            total = prices.type_2.large;
        } else if (size === "Large" && type === "Thin N Crispy") {
            total = prices.type_3.large;
        } else if (size === "Large" && type === "Stuffed Crust") {
            total = prices.type_4.large;
        } else if (size === "Large" && type === "Cheesy Bites") {
            total = prices.type_5.large;
        } else if (size === "Small" && type === "Pan") {
            total = prices.type_1.small;
        } else if (size === "Small" && type === "San Fransisco") {
            total = prices.type_2.small;
        } else if (size === "Small" && type === "Thin N Crispy") {
            total = prices.type_3.small;
        } else if (size === "Small" && type === "Stuffed Crust") {
            total = prices.type_4.small;
        } else if (size === "Small" && type === "Cheesy Bites") {
            total = prices.type_5.small;
        }
        setPrice(parseFloat(total) + startersPrice);
    }

    return [price, getPrice];
}


export default usePrice;