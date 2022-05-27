import { useState } from 'react';
import Input from '../../components/input';
import useAddItem from '../../hooks/useAddItem';
import Router from 'next/router';
import { useSession } from 'next-auth/react';

function AddNewDeal() {

    const { data: session, status } = useSession()
    const [deal, setDeal] = useState({});
    const [message, addDeal] = useAddItem();

    if (status === "loading") {
        return <h1>Loading...</h1>
    }

    if (!session || !session.user.isAdmin) {
        return Router.push("/")
    }

    const onChange = (evt) => {
        setDeal({ ...deal, [evt.target.name]: evt.target.value })
    }

    const addNewDeal = async (evt) => {
        evt.preventDefault();

        addDeal("/api/deals", deal)
    }

    return (
        <form onSubmit={addNewDeal}>
            <Input name="name" value={deal?.name} onChange={onChange} label="deal name" />
            <Input name="img" value={deal?.img} onChange={onChange} label="deal img" />
            <Input name="description" value={deal?.description} onChange={onChange} label="deal description" />
            <Input name="price" value={deal?.price} onChange={onChange} label="deal price" />
            <button style={{ margin: "10px 0" }} className="primary_btn" type="submit">Add New Deal</button>
        </form>
    )
}

export default AddNewDeal