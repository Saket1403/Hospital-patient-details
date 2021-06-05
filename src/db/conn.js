const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dbmongo19:arisha1234@covidhealthdatabase.6ds4n.mongodb.net/HospitalDashboard" , {
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {
    console.log("connection successful");
}).catch((e) =>{
    console.log("no connection");
})