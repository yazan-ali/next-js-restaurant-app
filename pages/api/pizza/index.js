import DB_Connect from "../../../db-connect";
import Pizza from "../../../models/pizzaModel"

const handler = async (req, res) => {

    const method = req.method;

    await DB_Connect();

    switch (method) {
        case "GET":
            try {
                const pizza = await Pizza.find({})
                res.status(200).json(pizza)
            } catch (err) {
                res.json({
                    success: false,
                    message: "An error has occurred"
                });
                console.log(err)
            }
            break;
        case "POST":
            const newPizza = {
                type: req.body.type,
                name: req.body.name,
                img: req.body.img,
                description: req.body.description,
                price: {
                    type_1: {
                        medium: req.body.type_1_medium_size,
                        large: req.body.type_1_large_size,
                        small: req.body.type_1_small_size
                    },
                    type_2: {
                        medium: req.body.type_2_medium_size,
                        large: req.body.type_2_large_size,
                        small: req.body.type_2_small_size
                    },
                    type_3: {
                        medium: req.body.type_3_medium_size,
                        large: req.body.type_3_large_size,
                        small: req.body.type_3_small_size
                    },
                    type_4: {
                        medium: req.body.type_4_medium_size,
                        large: req.body.type_4_large_size,
                        small: req.body.type_4_small_size
                    },
                    type_5: {
                        medium: req.body.type_5_medium_size,
                        large: req.body.type_5_large_size,
                        small: req.body.type_5_small_size
                    }
                }
            }
            try {
                const pizza = new Pizza(newPizza)
                await pizza.save()

                res.json("New pizza has been added successfully")

            } catch (err) {
                res.json({
                    success: false,
                    message: "An error has occurred"
                });
                console.log(err)
            }
            break;
    }

}

export default handler;