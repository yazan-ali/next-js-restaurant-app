import useInput from '../../../hooks/useInput';
import useItemUpdate from '../../../hooks/useUpdateItem';

function EditPasta({ pasta, pastaID }) {

    const [status, updatePasta] = useItemUpdate();
    const [pastaName, setPastaName] = useInput(pasta.name);
    const [pastaImg, setPastaImg] = useInput(pasta.img);
    const [pastaDescription, setPastaDescription] = useInput(pasta.description);
    const [pastaPrice, setPastaPrice] = useInput(pasta.price);

    const submitUpdatedPasta = async (evt) => {
        evt.preventDefault();

        const updatedPasta = {
            img: pastaImg,
            name: pastaName,
            description: pastaDescription,
            price: pastaPrice
        }

        updatePasta(`http://localhost:5000/pasta/${pastaID}`, updatedPasta);
    }

    return (
        <form onSubmit={submitUpdatedPasta}>
            <h1>{status}</h1>
            <input type="text" value={pastaName} onChange={setPastaName} />
            <input type="text" value={pastaPrice} onChange={setPastaPrice} />
            <input type="text" value={pastaImg} onChange={setPastaImg} />
            <input type="text" value={pastaDescription} onChange={setPastaDescription} />
            <button type="submit">Update Pasta</button>
        </form>
    )
}

export default EditPasta;

export async function getServerSideProps(context) {

    const { query } = context;
    const { pastaID } = query;

    const response = await fetch(`http://localhost:5000/pasta/${pastaID}`);
    const data = await response.json();

    return {
        props: {
            pasta: data,
            pastaID
        },
    }
}