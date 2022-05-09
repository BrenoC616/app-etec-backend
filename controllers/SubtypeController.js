const Subtype = require("../models/SubtypeData");

module.exports = {
  async read(request, response) {
    const { type } = request.params
    let subtypeList = await Subtype.find({ type: type });

    if (subtypeList.length == 0) {
      return response.status(404).json({ message: "Not found!" });
    }

    return response.json(subtypeList);
  }
}