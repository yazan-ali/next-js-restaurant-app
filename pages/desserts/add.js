import { useState } from 'react';
import useAddItem from '../../hooks/useAddItem';
import Input from '../../components/input';

function AddNewDessert() {

    const [dessert, setDessert] = useState({});
    const [status, addDessert] = useAddItem();

    const onChange = (evt) => {
        setDessert({ ...dessert, [evt.target.name]: evt.target.value })
    }


    const addNewDessert = async (evt) => {
        evt.preventDefault();

        addDessert("http://localhost:5000/desserts", dessert);
    }

    return (
        <form onSubmit={addNewDessert}>
            <Input name="name" value={dessert?.name} onChange={onChange} placeholder="dessert name" />
            <Input name="img" value={dessert?.img} onChange={onChange} placeholder="dessert img" />
            <Input name="description" value={dessert?.description} onChange={onChange} placeholder="dessert description" />
            <Input name="price" value={dessert?.price} onChange={onChange} placeholder="dessert price" />
            <button type="submit">Add New Dessert</button>
        </form>
    )
}

export default AddNewDessert