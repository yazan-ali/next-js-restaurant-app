import DB_Connect from "../../../db-connect";
import Dessert from "../../../models/dessertModel"

const handler = async (req, res) => {

    const method = req.method;

    await DB_Connect();

    switch (method) {
        case "GET":
            try {
                const desserts = await Dessert.find({})
                res.status(200).json(desserts)
            } catch (err) {
                res.json({
                    success: false,
                    message: "An error has occurred"
                });
                console.log(err)
            }
            break;
        case "POST":
            const newdessert = {
                img: req.body.img,
                name: req.body.name,
                description: req.body.description,
                price: req.body.price
            }

            try {
                const dessert = new Dessert(newdessert)
                await dessert.save()

                res.json("New Dessert has been added successfully")

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