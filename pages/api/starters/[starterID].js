import DB_Connect from "../../../db-connect";
import Starter from "../../../models/starterModel"

const handler = async (req, res) => {

    const method = req.method;
    const { starterID } = req.query;

    await DB_Connect();

    switch (method) {
        case "GET":
            try {
                const starter = await Starter.findOne({ _id: starterID })
                res.status(200).json(starter)
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

                const starter = await Starter.findOne({ _id: starterID });

                if (starter) {
                    const updatedstarter = {
                        name: req.body.name,
                        description: req.body.description,
                    }

                    await Starter.findByIdAndUpdate(starterID, updatedstarter);
                    res.json("Starter has been updated successfully")
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
                const starter = await Starter.findOne({ _id: starterID });
                if (starter) {
                    await Starter.findByIdAndDelete(starterID);
                    res.json("starter has been Deleted successfully")
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