const mongoose = require('mongoose');

/**
 * The function `connect` attempts to connect to a MongoDB database using the `MONGODB_URL` environment
 * variable and logs a success message if the connection is successful, or an error message if the
 * connection fails.
 */
const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL); // asynchronous process to connect to mongodb
        console.log("connected to database"); // if connection succeeds
    }catch(e){
        console.log('connection distorted'); // if connection fails
    }
}

module.exports = connect;