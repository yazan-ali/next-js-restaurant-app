import DB_Connect from "../../../db-connect";
import Pasta from "../../../models/pastaModel"

const handler = async (req, res) => {

    const method = req.method;
    const { pastaID } = req.query;

    await DB_Connect();

    switch (method) {
        case "GET":
            try {
                const pasta = await Pasta.findOne({ _id: pastaID })
                res.status(200).json(pasta)
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

                const pasta = await Pasta.findOne({ _id: pastaID });

                if (pasta) {
                    const updatedPasta = {
                        img: req.body.img,
                        name: req.body.name,
                        description: req.body.description,
                        price: req.body.price
                    }

                    await Pasta.findByIdAndUpdate(pastaID, updatedPasta);
                    res.json("Pasta has been updated successfully")
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
                const pasta = await Pasta.findOne({ _id: pastaID });
                if (pasta) {
                    await Pasta.findByIdAndDelete(pastaID);
                    res.json("Pasta has been Deleted successfully")
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