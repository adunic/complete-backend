const mongoose = require('mongoose')




async function connectdb(){
    await mongoose.connect("mongodb://dv:mWCdg8uDax6eaUTY@ac-fwnmmsj-shard-00-00.eyi6aok.mongodb.net:27017,ac-fwnmmsj-shard-00-01.eyi6aok.mongodb.net:27017,ac-fwnmmsj-shard-00-02.eyi6aok.mongodb.net:27017/halley?ssl=true&replicaSet=atlas-42o255-shard-0&authSource=admin&appName=Cluster1")
  .then(() => console.log("DB connected successfully"))
  .catch(err => console.log("DB Error ", err));

    
}
module.exports = connectdb