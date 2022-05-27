import { useState } from 'react';
import useItemUpdate from '../../../hooks/useUpdateItem';
import Input from '../../../components/input';
import Router from 'next/router';
import { useSession } from 'next-auth/react';

function EditDessert({ Dessert, dessertID }) {

    const { data: session, status } = useSession();
    const [message, updateDessert] = useItemUpdate();
    const [dessert, setDessert] = useState(Dessert);

    if (status === "loading") {
        return <h1>Loading...</h1>
    }

    if (!session || !session.user.isAdmin) {
        return Router.push("/")
    }

    const onChange = (evt) => {
        setDessert({ ...dessert, [evt.target.name]: evt.target.value })
    }

    const submitUpdatedDessert = async (evt) => {
        evt.preventDefault();

        updateDessert(`/api/desserts/${dessertID}`, dessert);
    }

    return (
        <form onSubmit={submitUpdatedDessert}>
            <Input name="name" value={dessert?.name} onChange={onChange} label="dessert name" />
            <Input name="img" value={dessert?.img} onChange={onChange} label="dessert img" />
            <Input name="description" value={dessert?.description} onChange={onChange} label="dessert description" />
            <Input name="price" value={dessert?.price} onChange={onChange} label="dessert price" />
            <button style={{ margin: "10px 0" }} className="primary_btn" type="submit">Update dessert</button>
        </form>
    )
}

export default EditDessert;

export async function getServerSideProps(context) {

    const { query } = context;
    const { dessertID } = query;

    const response = await fetch(`${process.env.VERCEL_URL}/desserts/${dessertID}`);
    const data = await response.json();

    return {
        props: {
            Dessert: data,
            dessertID
        },
    }
}