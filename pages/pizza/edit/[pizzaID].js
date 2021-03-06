import useInput from '../../../hooks/useInput';
import useItemUpdate from '../../../hooks/useUpdateItem';
import Input from '../../../components/input';
import Router from 'next/router';
import { useSession } from 'next-auth/react';

function EditPizza({ pizza, pizzaID }) {

    const { data: session, status } = useSession()
    const [message, updatePizza] = useItemUpdate();

    const [pizzaName, setPizzaName] = useInput(pizza.name);
    const [pizzaType, setPizzaType] = useInput(pizza.type);
    const [pizzaImg, setPizzaImg] = useInput(pizza.img);
    const [pizzaDescription, setPizzaDescription] = useInput(pizza.description);
    const [type1Size1Price, setType1Size1Price] = useInput(pizza.price.type_1.medium);
    const [type1Size2Price, setType1Size2Price] = useInput(pizza.price.type_1.large);
    const [type1Size3Price, setType1Size3Price] = useInput(pizza.price.type_1.small);
    const [type2Size1Price, setType2Size1Price] = useInput(pizza.price.type_2.medium);
    const [type2Size2Price, setType2Size2Price] = useInput(pizza.price.type_2.large);
    const [type2Size3Price, setType2Size3Price] = useInput(pizza.price.type_2.small);
    const [type3Size1Price, setType3Size1Price] = useInput(pizza.price.type_3.medium);
    const [type3Size2Price, setType3Size2Price] = useInput(pizza.price.type_3.large);
    const [type3Size3Price, setType3Size3Price] = useInput(pizza.price.type_3.small);
    const [type4Size1Price, setType4Size1Price] = useInput(pizza.price.type_4.medium);
    const [type4Size2Price, setType4Size2Price] = useInput(pizza.price.type_4.large);
    const [type4Size3Price, setType4Size3Price] = useInput(pizza.price.type_4.small);
    const [type5Size1Price, setType5Size1Price] = useInput(pizza.price.type_4.medium);
    const [type5Size2Price, setType5Size2Price] = useInput(pizza.price.type_5.large);
    const [type5Size3Price, setType5Size3Price] = useInput(pizza.price.type_5.small);

    if (status === "loading") {
        return <h1>Loading...</h1>
    }

    if (!session || !session.user.isAdmin) {
        return Router.push("/")
    }

    const submitUpdatedPizza = async (evt) => {
        evt.preventDefault();

        const updatedPizza = {
            type: pizzaType,
            img: pizzaImg,
            name: pizzaName,
            description: pizzaDescription,
            type_1_medium_size: type1Size1Price,
            type_1_large_size: type1Size2Price,
            type_1_small_size: type1Size3Price,
            type_2_medium_size: type2Size1Price,
            type_2_large_size: type2Size2Price,
            type_2_small_size: type2Size3Price,
            type_3_medium_size: type3Size1Price,
            type_3_large_size: type3Size2Price,
            type_3_small_size: type3Size3Price,
            type_4_medium_size: type4Size1Price,
            type_4_large_size: type4Size2Price,
            type_4_small_size: type4Size3Price,
            type_5_medium_size: type5Size1Price,
            type_5_large_size: type5Size2Price,
            type_5_small_size: type5Size3Price,
        }

        updatePizza(`/api/pizza/${pizzaID}`, updatedPizza);
    }

    return (
        <form onSubmit={submitUpdatedPizza}>
            <Input name="name" label="pizza name" value={pizza?.name} onChange={setPizzaName} />
            <Input name="type" label="pizza type" value={pizza?.type} onChange={setPizzaType} />
            <Input name="img" label="pizza image" value={pizza?.img} onChange={setPizzaImg} />
            <Input name="description" label="pizza description" value={pizza?.description} onChange={setPizzaDescription} />
            <Input name="type_1_medium_size" label="dough type 1 medium size price" value={type1Size1Price} onChange={setType1Size1Price} />
            <Input name="type_1_large_size" label="dough type 1 large size  price" value={type1Size2Price} onChange={setType1Size2Price} />
            <Input name="type_1_small_size" label="dough type 1 small size  price" value={type1Size3Price} onChange={setType1Size3Price} />
            <Input name="type_2_medium_size" label="dough type 2 medium size price" value={type2Size1Price} onChange={setType2Size1Price} />
            <Input name="type_2_large_size" label="dough type 2 large size price" value={type2Size2Price} onChange={setType2Size2Price} />
            <Input name="type_2_small_size" label="dough type 2 small size price" value={type2Size3Price} onChange={setType2Size3Price} />
            <Input name="type_3_medium_size" label="dough type 3 medium size price" value={type3Size1Price} onChange={setType3Size1Price} />
            <Input name="type_3_large_size" label="dough type 3 large size price" value={type3Size2Price} onChange={setType3Size2Price} />
            <Input name="type_3_small_size" label="dough type 3 small size price" value={type3Size3Price} onChange={setType3Size3Price} />
            <Input name="type_4_medium_size" label="dough type 4 medium size price" value={type4Size1Price} onChange={setType4Size1Price} />
            <Input name="type_4_large_size" label="dough type 4 large size price" value={type4Size2Price} onChange={setType4Size2Price} />
            <Input name="type_4_small_size" label="dough type 4 small size price" value={type4Size3Price} onChange={setType4Size3Price} />
            <Input name="type_5_medium_size" label="dough type 5 medium size price" value={type5Size1Price} onChange={setType5Size1Price} />
            <Input name="type_5_large_size" label="dough type 5 large size price" value={type5Size2Price} onChange={setType5Size2Price} />
            <Input name="type_5_small_size" label="dough type 5 small size price" value={type5Size3Price} onChange={setType5Size3Price} />
            <button style={{ margin: "10px 0" }} className="primary_btn" type="submit">Update Pizza</button>
        </form>
    )
}

export default EditPizza;

export async function getServerSideProps(context) {

    const { query } = context;
    const { pizzaID } = query;

    const response = await fetch(`http://localhost:3000/api/pizza/${pizzaID}`);
    const data = await response.json();

    return {
        props: {
            pizza: data,
            pizzaID
        },
    }
}