import { useState } from 'react';
import useAddItem from '../../hooks/useAddItem';
import Input from '../../components/input';

function AddNewPasta() {

    const [pasta, setPasta] = useState({});
    const [status, addPasta] = useAddItem();

    const onChange = (evt) => {
        setPasta({ ...pasta, [evt.target.name]: evt.target.value })
    }

    const addNewPasta = async (evt) => {
        evt.preventDefault();

        addPasta("http://localhost:5000/pasta", pasta);
    }

    return (
        <form onSubmit={addNewPasta}>
            <Input name="name" value={pasta?.name} onChange={onChange} placeholder="pasta name" />
            <Input name="img" value={pasta?.img} onChange={onChange} placeholder="pasta img" />
            <Input name="description" value={pasta?.description} onChange={onChange} placeholder="pasta description" />
            <Input name="price" value={pasta?.price} onChange={onChange} placeholder="pasta price" />
            <button type="submit">Add New Past</button>
        </form>
    )
}

export default AddNewPasta