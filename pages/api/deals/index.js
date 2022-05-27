import DB_Connect from "../../../db-connect";
import Deal from "../../../models/dealModel"

const handler = async (req, res) => {

    const method = req.method;

    await DB_Connect();

    switch (method) {
        case "GET":
            try {
                const deals = await Deal.find({})
                res.status(200).json(deals)
            } catch (err) {
                res.json({
                    success: false,
                    message: "An error has occurred"
                });
                console.log(err)
            }
            break;
        case "POST":
            const newdeal = {
                img: req.body.img,
                name: req.body.name,
                description: req.body.description,
                price: req.body.price
            }

            try {
                const deal = new Deal(newdeal)
                await deal.save()

                res.json("New Deal has been added successfully")

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