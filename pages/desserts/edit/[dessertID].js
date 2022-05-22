import { useState } from 'react';
import useItemUpdate from '../../../hooks/useUpdateItem';
import Input from '../../../components/input';

function EditDessert({ Dessert, dessertID }) {

    const [status, updateDessert] = useItemUpdate();
    const [dessert, setDessert] = useState(Dessert)


    const onChange = (evt) => {
        setDessert({ ...dessert, [evt.target.name]: evt.target.value })
    }

    const submitUpdatedDessert = async (evt) => {
        evt.preventDefault();

        updateDessert(`http://localhost:5000/desserts/${dessertID}`, dessert);
    }

    return (
        <form onSubmit={submitUpdatedDessert}>
            <Input name="name" value={dessert?.name} onChange={onChange} placeholder="dessert name" />
            <Input name="img" value={dessert?.img} onChange={onChange} placeholder="dessert img" />
            <Input name="description" value={dessert?.description} onChange={onChange} placeholder="dessert description" />
            <Input name="price" value={dessert?.price} onChange={onChange} placeholder="dessert price" />
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
            Dessert: data,
            dessertID
        },
    }
}