const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  title: { type: String },
  subtitle: { type: Number },
  auther: { type: mongoose.Schema.Types.ObjectId,ref:"Author"},
});

const BookModel = mongoose.model("Book", bookSchema);
module.exports = BookModel;
