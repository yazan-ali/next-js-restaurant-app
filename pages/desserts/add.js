import useInput from '../../hooks/useInput';
function AddNewDessert() {

    const [dessertName, setDessertName] = useInput("");
    const [dessertPrice, setDessertPrice] = useInput("");
    const [dessertImg, setDessertImg] = useInput("");
    const [dessertDescription, setDessertDescription] = useInput("");

    const addNewDessert = async (evt) => {
        evt.preventDefault();
        const newDessert = {
            price: dessertPrice,
            img: dessertImg,
            name: dessertName,
            description: dessertDescription,
        }

        const response = await fetch("http://localhost:5000/desserts", {
            method: "POST",
            body: JSON.stringify(newDessert),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
        console.log(data)
    }

    return (
        <form onSubmit={addNewDessert}>
            <input type="text" value={dessertName} onChange={setDessertName} />
            <input type="text" value={dessertPrice} onChange={setDessertPrice} />
            <input type="text" value={dessertImg} onChange={setDessertImg} />
            <input type="text" value={dessertDescription} onChange={setDessertDescription} />
            <button type="submit">Add New Dessert</button>
        </form>
    )
}

export default AddNewDessert