import DB_Connect from "../../../db-connect";
import Dessert from "../../../models/dessertModel"

const handler = async (req, res) => {

    const method = req.method;
    const { dessertID } = req.query;

    await DB_Connect();

    switch (method) {
        case "GET":
            try {
                const dessert = await Dessert.findOne({ _id: dessertID })
                res.status(200).json(dessert)
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

                const dessert = await Dessert.findOne({ _id: dessertID });

                if (dessert) {
                    const updateddessert = {
                        img: req.body.img,
                        name: req.body.name,
                        description: req.body.description,
                        price: req.body.price
                    }

                    await Dessert.findByIdAndUpdate(dessertID, updateddessert);
                    res.json("Dessert has been updated successfully")
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
                const dessert = await Dessert.findOne({ _id: dessertID });
                if (dessert) {
                    await Dessert.findByIdAndDelete(dessertID);
                    res.json("Dessert has been Deleted successfully")
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