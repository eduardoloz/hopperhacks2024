const { MongoClient } = require("mongodb");
const uri = 'mongodb+srv://hopper:hopperhellyeah@cluster0.jkkkjsb.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);
const db = client.db('hopper');

async function initDatabase() {
    const locationCollection = db.collection('locations');
    const profileCollection = db.collection('profiles');
    await profileCollection.createIndex( { username: 1 }, { unique: true } );
    await locationCollection.createIndex( { locid: 1 }, { unique: true } );
    await addLocation('wagner', 'Wagner Hall', 'Roosevelt');
    await addLocation('greeley', 'Greeley Hall', 'Roosevelt');
    await addLocation('keller', 'Keller Hall', 'Roosevelt');
    await addLocation('yang', 'Yang Hall', 'Nobel');
}

async function addLocation(locid, name, community) {
    const locationCollection = db.collection('locations');
    await locationCollection.replaceOne({
        locid: locid,
        name: name,
        community: community,
    });
}

async function addProfile(username, password, gender, preferredGender, major, desc, locid, pictures) {
    const profileCollection = db.collection('profiles');
    await profileCollection.replaceOne({
        username: username,
        password: password,
        gender: gender,
        preferredGender: preferredGender,
        major: major,
        desc: desc,
        locid: locid,
        pictures: pictures
    });
}

async function getProfiles() {
    const profileCollection = db.collection('profiles');
    let profiles = await profileCollection.findOne();
    console.log(profiles);
}

async function run() {
    await addProfile('hopper', 'hopper123', 'female', 'male', 'CSE', 'A fun bun!', 'wagner', ['hi.png']);
    await initDatabase();
    await getProfiles();
    await client.close();
}
run().catch(console.dir);
