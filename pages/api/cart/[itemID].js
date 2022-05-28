import DB_Connect from "../../../db-connect";
import Cart from "../../../models/cartModel"

const handler = async (req, res) => {

    const method = req.method;
    const { itemID } = req.query;

    await DB_Connect();

    switch (method) {
        case "DELETE":
            try {
                const cart = await Cart.findOne({ _id: itemID });
                if (cart) {
                    await Cart.findByIdAndDelete(itemID);
                    res.json("Item has been removed from the cart successfully")
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