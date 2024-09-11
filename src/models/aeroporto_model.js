const db = require("../db.js");

const Schema = db.Schema;

const aeroportoSchema = new Schema({
  nome: {
    type: String,
    required: true,
  }
});

const Moto = db.model("Aeroporto", aeroportoSchema);

module.exports = Aeroporto;