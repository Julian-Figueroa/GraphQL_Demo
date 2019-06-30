const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const option = {
  useNewUrlParser: true
};

const app = express();

//Allow Cross Origin
app.use(cors());

//Connect mLab
mongoose.connect(process.env.MLAB_CONNECTION, option);
mongoose.connection.once('open', () => {
  console.log('Connected to mLab DB');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log('Express running on port 4000');
});
