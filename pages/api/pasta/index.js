import DB_Connect from "../../../db-connect";
import Pasta from "../../../models/pastaModel"

const handler = async (req, res) => {

    const method = req.method;

    await DB_Connect();

    switch (method) {
        case "GET":
            try {
                const pasta = await Pasta.find({})
                res.status(200).json(pasta)
            } catch (err) {
                res.json({
                    success: false,
                    message: "An error has occurred"
                });
                console.log(err)
            }
            break;
        case "POST":
            const newPasta = {
                img: req.body.img,
                name: req.body.name,
                description: req.body.description,
                price: req.body.price
            }
            try {
                const pasta = new Pasta(newPasta)
                await pasta.save()

                res.json("New Pasta has been added successfully")

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