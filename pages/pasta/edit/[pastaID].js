import { useState } from 'react';
import useItemUpdate from '../../../hooks/useUpdateItem';
import Input from '../../../components/input';
import Router from 'next/router';
import { useSession } from 'next-auth/react';

function EditPasta({ Pasta, pastaID }) {

    const { data: session, status } = useSession()
    const [message, updatePasta] = useItemUpdate();
    const [pasta, setPasta] = useState(Pasta)

    if (status === "loading") {
        return <h1>Loading...</h1>
    }

    if (!session || !session.user.isAdmin) {
        return Router.push("/")
    }

    const onChange = (evt) => {
        setPasta({ ...pasta, [evt.target.name]: evt.target.value })
    }

    const submitUpdatedPasta = async (evt) => {
        evt.preventDefault();

        updatePasta(`/api/pasta/${pastaID}`, pasta);
    }

    return (
        <form onSubmit={submitUpdatedPasta}>
            <Input name="name" label="pasta name" value={pasta?.name} onChange={onChange} />
            <Input name="img" label="pasta image" value={pasta?.img} onChange={onChange} />
            <Input name="description" label="pasta description" value={pasta?.description} onChange={onChange} />
            <Input name="price" label="pasta price" value={pasta?.price} onChange={onChange} />
            <button style={{ margin: "10px 0" }} className="primary_btn" type="submit">Update Past</button>
        </form>
    )
}

export default EditPasta;

export async function getServerSideProps(context) {

    const { query } = context;
    const { pastaID } = query;

    const response = await fetch(`http://localhost:3000/api/pasta/${pastaID}`);
    const data = await response.json();

    return {
        props: {
            Pasta: data,
            pastaID
        },
    }
}