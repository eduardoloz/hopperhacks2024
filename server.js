const { MongoClient } = require("mongodb");
const uri = 'mongodb+srv://hopper:hopperhellyeah@cluster0.jkkkjsb.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);
const db = client.db('hopper');

const express = require('express'); // Sets up side server
const mongoose = require('mongoose'); // Connect to mongoDB/database
const cors = require('cors'); // Minimize error when connected to database & api
const bodyParser = require('body-parser'); // Parse data into JSON
const bcrypt = require('bcrypt'); // User auth - hash and store password
const jwt = require('jsonwebtoken'); // Token that follows user when signed in & removed when signed out

const SECRET_KEY = 'hoppermetenderhoppermedo';

// Connect to Express app
const app = express();

// Connect to MongoDB
mongoose.connect(uri, {
    useNewUrlParser: true
})
.then(() => {
    app.listen(3001, () => { // Port 3001, React default port is 3000
        console.log('Server is connected to port 3001 and connected to MongoDB');
    }); 
})
.catch((error) => {
    console.log('Unable to connect to Server and/or MongoDB');
})

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.post('/register', async (req, res) => {
    try {
        console.log(req.body);
        const { name, username, password, gender, preferredGender, major, desc, locid, picture } = req.body
        const hashedPassword = await bcrypt.hash(password, 10) // 10 - how hard it is to unhash the password
        addProfile(name, username, hashedPassword, gender, preferredGender, major, desc, locid, picture);
        res.status(201).json({ message: 'User created sucessfully'}) // Send status code of 201 if it works and send a message 
    } catch (error) {
        res.status(500).json({ message: 'Error signing up'})
    }
})

// GET LOGIN
app.post('/login', async (req, res) => {
    console.log('hi');
    console.log(req.body);
    try {
        const { username, password } = req.body
        const user = await getProfileByUsername(username); // Find username
        if (!user) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }
        const isPasswordValid = await bcrypt.compare(password, user.password) // Compare password saved to password entered by user
        if (!isPasswordValid) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }
        const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1hr' });
        res.json({ message: 'Login successfully' })
    } catch (error) {
        res.status(500).json({ error: error });
    }
})

app.get('/matches', async (req, res) => {
    try {
        const { username } = req.body
        const user = getProfileByUsername(username); // Find username
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' })
        }
        res.json({ matches: getProfilesForUser(user) });
    } catch (error) {
        res.status(500).json({ error: 'Error'})
    }
});

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

async function addProfile(name, username, password, gender, preferredGender, major, desc, locid, picture) {
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
        picture: picture
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
    // TODO add location filtering
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
}
run().catch(console.dir);
