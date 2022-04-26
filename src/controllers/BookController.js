const Books = require("../models/BookData");

module.exports = {
  async read(request, response) {
    const { type } = request.params;
    const { subtype } = request.query;
    let bookList = await Books.find({ type: type });

    if (subtype) {
      bookList = await Books.find({ subtype: subtype });
    }

    return response.json(bookList);
  },
  async readById(request, response) {
    const { id } = request.params;

    let bookById = await Books.findOne({ _id: id });

    return response.json(bookById);
  },
  async create(request, response) {
    const { coverUrl, title, description, type, subtype } = request.body;

    if (!title || !type) {
      return response.status(400).json({ error: "Necessário um Título/Tipo" });
    }

    const bookCreated = await Books.create({
      coverUrl,
      title,
      description,
      type,
      subtype,
    });

    return response.json(bookCreated);
  },
  async delete(request, response) {
    const { id } = request.params;

    const bookDeleted = await Books.findOneAndDelete({ _id: id });

    if (bookDeleted) {
      return response.json(bookDeleted);
    }

    return response
      .status(401)
      .json({ error: "Não foi encontrado para deletar." });
  },
};
