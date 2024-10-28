const mongoose = require("mongoose")

const connect = async () => {
    try{
        const connection = await mongoose.connect(process.env.DATABASE_CONNECTION)
        if(!connection){
            throw new Error("Connection Error:  Unable to connect to database")
        }else if(connection){
            console.log("Connected to database")
        }
    }catch(error){
        console.log(`Error: ${error}`)
    }
}

module.exports = {connect}