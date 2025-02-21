import express from "express";
import connectDataBase from "./config/dbConnect.js";
import routes from "./Routes/index.js";
import 'dotenv/config';


const conexao = await connectDataBase();
conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!");
});

const app = express();
routes(app);

export default app;