const mongoose = require("mongoose");
const validate = require("validate");

const userSchema = mongoose.Schema({
  usuario: {
    type: String,
  },
  pass: {
    type: String,
  },
  nombre: {
    type: String,
  },
  ultimo_inicio_sesion: {
    type: Date,
  },
  tipo: {
    type: String,
    enum: ["desarrollo", "implementacion", "administración", "usuario"],
  },
  maximo_tiempo_sesion_inactiva: {
    type: Number,
    size: {
      length: 2,
    },
  },
});

module.exports = mongoose.model("User", userSchema);
