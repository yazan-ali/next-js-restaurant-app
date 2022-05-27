import DB_Connect from "../../db-connect";

const handler = async (req, res) => {
    await DB_Connect()
    res.status(200).json({ name: 'John Doe' })
}

export default handler