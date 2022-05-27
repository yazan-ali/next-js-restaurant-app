import mongoose from "mongoose";

export default async function DB_Connect() {

    mongoose.connect("mongodb+srv://$DB_USER:$DB_PASSWORD@cluster0-x9sw4.mongodb.net/<dbname>?retryWrites=true&w=majority", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });

    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log("MongoDB database connection established successfully");
    });
}