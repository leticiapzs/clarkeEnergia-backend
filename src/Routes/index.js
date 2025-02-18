import express from "express";
import fornecedores from "./fornecedoresRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("OK"));

  app.use(express.json(), fornecedores);
};

export default routes;