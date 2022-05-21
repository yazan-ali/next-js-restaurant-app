import useInput from '../../hooks/useInput';
function AddNewPasta() {

    const [pastaName, setPastaName] = useInput("");
    const [pastaPrice, setPastaPrice] = useInput("");
    const [pastaImg, setPastaImg] = useInput("");
    const [pastaDescription, setPastaDescription] = useInput("");

    const addNewPasta = async (evt) => {
        evt.preventDefault();
        const newPasta = {
            price: pastaPrice,
            img: pastaImg,
            name: pastaName,
            description: pastaDescription,
        }

        const response = await fetch("http://localhost:5000/pasta", {
            method: "POST",
            body: JSON.stringify(newPasta),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
    }

    return (
        <form onSubmit={addNewPasta}>
            <input type="text" value={pastaName} onChange={setPastaName} />
            <input type="text" value={pastaPrice} onChange={setPastaPrice} />
            <input type="text" value={pastaImg} onChange={setPastaImg} />
            <input type="text" value={pastaDescription} onChange={setPastaDescription} />
            <button type="submit">Add New Past</button>
        </form>
    )
}

export default AddNewPasta