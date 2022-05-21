import useInput from '../../hooks/useInput';
function AddNewDeal() {

    const [dealName, setDealName] = useInput("");
    const [dealPrice, setDealPrice] = useInput("");
    const [dealImg, setDealImg] = useInput("");
    const [dealDescription, setDealDescription] = useInput("");

    const addNewDeal = async (evt) => {
        evt.preventDefault();
        const newDeal = {
            price: dealPrice,
            img: dealImg,
            name: dealName,
            description: dealDescription,
        }

        const response = await fetch("http://localhost:5000/deals", {
            method: "POST",
            body: JSON.stringify(newDeal),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
    }

    return (
        <form onSubmit={addNewDeal}>
            <input type="text" value={dealName} onChange={setDealName} />
            <input type="text" value={dealPrice} onChange={setDealPrice} />
            <input type="text" value={dealImg} onChange={setDealImg} />
            <input type="text" value={dealDescription} onChange={setDealDescription} />
            <button type="submit">Add New Deal</button>
        </form>
    )
}

export default AddNewDeal