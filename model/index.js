const {MongoClient,  ObjectId} = require('mongodb');
require('dotenv').config();
const uri = process.env.uri;

// returns all trails in database
async function getAllTrails() {

const client = new MongoClient(uri);


try {
    await client.connect();

    const database = client.db('hiking');
    const collection = database.collection('trails');

    const cursor = collection.find();

    const data = [];
    await cursor.forEach(document => {
        data.push(document);
    });
    console.log(data)
    
    return data

} catch (error) {
    console.error('Error:', error);
}
}

// returns the trail associated with the id passed in
async function getOneTrail(id){
    const client = new MongoClient(uri);
    console.log(id)
    
    try {
    await client.connect();
    
    const database = client.db('hiking');
    const collection = database.collection('trails');
    const query = { _id: new ObjectId(id) };
    const contact = await collection.findOne(query);
    
    return contact
    
    } catch (error) {
    console.error('Error:', error);
    } finally{
    await client.close()
    }
}

// allows user to add a new trail
async function insertTrail(req) {
    console.log('in insertTrail');
    console.log(req);

    const client = new MongoClient(uri);


try {
    await client.connect();

    const database = client.db('hiking');
    const collection = database.collection('trails');

    
    const dataInput = {
    name: req.body.name,
    location: req.body.location,
    distance: req.body.distance,
    elevationGain: req.body.elevationGain,
    elevationLoss: req.body.elevationLoss,
    lastHiked: req.body.lastHiked,
    comments: req.body.comments
    };
    
    const cursor = await collection.insertOne(await dataInput);
    console.log(cursor)
    
    return cursor

} catch (error) {
    console.error('Error:', error);
} finally{
    await client.close()
}
}

async function removeTrail(id){
console.log(id)
const client = new MongoClient(uri);

try {
    await client.connect();
    
    const database = client.db('hiking');
    const collection = database.collection('trails');

    const filter = { _id: new ObjectId(id) };

    const contact = await collection.deleteOne(filter);
    
    return contact

    
} catch (error) {
    console.error('Error:', error);
} finally{
    await client.close()
}

}

async function updateTrail(id, req){
const client = new MongoClient(uri);

try {
    await client.connect();
    
    const database = client.db('hiking');
    const collection = database.collection('trails');

    const filter = { _id: new ObjectId(id) };
    const update = {
        name: req.body.name,
        location: req.body.location,
        distance: req.body.distance,
        elevationGain: req.body.elevationGain,
        elevationLoss: req.body.elevationLoss,
        lastHiked: req.body.lastHiked,
        comments: req.body.comments
    
    }
    const contact = await collection.replaceOne(filter, update);
    return contact.modifiedCount
    
} catch (error) {
    console.error('Error:', error);
} finally{
    await client.close()
}
}
module.exports = {getAllTrails, getOneTrail, insertTrail, removeTrail,  updateTrail}