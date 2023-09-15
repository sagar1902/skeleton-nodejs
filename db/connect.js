const mongoose = require('mongoose');

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("connected to database");
    }catch(e){
        console.log('connection distorted');
    }
}

module.exports = connect;