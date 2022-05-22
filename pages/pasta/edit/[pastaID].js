import { useState } from 'react';
import useItemUpdate from '../../../hooks/useUpdateItem';
import Input from '../../../components/input';

function EditPasta({ Pasta, pastaID }) {

    const [status, updatePasta] = useItemUpdate();
    const [pasta, setPasta] = useState(Pasta)

    const onChange = (evt) => {
        setPasta({ ...pasta, [evt.target.name]: evt.target.value })
    }



    const submitUpdatedPasta = async (evt) => {
        evt.preventDefault();

        updatePasta(`http://localhost:5000/pasta/${pastaID}`, pasta);
    }

    return (
        <form onSubmit={submitUpdatedPasta}>
            <Input name="name" value={pasta?.name} onChange={onChange} placeholder="pasta name" />
            <Input name="img" value={pasta?.img} onChange={onChange} placeholder="pasta img" />
            <Input name="description" value={pasta?.description} onChange={onChange} placeholder="pasta description" />
            <Input name="price" value={pasta?.price} onChange={onChange} placeholder="pasta price" />
            <button type="submit">Update Pasta</button>
        </form>
    )
}

export default EditPasta;

export async function getServerSideProps(context) {

    const { query } = context;
    const { pastaID } = query;

    const response = await fetch(`http://localhost:5000/pasta/${pastaID}`);
    const data = await response.json();

    return {
        props: {
            Pasta: data,
            pastaID
        },
    }
}