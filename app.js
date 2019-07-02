const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const option = {
  useNewUrlParser: true
};

const app = express();

//Allow Cross Origin
app.use(cors());

//Connect mLab
mongoose.connect(process.env.MLAB_CONNECTION || process.env.MLAB, option);
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

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', index.html));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Express running on port ${PORT}`);
});
