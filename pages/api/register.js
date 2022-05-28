import User from "../../models/userModel"
import DB_Connect from "../../db-connect";
import bcrypt from 'bcrypt'

function generateToken(user) {
    return jwt.sign({
        id: user.id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin
    }, "dfsgpopgiwpjfwjgjwuj9r9sa9j", { expiresIn: "1h" }
    )
}

const handler = async (req, res) => {

    const method = req.method;

    await DB_Connect();

    switch (method) {
        case "POST":
            try {

                const user = await User.findOne({ username: req.body.username });
                if (user) {
                    res.json({
                        auth: false,
                        message: "This user already exists"
                    })
                    throw new Error("This user already exists")
                }

                const password = await bcrypt.hash(req.body.password, 12);

                const newUser = new User({
                    email: req.body.email,
                    username: req.body.username,
                    password: password,
                    isAdmin: req.body.isAdmin
                });
                const result = await newUser.save();

                const token = generateToken(result);
                res.json({
                    result,
                    auth: true
                })
            }
            catch (err) {
                console.log(err)
            }
            break;
    }

}

export default handler;