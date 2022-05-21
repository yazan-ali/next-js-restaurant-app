import useInput from '../../../hooks/useInput';

function EditDessert({ dessert, dessertID }) {

    const [dessertName, setDessertName] = useInput(dessert.name);
    const [dessertImg, setDessertImg] = useInput(dessert.img);
    const [dessertDescription, setDessertDescription] = useInput(dessert.description);
    const [dessertPrice, setDessertPrice] = useInput(dessert.price);

    const submitUpdatedDessert = async (evt) => {
        evt.preventDefault();

        const updatedDessert = {
            img: dessertImg,
            name: dessertName,
            description: dessertDescription,
            price: dessertPrice
        }

        const response = await fetch(`http://localhost:5000/desserts/${dessertID}`, {
            method: "PUT",
            body: JSON.stringify(updatedDessert),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
    }

    return (
        <form onSubmit={submitUpdatedDessert}>
            <input type="text" value={dessertName} onChange={setDessertName} />
            <input type="text" value={dessertPrice} onChange={setDessertPrice} />
            <input type="text" value={dessertImg} onChange={setDessertImg} />
            <input type="text" value={dessertDescription} onChange={setDessertDescription} />
            <button type="submit">Update dessert</button>
        </form>
    )
}

export default EditDessert;

export async function getServerSideProps(context) {

    const { query } = context;
    const { dessertID } = query;

    const response = await fetch(`http://localhost:5000/desserts/${dessertID}`);
    const data = await response.json();

    return {
        props: {
            dessert: data,
            dessertID
        },
    }
}