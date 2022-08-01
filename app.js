const express = require('express');
const { randomUUID } = require("crypto");
const app = express();
app.use(express.json());

const port = 3000;
const AgentsList = [];

app.get('/', (request, response) => {
    request.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.json({success:true, message:"Esta é minha página principal"});
})

app.post("/agents", (request, response) => {
  const { name, role, firstAbility } = request.body;
  
  const product = {
    name,
    role,
    firstAbility,
    id: randomUUID()
  }

  AgentsList.push(product);

  console.log(AgentsList);
  response.json({success:true});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port} with nodemon`);
})