import DB_Connect from "../../../db-connect";
import Cart from "../../../models/cartModel"
import { getSession } from 'next-auth/react';

const handler = async (req, res) => {

    const session = await getSession({ req });
    const method = req.method;

    await DB_Connect();

    switch (method) {
        case "GET":
            try {
                if (session) {
                    const cartItems = await Cart.find({ user_id: session.user._id })
                    res.status(200).json(cartItems);
                } else {
                    res.json({
                        success: false,
                        message: "You should be logged in to show shopping cart"
                    })
                    throw new Error("You should be logged in to show shopping cart")
                }
            } catch (err) {
                res.json({
                    success: false,
                    message: "An error has occurred"
                });
                console.log(err)
            }
            break;
        case "POST":
            try {

                if (session) {
                    const cartItem = new Cart({ ...req.body.cartItem, user_id: session.user._id })
                    await cartItem.save()
                    res.json("New Item has been added to the shopping cart successfully")
                } else {
                    res.json({
                        success: false,
                        message: "You should be logged in to add items to the shopping cart"
                    })
                    throw new Error("You should be logged in to add items to the shopping cart")
                }

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