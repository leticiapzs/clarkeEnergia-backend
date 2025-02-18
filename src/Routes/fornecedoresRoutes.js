import express from "express";
import FornecedoresController from "../controllers/fornecedoresController.js";

const routes = express.Router();


routes.get("/fornecedores", FornecedoresController.listarFornecedores);

export default routes;