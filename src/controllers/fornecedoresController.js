import fornecedores from "../models/fornecedores.js";

class FornecedoresController {
    static async listarFornecedores(req, res) {
        const consumo = parseInt(req.query.consumo);

        if (isNaN(consumo) || consumo <= 0) {
            return res.status(400).json({ error: "Consumo inválido. Deve ser um número maior que 0." });
        }

        try {
            const fornecedoresFiltrados = await fornecedores.find({
                limiteMinKwh: { $lte: consumo }
            });

            if (fornecedoresFiltrados.length === 0) {
                return res.status(404).json({ message: "Nenhum fornecedor encontrado para o consumo informado." });
            }

            res.status(200).json(fornecedoresFiltrados);
        } catch (err) {
            res.status(500).json({ error: "Erro ao listar fornecedores." });
        }
    }
}

export default FornecedoresController;