import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://anushazz841:anushazz841@cluster0.cnvb6.mongodb.net/"

const data = {
    firstName: "Deepika",
    lastName: "Padukone",
    city: "Mumbai",
    phoneNumber: 987654322
}


const client = new MongoClient(uri);
async function run() {
  try {

    const database = client.db("Helloworld");
    const user = database.collection("Users");
    
    const result = await user.insertOne(data);
   
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
     // Close the MongoDB client connection
    await client.close();
  }
}
// Run the function and handle any errors
run().catch(console.dir);