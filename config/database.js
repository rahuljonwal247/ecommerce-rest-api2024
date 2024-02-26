const config = require('./config');
const mongoose = require('mongoose');

async function connectToDB() {
  try {
    await mongoose.connect(config.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('DB is connected!');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

connectToDB();
