const express = require('express');
const app = express()
const MongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/secret', (reg, res, next) => {
    // Read the message from mongodb
    MongoClient.connect('mongodb://localhost:27017/homework7', (err, db) => {
        if (err) throw err;
        const result = db.homework7.find().toArray()[0];
        res.send(decrypt(result.message));
    })
})

function decrypt(text) {
    var decipher = crypto.createDecipher('aes-256-cbc', 'asaadsaad')
    var dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec;
}

