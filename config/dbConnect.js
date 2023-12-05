const { default: mongoose } = require("mongoose")

const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URL);
        console.log("Database Connected Successfully");
    }
    catch (error) {
        console.log("Databsae Error");
    }
};

module.exports = dbConnect;