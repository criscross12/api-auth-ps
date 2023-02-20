const express = require("express");
const userSchema = require("../models/user.model");

const routerAuth = express.Router();

routerAuth.post("/auth", (req, res) => {
  const { usuario, pass } = req.body;
  userSchema
    .findOne({ usuario, pass })
    .then((data) => {
      if (data == null) {
        dataRes = {
          message: "Usuario no encontrado",
          status: false,
        };
        return res.json(dataRes);
      } else {
        resData = {
          data,
          status: true,
        };
        res.json(resData);
      }
      /*const newdata = {
        ultimo_inicio_sesion: new Date(),
      };
      const dataUser = userSchema.updateOne(
        { _id: data["_id"] },
        { $set: { ...newdata } }
      );
      console.log(res.json(dataUser));*/
    })
    .catch((err) => {
      res.json(err);
      console.log(err);
    });
});

routerAuth.put("/auth", (req, res) => {
  const { usuario, pass } = req.body;
  userSchema
    .findOne({ usuario, pass })
    .then((data) => {
      const newdata = {
        ultimo_inicio_sesion: new Date(),
      };
      userSchema
        .updateOne({ _id: data["_id"] }, { $set: { ...newdata } })
        .then((data) => {
          res.json(data);
        });
    })
    .catch((err) => console.log(err));
});

module.exports = routerAuth;
