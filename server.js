const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

const port = process.env.PORT || 3000;

mongoose
  .connect(`${process.env.DATABASE_URL}`)
  .then(() => {
    app.listen(port, () => {
      console.log(`App running on port ${port}...`);
    });
  })
  .catch((err) => console.log(err));
