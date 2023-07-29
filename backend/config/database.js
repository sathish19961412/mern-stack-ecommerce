const mongoose = require('mongoose');


const connectDatabase=()=>{
      mongoose.connect(process.env.DB_LOCAL_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
      }).then(con=>{
              console.log(`Mongodb is connected  to the Host: ${con.connection.host}`)
      }).catch((err)=>{
         console.log(err);
      })
}

module.exports=connectDatabase;