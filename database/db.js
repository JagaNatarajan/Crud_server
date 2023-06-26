import mongoose from "mongoose"

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-rmr7mgx-shard-00-00.j3la4b8.mongodb.net:27017,ac-rmr7mgx-shard-00-01.j3la4b8.mongodb.net:27017,ac-rmr7mgx-shard-00-02.j3la4b8.mongodb.net:27017/CRUDAPP?ssl=true&replicaSet=atlas-i6i9cq-shard-0&authSource=admin&retryWrites=true&w=majority`;
     try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log('database connected');
     }catch(error){
        console.log('Error while connecting database', error);
     }  
}
export default Connection;