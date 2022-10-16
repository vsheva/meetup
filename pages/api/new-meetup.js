import {MongoClient} from "mongodb";

// POST api/new-meetup
//in -> req, res object

//1. Getting Request

async function handler(req, res) {
    if(req.method ==="POST") {
        const data= req.body;

        const {image, title, address, description}= data;

        //2. storing data in the db

       const client = await MongoClient.connect("mongodb+srv://shev1181:a12850000@cluster0.pekmzk1.mongodb.net/meetups?retryWrites=true&w=majority");
       const db= client.db();

       const meetupsCollection = db.collection("meetups");

       const result = await meetupsCollection.insertOne(data);

       console.log(result)

        client.close();

       //3.send back the response

        res.status(201).json({message:"Meetup inserted!"});
    }
}


export default handler;