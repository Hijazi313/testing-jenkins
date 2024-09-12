const express = require("express")

const PORT = process.env.PORT ||3000
const app = express();


app.listen(PORT, ()=>{
    console.info("App is running on Port",PORT)
})