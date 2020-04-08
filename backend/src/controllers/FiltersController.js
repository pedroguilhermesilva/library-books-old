const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const { type } = req.query;
    let books = "";

    if (type === "all") {
      books = await connection("books").select("*");
      return res.json(books);
    } else {
      books = await connection("books").where("type", type).select("*");
    }

    return res.json(books);
  },
};
