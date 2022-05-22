import { useState } from 'react';
import useAddItem from '../../hooks/useAddItem';
import Input from '../../components/input';

function AddNewPizza() {

    const [pizza, setPizza] = useState({});
    const [status, addPasta] = useAddItem();

    const onChange = (evt) => {
        setPizza({ ...pizza, [evt.target.name]: evt.target.value })
    }

    const addNewPizza = async (evt) => {
        evt.preventDefault();

        addPasta("http://localhost:5000/pizza", pizza);
    }

    return (
        <form onSubmit={addNewPizza}>
            <Input name="name" value={pizza?.name} onChange={onChange} placeholder="pizza name" />
            <Input name="type" value={pizza?.type} onChange={onChange} placeholder="pizza type" />
            <Input name="img" value={pizza?.img} onChange={onChange} placeholder="pizza img" />
            <Input name="description" value={pizza?.description} onChange={onChange} placeholder="pizza description" />
            <Input name="type_1_medium_size" value={pizza?.type_1_medium_size} onChange={onChange} placeholder="dough type 1 medium size price" />
            <Input name="type_1_large_size" value={pizza?.type_1_large_size} onChange={onChange} placeholder="dough type 1 large size price" />
            <Input name="type_1_small_size" value={pizza?.type_1_small_size} onChange={onChange} placeholder="dough type 1 small size price" />
            <Input name="type_2_medium_size" value={pizza?.type_2_medium_size} onChange={onChange} placeholder="dough type 2 medium size price" />
            <Input name="type_2_large_size" value={pizza?.type_2_large_size} onChange={onChange} placeholder="dough type 2 large size price" />
            <Input name="type_2_small_size" value={pizza?.type_2_small_size} onChange={onChange} placeholder="dough type 2 small size price" />
            <Input name="type_3_medium_size" value={pizza?.type_3_medium_size} onChange={onChange} placeholder="dough type 3 medium size price" />
            <Input name="type_3_large_size" value={pizza?.type_3_large_size} onChange={onChange} placeholder="dough type 3 large size price" />
            <Input name="type_3_small_size" value={pizza?.type_3_small_size} onChange={onChange} placeholder="dough type 3 small size price" />
            <Input name="type_4_medium_size" value={pizza?.type_4_medium_size} onChange={onChange} placeholder="dough type 4 medium size price" />
            <Input name="type_4_large_size" value={pizza?.type_4_large_size} onChange={onChange} placeholder="dough type 4 large size price" />
            <Input name="type_4_small_size" value={pizza?.type_4_small_size} onChange={onChange} placeholder="dough type 4 small size price" />
            <Input name="type_5_medium_size" value={pizza?.type_5_medium_size} onChange={onChange} placeholder="dough type 5 medium size price" />
            <Input name="type_5_large_size" value={pizza?.type_5_large_size} onChange={onChange} placeholder="dough type 5 large size price" />
            <Input name="type_5_small_size" value={pizza?.type_5_small_size} onChange={onChange} placeholder="dough type 5 small size price" />
            <button type="submit">Add New Pizza</button>
        </form>
    )
}

export default AddNewPizza