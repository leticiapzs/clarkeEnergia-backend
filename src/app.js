import express from "express";
import connectDataBase from "./config/dbConnect.js";
import fornecedores from "./models/fornecedores.js";

const conexao = await connectDataBase();
conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!");
});


const app = express();




app.get("/fornecedores", (req, res) => {
    res.status(200).json(fornecedores);
});

export default app;