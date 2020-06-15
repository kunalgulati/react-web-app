const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";

const client = new MongoClient(uri);
await client.connect();
