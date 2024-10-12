const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
MONGODB: process.env.MONGODB || "mongodb+srv://<db_username>:<db_password>@cluster0.uus2b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
};
