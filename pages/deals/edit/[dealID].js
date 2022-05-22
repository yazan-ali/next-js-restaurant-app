import { useState } from 'react';
import useItemUpdate from '../../../hooks/useUpdateItem';
import Input from '../../../components/input';

function EditDeal({ Deal, dealID }) {

    const [status, updateDeal] = useItemUpdate();
    const [deal, setDeal] = useState(Deal);

    const onChange = (evt) => {
        setDeal({ ...deal, [evt.target.name]: evt.target.value })
    }

    const submitUpdatedDeal = async (evt) => {
        evt.preventDefault();

        updateDeal(`http://localhost:5000/deals/${dealID}`, deal);
    }

    return (
        <form onSubmit={submitUpdatedDeal}>
            <Input name="name" value={deal?.name} onChange={onChange} placeholder="deal name" />
            <Input name="img" value={deal?.img} onChange={onChange} placeholder="deal img" />
            <Input name="description" value={deal?.description} onChange={onChange} placeholder="deal description" />
            <Input name="price" value={deal?.price} onChange={onChange} placeholder="deal price" />
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
            Deal: data,
            dealID
        },
    }
}