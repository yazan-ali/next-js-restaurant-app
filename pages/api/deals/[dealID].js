import DB_Connect from "../../../db-connect";
import Deal from "../../../models/dealModel"

const handler = async (req, res) => {

    const method = req.method;
    const { dealID } = req.query;

    await DB_Connect();

    switch (method) {
        case "GET":
            try {
                const deal = await Deal.findOne({ _id: dealID })
                res.status(200).json(deal)
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

                const deal = await Deal.findOne({ _id: dealID });

                if (deal) {
                    const updateddeal = {
                        img: req.body.img,
                        name: req.body.name,
                        description: req.body.description,
                        price: req.body.price
                    }

                    await Deal.findByIdAndUpdate(dealID, updateddeal);
                    res.json("Deal has been updated successfully")
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
                const deal = await Deal.findOne({ _id: dealID });
                if (deal) {
                    await Deal.findByIdAndDelete(dealID);
                    res.json("Deal has been Deleted successfully")
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