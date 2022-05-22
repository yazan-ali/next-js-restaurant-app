import { useState } from 'react';
import Input from '../../components/input';
import useAddItem from '../../hooks/useAddItem';

function AddNewDeal() {

    const [deal, setDeal] = useState({});
    const [status, addDeal] = useAddItem();


    const onChange = (evt) => {
        setDeal({ ...deal, [evt.target.name]: evt.target.value })
    }

    const addNewDeal = async (evt) => {
        evt.preventDefault();

        addDeal("http://localhost:5000/deals", deal)
    }

    return (
        <form onSubmit={addNewDeal}>
            <Input name="name" value={deal?.name} onChange={onChange} placeholder="deal name" />
            <Input name="img" value={deal?.img} onChange={onChange} placeholder="deal img" />
            <Input name="description" value={deal?.description} onChange={onChange} placeholder="deal description" />
            <Input name="price" value={deal?.price} onChange={onChange} placeholder="deal price" />
            <button type="submit">Add New Deal</button>
        </form>
    )
}

export default AddNewDeal