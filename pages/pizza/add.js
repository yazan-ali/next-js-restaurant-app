import { useState, useEffect } from 'react';
import useAddItem from '../../hooks/useAddItem';
import Input from '../../components/input';
import Router from 'next/router';
import { useSession } from 'next-auth/react';

function AddNewPizza() {

    const { data: session, status } = useSession()
    const [pizza, setPizza] = useState({});
    const [message, addPizza] = useAddItem();

    if (status === "loading") {
        return <h1>Loading...</h1>
    }

    if (!session || !session.user.isAdmin) {
        return Router.push("/")
    }

    const onChange = (evt) => {
        setPizza({ ...pizza, [evt.target.name]: evt.target.value })
    }

    const addNewPizza = async (evt) => {
        evt.preventDefault();

        addPizza("/api/pizza", pizza);
    }

    return (
        <form onSubmit={addNewPizza}>
            <Input name="name" label="pizza name" value={pizza?.name} onChange={onChange} />
            <Input name="type" label="pizza type" value={pizza?.type} onChange={onChange} />
            <Input name="img" label="pizza image" value={pizza?.img} onChange={onChange} />
            <Input name="description" label="pizza description" value={pizza?.description} onChange={onChange} />
            <Input name="type_1_medium_size" label="dough type 1 medium size price" value={pizza?.type_1_medium_size} onChange={onChange} />
            <Input name="type_1_large_size" label="dough type 1 large size  price" value={pizza?.type_1_large_size} onChange={onChange} />
            <Input name="type_1_small_size" label="dough type 1 small size  price" value={pizza?.type_1_small_size} onChange={onChange} />
            <Input name="type_2_medium_size" label="dough type 2 medium size price" value={pizza?.type_2_medium_size} onChange={onChange} />
            <Input name="type_2_large_size" label="dough type 2 large size price" value={pizza?.type_2_large_size} onChange={onChange} />
            <Input name="type_2_small_size" label="dough type 2 small size price" value={pizza?.type_2_small_size} onChange={onChange} />
            <Input name="type_3_medium_size" label="dough type 3 medium size price" value={pizza?.type_3_medium_size} onChange={onChange} />
            <Input name="type_3_large_size" label="dough type 3 large size price" value={pizza?.type_3_large_size} onChange={onChange} />
            <Input name="type_3_small_size" label="dough type 3 small size price" value={pizza?.type_3_small_size} onChange={onChange} />
            <Input name="type_4_medium_size" label="dough type 4 medium size price" value={pizza?.type_4_medium_size} onChange={onChange} />
            <Input name="type_4_large_size" label="dough type 4 large size price" value={pizza?.type_4_large_size} onChange={onChange} />
            <Input name="type_4_small_size" label="dough type 4 small size price" value={pizza?.type_4_small_size} onChange={onChange} />
            <Input name="type_5_medium_size" label="dough type 5 medium size price" value={pizza?.type_5_medium_size} onChange={onChange} />
            <Input name="type_5_large_size" label="dough type 5 large size price" value={pizza?.type_5_large_size} onChange={onChange} />
            <Input name="type_5_small_size" label="dough type 5 small size price" value={pizza?.type_5_small_size} onChange={onChange} />
            <button style={{ margin: "10px 0" }} className="primary_btn" type="submit">Add New Pizza</button>
        </form >
    )
}

export default AddNewPizza