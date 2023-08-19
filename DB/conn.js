// database connections
const mongoose = require("mongoose");
// dev
// const uri = "mongodb://127.0.0.1/triveous";

// prod
const uri = "mongodb+srv://tempuser:tempuser@cluster0.eaaq4.mongodb.net/triveous?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((data) => {
    console.log("DB is connected..");
}).catch((err) => {
    console.log(err);
});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Database connected successfully");
})


