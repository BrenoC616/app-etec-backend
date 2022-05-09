const Books = require("../models/BookData");
const mongoose = require("mongoose");

module.exports = {
  async read(request, response) {
    const { type } = request.params;
    const { subtype } = request.query;

    let bookList = await Books.find({ type: type });

    if (subtype) {
      bookList = await Books.find({ type: type, subtype: subtype });
    }

    if (bookList.length != 0) {
      return response.json(bookList);
    }

    return response.status(404).json({ message: "Not found!" });
  },
  async readById(request, response) {
    const { id, type } = request.params;

    const isValidId = mongoose.Types.ObjectId.isValid(id);

    if (isValidId) {
      let bookById = await Books.findOne({ _id: id, type: type });

      if (bookById) {
        return response.json(bookById);
      }
    }

    return response.status(401).json({ error: "Não foi encontrado." });
  },
};
