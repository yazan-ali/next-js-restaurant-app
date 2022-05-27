import { useState } from 'react';
import useAddItem from '../../hooks/useAddItem';
import Input from '../../components/input';
import Router from 'next/router';
import { useSession } from 'next-auth/react';

function AddNewDessert() {

    const { data: session, status } = useSession()
    const [dessert, setDessert] = useState({});
    const [message, addDessert] = useAddItem();

    if (status === "loading") {
        return <h1>Loading...</h1>
    }

    if (!session || !session.user.isAdmin) {
        return Router.push("/")
    }

    const onChange = (evt) => {
        setDessert({ ...dessert, [evt.target.name]: evt.target.value })
    }


    const addNewDessert = async (evt) => {
        evt.preventDefault();

        addDessert("/api/desserts", dessert);
    }

    return (
        <form onSubmit={addNewDessert}>
            <Input name="name" value={dessert?.name} onChange={onChange} label="dessert name" />
            <Input name="img" value={dessert?.img} onChange={onChange} label="dessert img" />
            <Input name="description" value={dessert?.description} onChange={onChange} label="dessert description" />
            <Input name="price" value={dessert?.price} onChange={onChange} label="dessert price" />
            <button style={{ margin: "10px 0" }} className="primary_btn" type="submit">Add New Dessert</button>
        </form>
    )
}

export default AddNewDessert