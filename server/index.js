const express = require('express')
const path = require('path');
const app = express()

const port = process.env.PORT || 3000;
const distPath = path.join(__dirname, '../client/dist');

app.use(express.json());
app.use(express.static(distPath));

app.get('/', (req, res) => {
  res.render(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
