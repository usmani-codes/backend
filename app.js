const express = require('express');
const app = express();

const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

//middlewar
app.use(express.static('./public'));
app.use(express.json());
// routes

app.use('/api/v1/tasks', tasks);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('connected to db');
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
// //get: api/v1/tasks
// //post: api/v1/tasks
// //get:api/v1/tasks/:taskId
// //post: api/v1/tasks/:taskId
// //delete: api/v1/tasks/:taskId