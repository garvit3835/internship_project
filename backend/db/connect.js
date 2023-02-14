const connectdb = async () => {
  const { MongoClient, ServerApiVersion, Collection } = require("mongodb");
  const uri =
    "mongodb+srv://abcd1234:abcd1234@cluster0.hpgfy3l.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
  result = await client.connect();
  let db = await result.db("internship");
  let collection = await db.collection("users");
  console.log("db connected");
//   data = await collection.findOne({});
//   console.log(data);
  return collection
};

module.exports = connectdb;
