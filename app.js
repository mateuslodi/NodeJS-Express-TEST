const express = require('express');
const { randomUUID } = require("crypto");
const app = express();
app.use(express.json());

const port = 3000;
const AgentsList = [];

app.get('/', (request, response) => {
    request.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.json({success:true, message:"This is my home page"});
})

app.post("/agents", (request, response) => {
  const { name, role, firstAbility } = request.body;
  
  const agent = {
    name,
    role,
    firstAbility,
    id: randomUUID()
  }

  AgentsList.push(agent);

  response.json({success:true, agentList: AgentsList});
});

app.get('/agents/:id', (request, response) => {
  const { id } = request.params;
  const agent = AgentsList.find(AgentsList => AgentsList.id === id);
  if(agent !== undefined) {
    response.json({success:true, agent: agent});
  }
  response.json({success:false, message: "No agent was found with this id"});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} with nodemon`);
})