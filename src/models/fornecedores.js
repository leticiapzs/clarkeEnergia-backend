import mongoose from "mongoose";

const fornecedoresSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    logo: {type: String, required: true},
    estadoOrigem: {type: String, required: true},
    custoKwh: {type: String, required: true},
    limiteMinKwh: {type: String, required: true},
    numeroClientes: {type: String, required: true},
    avaliacaoMedia: {type: String, required: true},
}, {versionKey: false});

const fornecedores = mongoose.model("fornecedores", fornecedoresSchema);

export default fornecedores;