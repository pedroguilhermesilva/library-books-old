const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const books = await connection("books").select("*");

    return res.json(books);
  },

  async create(req, res) {
    const { isbn, type, name, drescription, start_date, end_date } = req.body;
    const user_id = req.headers.authorization;

    const [id] = await connection("books").insert({
      isbn,
      type,
      name,
      drescription,
      start_date,
      end_date,
      user_id,
    });

    return res.status(200).json({ id });
  },

  async delete(req, res) {
    const { id } = req.params;
    const user_id = req.headers.authorization;

    const book = await connection("books")
      .where("id", id)
      .select("user_id")
      .first();

    if (book.user_id !== user_id) {
      return res.status(401).json({ error: "Operação não permitida!" });
    }

    await connection("books").where("id", id).delete();

    return res.status(204).send();
  },
};
