const mongoose=require('mongoose')

const uri = process.env.MONGODB_URI || "mongodb+srv://razak:mohamed@scriptmani.q77zz.mongodb.net/manikandan?retryWrites=true&w=majority";

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true }, err=>{
    if(!err){
        console.log(uri)
        console.log("Connected to mongodb")
    }
    else{console.log("Connection failed");}
})

require('./techie.model')