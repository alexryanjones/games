import mongoose from '../db.js';

const queriesSchema = new mongoose.Schema({
  search: String,
  results: [
    {
      title: String,
      background_image: String,
      releaseDate: Date,
    },
  ],
});

export default mongoose.model('queries', queriesSchema);
