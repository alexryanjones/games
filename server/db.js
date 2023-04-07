import mongoose from 'mongoose';

(async function main () {
  try {
    await mongoose.connect(
      'mongodb://localhost:27017/games'
    );
    console.log('connected to db through mongoose');
  } catch (err) {
    console.log(err);
  }
})();

export default mongoose;