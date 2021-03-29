const express = require("express")

const mongoose = require("mongoose")

const PORT = 3000;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//mongoose connect

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });


//declare html routes 
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
//and api routes

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });