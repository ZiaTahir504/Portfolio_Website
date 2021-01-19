const express = require('express')
const path = require('path');
const app = express()

const port = process.env.PORT

app.use(express.json());
app.use(express.static('client\dist\index.html'));

app.get('*', (req, res) => {
  res.send('client\dist\index.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
