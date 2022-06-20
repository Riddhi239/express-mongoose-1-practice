//Getting mongoose
const mongoose = require('mongoose');
//connection to cloud
const dbUrl  = "mongodb+srv://riddhi239:riddhi239@cluster0.y5jdn.mongodb.net/?retryWrites=true&w=majority"
//creating a collecton to database
const connectionParams = { 
    useNewUrlParser:true,
    useUnifiedTopology:true
}

mongoose.connect(dbUrl, connectionParams).then(()=>{
    console.info("Connection Successful!");
}).catch((e)=>{
    console.log("Connection Unsuccessful!", e);
})
