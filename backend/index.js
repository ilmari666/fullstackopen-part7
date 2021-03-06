const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const blogsRouter = require('./api/blogs');
const usersRouter = require('./api/users');
const loginRouter = require('./api/login');
const extractToken = require('./middleware/extracttoken');

const config = require('./utils/config');

mongoose
  .connect(config.mongoUrl)
  .then(() => {
    console.log('connected to database', config.mongoUrl);
  })
  .catch(err => {
    console.log(err);
  });

app.use(cors());
app.use(bodyParser.json());
app.use(extractToken);
app.use('/api/login', loginRouter);
app.use('/api/blogs', blogsRouter);
app.use('/api/users', usersRouter);

const server = http.createServer(app);
server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
server.on('close', () => {
  mongoose.connection.close();
});

module.exports = {
  app,
  server
};
