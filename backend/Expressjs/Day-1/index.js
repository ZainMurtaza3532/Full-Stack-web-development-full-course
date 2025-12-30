import express from 'express';
import userdata from './data/data.js';
const app = express();

// Get request to the root URL 
app.get('/', (req, res) => {
    res.status(200);
  res.send('Hello World! This is Day 1 of the Express.js tutorial.');
});

// industry standard port for web servers is 3000
app.get("/api/v1/users", (req, res) => {
    const {name} = req.query;
    if(name){
        const filteredData = userdata.filter((user)=>{
            return user.name === name;
        })
        res.status(200).send(filteredData);
    }
  res.status(200).send(userdata);
});


// router params
app.get("/api/v1/users/:id", (req, res) => {
    const {id} = req.params;
    const parseId = parseInt(id);

    const user = userdata.find((user) => user.id === parseId);

    res.status(200).send(user);
});


// Post request
app.post("/api/v1/users", (req, res) => {
    console.log(req.body)
    res.status(201).send({message: "User created successfully"});
});

get.put("/api/v1/users/:id", (req, res) => {
    const {id} = req.params;
    console.log(`Updating user with id: ${id}`);
    res.status(200).send({message: `User with id: ${id} updated successfully`});
});

app.delete("/api/v1/users/:id", (req, res) => {
    const {id} = req.params;
    console.log(`Deleting user with id: ${id}`);
    res.status(200).send({message: `User with id: ${id} deleted successfully`});
});


// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});