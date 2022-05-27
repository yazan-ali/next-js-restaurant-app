import mongoose from "mongoose";

export default async function DB_Connect() {

    mongoose.connect("mongodb+srv://yazan1ali:yazan154ali@cluster0-x9sw4.mongodb.net/<dbname>?retryWrites=true&w=majority", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });

    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log("MongoDB database connection established successfully");
    });
}