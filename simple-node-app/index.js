const express = require('express')
const app = express()
const PORT = 3005

// Middleware to log outgoing responses
app.use((req, res, next) => {
  res.on('finish', () => {
    console.log(`${req.ip}: ${req.method.toUpperCase()} ${req.path} --> ${res.statusCode}`)
  });
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
  throw new Error()
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})