const Subtype = require("../models/SubtypeData");

module.exports = {
  async read(request, response) {
    const { type } = request.params
    let SubtypeList = await Subtype.find({ type: type });

    return response.json(SubtypeList);
  }
}