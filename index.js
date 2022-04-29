const express = require("express");
const app = express();
const core = require("cores");

const PORT = process.env.PORT || 8081;

app.use(express.json());


app.use("/api", require("./routes/router") );

app.listen(PORT , ()=>{
    console.log("Website is starting now ");
})