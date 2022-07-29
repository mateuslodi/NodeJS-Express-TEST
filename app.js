const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({success:true, message:"Esta é minha página principal"});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} with nodemon`);
})