const express = require("express")

const mongoose = require("mongoose");
const apiroutes = require("./routes/apiroutes");

const PORT = process.env.PORT||3000;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//mongoose connect

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

console.log("line 19")
//declare html routes 
app.use(require("./routes/apiroutes.js"));
console.log("line 22")
app.use(require( "./routes/htmlroutes.js"));
//and api routes
console.log("line 25")
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });