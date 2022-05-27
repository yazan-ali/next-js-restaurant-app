import DB_Connect from "../../../db-connect";
import Starter from "../../../models/starterModel";

const handler = async (req, res) => {

    const method = req.method;

    await DB_Connect();

    switch (method) {
        case "GET":
            try {
                const starters = await Starter.find({})
                res.status(200).json(starters)
            } catch (err) {
                res.json({
                    success: false,
                    message: "An error has occurred"
                });
                console.log(err)
            }
            break;
        case "POST":
            const newStarter = {
                name: req.body.name,
                price: req.body.price
            }

            try {
                const starter = new Starter(newStarter)
                await Starter.save()

                res.json("New starter has been added successfully")

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