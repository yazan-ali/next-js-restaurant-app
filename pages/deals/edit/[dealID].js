import useInput from '../../../hooks/useInput';

function EditDeal({ deal, dealID }) {

    const [dealName, setDealName] = useInput(deal.name);
    const [dealImg, setDealImg] = useInput(deal.img);
    const [dealDescription, setDealDescription] = useInput(deal.description);
    const [dealPrice, setDealPrice] = useInput(deal.price);

    const submitUpdatedDeal = async (evt) => {
        evt.preventDefault();

        const updatedDeal = {
            img: dealImg,
            name: dealName,
            description: dealDescription,
            price: dealPrice
        }

        const response = await fetch(`http://localhost:5000/deals/${dealID}`, {
            method: "PUT",
            body: JSON.stringify(updatedDeal),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
    }

    return (
        <form onSubmit={submitUpdatedDeal}>
            <input type="text" value={dealName} onChange={setDealName} />
            <input type="text" value={dealPrice} onChange={setDealPrice} />
            <input type="text" value={dealImg} onChange={setDealImg} />
            <input type="text" value={dealDescription} onChange={setDealDescription} />
            <button type="submit">Update deal</button>
        </form>
    )
}

export default EditDeal;

export async function getServerSideProps(context) {

    const { query } = context;
    const { dealID } = query;

    const response = await fetch(`http://localhost:5000/deals/${dealID}`);
    const data = await response.json();

    return {
        props: {
            deal: data,
            dealID
        },
    }
}