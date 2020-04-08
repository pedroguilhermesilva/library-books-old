const crypton = require("crypto");
const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const users = await connection("users").select("*");

    return res.json(users);
  },

  async create(req, res) {
    const { name, email, password } = req.body;

    const id = crypton.randomBytes(4).toString("HEX");

    await connection("users").insert({
      id,
      name,
      email,
      password,
    });

    return res.status(200).json({ success: "Usuário criado com sucesso!" });
  },
};
