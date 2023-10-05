// /api/new-meetup
//Only post req to this route

/* import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const FormData = req.body;
        
        ///// Mongo client
        const client = await MongoClient.connect("mongodb+srv://Francesco1277:Francesco1277@cluster0.ubxnzm9.mongodb.net/meetups?retryWrites=true&w=majority");
        const db = client.db();
        /////// accessing db and sending data
        const  MeetupCollections = db.collection('FormData');
        const  result = await MeetupCollections.insertOne(FormData);
        console.log("result", result);
        ///////// closes connection to  db
       client.close() 
        res.status(201).json({message:'FormData inserted!'})
    } 


} */
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const FormData = req.body;
        
        try {
            ///// Mongo client
            const client = await MongoClient.connect("mongodb+srv://Francesco1277:Francesco1277@cluster0.ubxnzm9.mongodb.net/meetups?retryWrites=true&w=majority");
            const db = client.db();
            /////// accessing db and sending data
            const  MeetupCollections = db.collection('FormData');
            const  result = await MeetupCollections.insertOne(FormData);
            console.log("result", result);
            ///////// closes connection to  db
            client.close() 
            res.status(201).json({message:'Richiesta inviata, grazie!'})
        } catch (error) {
            console.error(error);
            res.status(500).json({message:'Si è verificato un errore, riprova più tardi, grazie!'})
        }
    } 
}