const { MongoClient } = require("mongodb");
const uri = 'mongodb+srv://hopper:hopperhellyeah@cluster0.jkkkjsb.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

async function initDatabase() {
    try {
        const db = client.db('hopper');
        const locationCollection = db.collection('locations');
        const profileCollection = db.collection('profiles');
        await profileCollection.createIndex( { username: 1 }, { unique: true } );
        await locationCollection.createIndex( { locid: 1 }, { unique: true } );
        await addLocation('wagner', 'Wagner Hall', 'Roosevelt');
        await addLocation('greeley', 'Greeley Hall', 'Roosevelt');
        await addLocation('keller', 'Keller Hall', 'Roosevelt');
        await addLocation('yang', 'Yang Hall', 'Nobel');
    } finally {
        await client.close();
    }
}

async function addLocation(locid, name, community) {
    try {
        const db = client.db('hopper');
        const locationCollection = db.collection('locations');
        await locationCollection.insertOne({
            locid: locid,
            name: name,
            community: community,
        });
    } finally {
        await client.close();
    }
}

async function addProfile(username, password, gender, major, desc) {
  try {
    const db = client.db('hopper');
    const profileCollection = db.collection('profiles');
    await profileCollection.insertOne({
        username: username,
        password: password,
        gender: gender,
        major: major,
        desc: desc
    });
  } finally {
    await client.close();
  }
}

async function run() {
    await initDatabase();
    await addProfile('hopper', 'hopper123', 'female', 'CSE', 'A fun bun!');
}
run().catch(console.dir);
