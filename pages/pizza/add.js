import useInput from '../../hooks/useInput';

function AddNewPizza() {

    const [pizzaName, setPizzaName] = useInput("");
    const [pizzaType, setPizzaType] = useInput("");
    const [pizzaImg, setPizzaImg] = useInput("");
    const [pizzaDescription, setPizzaDescription] = useInput("");
    const [size1, setSize1] = useInput("");
    const [size2, setSize2] = useInput("");
    const [size3, setSize3] = useInput("");
    const [type1, setType1] = useInput("");
    const [type2, setType2] = useInput("");
    const [type3, setType3] = useInput("");
    const [type4, setType4] = useInput("");
    const [type5, setType5] = useInput("");
    const [type1Size1Price, setType1Size1Price] = useInput("");
    const [type1Size2Price, setType1Size2Price] = useInput("");
    const [type1Size3Price, setType1Size3Price] = useInput("");
    const [type2Size1Price, setType2Size1Price] = useInput("");
    const [type2Size2Price, setType2Size2Price] = useInput("");
    const [type2Size3Price, setType2Size3Price] = useInput("");
    const [type3Size1Price, setType3Size1Price] = useInput("");
    const [type3Size2Price, setType3Size2Price] = useInput("");
    const [type3Size3Price, setType3Size3Price] = useInput("");
    const [type4Size1Price, setType4Size1Price] = useInput("");
    const [type4Size2Price, setType4Size2Price] = useInput("");
    const [type4Size3Price, setType4Size3Price] = useInput("");
    const [type5Size1Price, setType5Size1Price] = useInput("");
    const [type5Size2Price, setType5Size2Price] = useInput("");
    const [type5Size3Price, setType5Size3Price] = useInput("");


    const addNewPizza = async (evt) => {
        evt.preventDefault();
        const newPizza = {
            type: pizzaType,
            img: pizzaImg,
            name: pizzaName,
            description: pizzaDescription,
            pizza_size: [size1, size2, size3],
            dough_type: [type1, type2, type3, type4, type5],
            type_1_medium_size: type1Size1Price,
            type_1_large_size: type1Size2Price,
            type_1_small_size: type1Size3Price,
            type_2_medium_size: type2Size1Price,
            type_2_large_size: type2Size2Price,
            type_2_small_size: type2Size3Price,
            type_3_medium_size: type3Size1Price,
            type_3_large_size: type3Size2Price,
            type_3_small_size: type3Size3Price,
            type_4_medium_size: type4Size1Price,
            type_4_large_size: type4Size2Price,
            type_4_small_size: type4Size3Price,
            type_5_medium_size: type5Size1Price,
            type_5_large_size: type5Size2Price,
            type_5_small_size: type5Size3Price,
        }

        const response = await fetch("http://localhost:5000/pizza", {
            method: "POST",
            body: JSON.stringify(newPizza),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
    }

    return (
        <form onSubmit={addNewPizza}>
            <input type="text" value={pizzaName} onChange={setPizzaName} />
            <input type="text" value={pizzaType} onChange={setPizzaType} />
            <input type="text" value={pizzaImg} onChange={setPizzaImg} />
            <input type="text" value={pizzaDescription} onChange={setPizzaDescription} />
            <input type="text" value={size1} onChange={setSize1} />
            <input type="text" value={size2} onChange={setSize2} />
            <input type="text" value={size3} onChange={setSize3} />
            <input type="text" value={type1} onChange={setType1} />
            <input type="text" value={type2} onChange={setType2} />
            <input type="text" value={type3} onChange={setType3} />
            <input type="text" value={type4} onChange={setType4} />
            <input type="text" value={type5} onChange={setType5} />
            <input type="text" value={type1Size1Price} onChange={setType1Size1Price} />
            <input type="text" value={type1Size2Price} onChange={setType1Size2Price} />
            <input type="text" value={type1Size3Price} onChange={setType1Size3Price} />
            <input type="text" value={type2Size1Price} onChange={setType2Size1Price} />
            <input type="text" value={type2Size2Price} onChange={setType2Size2Price} />
            <input type="text" value={type2Size3Price} onChange={setType2Size3Price} />
            <input type="text" value={type3Size1Price} onChange={setType3Size1Price} />
            <input type="text" value={type3Size2Price} onChange={setType3Size2Price} />
            <input type="text" value={type3Size3Price} onChange={setType3Size3Price} />
            <input type="text" value={type4Size1Price} onChange={setType4Size1Price} />
            <input type="text" value={type4Size2Price} onChange={setType4Size2Price} />
            <input type="text" value={type4Size3Price} onChange={setType4Size3Price} />
            <input type="text" value={type5Size1Price} onChange={setType5Size1Price} />
            <input type="text" value={type5Size2Price} onChange={setType5Size2Price} />
            <input type="text" value={type5Size3Price} onChange={setType5Size3Price} />
            <button type="submit">Add New Pizza</button>
        </form>
    )
}

export default AddNewPizza