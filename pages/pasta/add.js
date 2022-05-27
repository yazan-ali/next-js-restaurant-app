import { useState } from 'react';
import useAddItem from '../../hooks/useAddItem';
import Input from '../../components/input';
import Router from 'next/router';
import { useSession } from 'next-auth/react';

function AddNewPasta() {

    const { data: session, status } = useSession()
    const [pasta, setPasta] = useState({});
    const [message, addPasta] = useAddItem();

    if (status === "loading") {
        return <h1>Loading...</h1>
    }

    if (!session || !session.user.isAdmin) {
        return Router.push("/")
    }

    const onChange = (evt) => {
        setPasta({ ...pasta, [evt.target.name]: evt.target.value })
    }

    const addNewPasta = async (evt) => {
        evt.preventDefault();

        addPasta("/api/pasta", pasta);
    }

    return (
        <form onSubmit={addNewPasta}>
            <Input name="name" label="pasta name" value={pasta?.name} onChange={onChange} />
            <Input name="img" label="pasta image" value={pasta?.img} onChange={onChange} />
            <Input name="description" label="pasta description" value={pasta?.description} onChange={onChange} />
            <Input name="price" label="pasta price" value={pasta?.price} onChange={onChange} />
            <button style={{ margin: "10px 0" }} className="primary_btn" type="submit">Add New Past</button>
        </form>
    )
}

export default AddNewPasta