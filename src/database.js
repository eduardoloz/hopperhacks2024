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
    await addLocation('stimson', 'Stimson Hall', 'Roosevelt');
    await addLocation('james', 'James Hall', 'H');
    await addLocation('langmuir', 'Langmuir Hall', 'H');
    await addLocation('benedict north', 'Benedict Hall North', 'H');
    await addLocation('benedict south', 'Benedict Hall South', 'H');
    await addLocation('gray', 'Gray Hall', 'Mendelsohn');
    await addLocation('o\'neill', 'O\'Neill Hall', 'Mendelsohn');
    await addLocation('irving', 'Irving Hall', 'Mendelsohn');
    await addLocation('ammann', 'Ammann Hall', 'Mendelsohn');
    await addLocation('yang', 'Yang Hall', 'Nobel');
    await addLocation('lauterbur', 'Lauterbur Hall', 'Nobel');
    await addLocation('chavez', 'Chavez Hall', 'Living Learning');
    await addLocation('tubman', 'Tubman Hall', 'Living Learning');
    await addLocation('mount', 'Mount Hall', 'Roth');
    await addLocation('hendrix', 'Hendrix Hall', 'Roth');
    await addLocation('gershwin', 'Gershwin Hall', 'Roth');
    await addLocation('whitman', 'Whitman Hall', 'Roth');
    await addLocation('cardozo', 'Cardozo Hall', 'Roth');
    await addLocation('toscanini', 'Toscanini Hall', 'Tabler');
    await addLocation('chinn', 'Chinn Hall', 'Tabler');
    await addLocation('hand', 'Hand Hall', 'Tabler');
    await addLocation('douglass', 'Douglass Hall', 'Tabler');
    await addLocation('dreiser', 'Dreiser Hall', 'Tabler');
    await addLocation('eisenhower', 'Eisenhower Hall', 'Kelly');
    await addLocation('shick', 'Shick Hall', 'Kelly');
    await addLocation('hamilton', 'Hamilton Hall', 'Kelly');
    await addLocation('dewey', 'Dewey Hall', 'Kelly');
    await addLocation('baruch', 'Baruch Hall', 'Kelly');
    await addLocation('schomburg', 'Schomburg Apartments', 'Schomburg');
    await addLocation('west', 'West Apartments', 'West');
    await addLocation('chapin', 'Chapin Apartments', 'Chapin');
}

async function addLocation(locid, name, community) {
    const locationCollection = db.collection('locations');
    let shouldInsert = await locationCollection.findOne( { locid: locid} );
    if (shouldInsert != null) return;
    await locationCollection.insertOne({
        locid: locid,
        name: name,
        community: community,
    });
}

async function addProfile(name, username, password, gender, preferredGender, major, desc, locid, pictures) {
    const profileCollection = db.collection('profiles');
    let shouldInsert = await profileCollection.findOne( { username: username} );
    if (shouldInsert != null) return;
    await profileCollection.insertOne({
        name: name,
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

async function getProfilesForGenders(gender, preferredGender) {
    const profileCollection = db.collection('profiles');
    let cursor = profileCollection.find( { gender: preferredGender, preferredGender: gender } );
    var list = [];
    for await (profile of cursor) {
        list.push(profile);
    }
    shuffleArray(list);
    return list;
}

async function getProfilesForUser(profile) {
    return getProfilesForGenders(profile.gender, profile.preferredGender);
}

async function getProfileByUsername(username) {
    const profileCollection = db.collection('profiles');
    let profile = await profileCollection.findOne( { username: username } );
    return profile;
}

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


// testing
async function run() {
    await initDatabase();
    await addProfile('Hopper', 'hopper', 'hopper123', 'female', 'male', 'CSE', 'A fun bun!', 'wagner', 'hi.png');
    await addProfile('Wolfie', 'wolfie', 'wolfie123', 'male', 'female', 'AMS', 'A foo bar!', 'keller', 'no.png');

    let hopper = await getProfileByUsername('hopper');
    let wolfie = await getProfileByUsername('wolfie');
    let recommendations = await getProfilesForUser(hopper);
    console.log(hopper);
    console.log(wolfie);
    console.log(recommendations);

    await client.close();
}
run().catch(console.dir);
