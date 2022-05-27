import { useState } from 'react';
import useItemUpdate from '../../../hooks/useUpdateItem';
import Input from '../../../components/input';
import Router from 'next/router';
import { useSession } from 'next-auth/react';

function EditDeal({ Deal, dealID }) {

    const { data: session, status } = useSession()
    const [message, updateDeal] = useItemUpdate();
    const [deal, setDeal] = useState(Deal);

    if (status === "loading") {
        return <h1>Loading...</h1>
    }

    if (!session || !session.user.isAdmin) {
        return Router.push("/")
    }

    const onChange = (evt) => {
        setDeal({ ...deal, [evt.target.name]: evt.target.value })
    }

    const submitUpdatedDeal = async (evt) => {
        evt.preventDefault();

        updateDeal(`/api/deals/${dealID}`, deal);
    }

    return (
        <form onSubmit={submitUpdatedDeal}>
            <Input name="name" value={deal?.name} onChange={onChange} label="deal name" />
            <Input name="img" value={deal?.img} onChange={onChange} label="deal img" />
            <Input name="description" value={deal?.description} onChange={onChange} label="deal description" />
            <Input name="price" value={deal?.price} onChange={onChange} label="deal price" />
            <button style={{ margin: "10px 0" }} className="primary_btn" type="submit">Update deal</button>
        </form>
    )
}

export default EditDeal;

export async function getServerSideProps(context) {

    const { query } = context;
    const { dealID } = query;

    const response = await fetch(`${process.env.VERCEL_URL}/api/deals/${dealID}`);
    const data = await response.json();

    return {
        props: {
            Deal: data,
            dealID
        },
    }
}