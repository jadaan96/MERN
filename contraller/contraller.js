const AuthorModel = require("../model/author");
const BookModel = require("../model/books");

const createbook = async (req, res) => {
  try {
    const mohammad1 = await AuthorModel.create({ name: "mohammad" });
    const mohammad = await AuthorModel.findOne({ name: "mohammad" });
    let newbook = new BookModel({ title: "one", aouther: mohammad._id });

    mohammad.books.push(newbook);

    await mohammad.save();
    await newbook.save();
    res.json(mohammad);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const findall = async (req, res) => {
    try {
      const Author = await AuthorModel.find()
     
      res.json(Author);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

module.exports = { createbook,findall };
