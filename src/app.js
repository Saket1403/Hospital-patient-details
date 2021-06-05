const express = require("express");
require("./db/conn");
const hospitalpatientdetails = require("./models/hospitalpatientbasic");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.post("/hospitalpatientdetails" , (req , res) => {
    console.log(req.body);
    const user = new hospitalpatientdetails(req.body);

    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
    
})

app.listen(port , () => {
    console.log('connected');
})