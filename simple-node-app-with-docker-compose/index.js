const PORT = 8001
const KEY = "visits"
const express = require('express');
const redis = require('redis');

const app = express()
//TODO: Getting error with redis version ^4.6.13
const client = redis.createClient({
  host: 'redis-server',
  port: 6379
});

client.on('error', err => console.log('Error ' + err))
client.set(KEY, 0)

// Middleware to log outgoing responses
app.use((req, res, next) => {
  res.on('finish', () => {
    console.log(`${req.ip}: ${req.method.toUpperCase()} ${req.path} --> ${res.statusCode}`)
  });
  next();
});

app.get('/', async(req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of visits ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
