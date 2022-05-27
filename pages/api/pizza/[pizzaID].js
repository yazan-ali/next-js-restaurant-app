import DB_Connect from "../../../db-connect";
import Pizza from "../../../models/pizzaModel"

const handler = async (req, res) => {

    const method = req.method;
    const { pizzaID } = req.query;

    await DB_Connect();

    switch (method) {
        case "GET":
            try {
                const pizza = await Pizza.findOne({ _id: pizzaID })
                res.status(200).json(pizza)
            } catch (err) {
                res.json({
                    success: false,
                    message: "An error has occurred"
                });
                console.log(err)
            }
            break;
        case "PUT":
            try {

                const pizza = await Pizza.findOne({ _id: pizzaID });

                if (pizza) {
                    const updatedPizza = {
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

                    await Pizza.findByIdAndUpdate(pizzaID, updatedPizza);
                    res.json("Pizza has been updated successfully")
                }
            } catch (err) {
                res.json({
                    success: false,
                    message: "An error has occurred"
                });
                console.log(err)
            }
            break;
        case "DELETE":
            try {
                const pizza = await Pizza.findOne({ _id: pizzaID });
                if (pizza) {
                    await Pizza.findByIdAndDelete(pizzaID);
                    res.json("Pizza has been Deleted successfully")
                }

            } catch (err) {
                res.json({
                    success: false,
                    message: "An error has occurred"
                });
                console.log(err)
            }
    }

}

export default handler;