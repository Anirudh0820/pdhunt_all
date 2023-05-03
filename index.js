const express = require("express");
require('dotenv');
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("hlo world");
});

app.listen(PORT,()=>{
    console.log("server is running on port", PORT);
});
