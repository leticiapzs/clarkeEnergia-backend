import FornecedoresController from '../controllers/FornecedoresController';
import fornecedores from '../models/fornecedores';

jest.mock('../models/fornecedores');

describe('FornecedoresController', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve retornar 200 e listar fornecedores quando o consumo válido for fornecido', async () => {
    const fornecedoresData = [
      {
        nome: 'Fornecedor 1',
        limiteMinKwh: 100,
        custoKwh: 0.5,
      },
      {
        nome: 'Fornecedor 2',
        limiteMinKwh: 200,
        custoKwh: 0.6,
      },
    ];

    fornecedores.find.mockResolvedValue(fornecedoresData);

    const request = {
      query: { consumo: '150' },
    };

    const reply = {
      code: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await FornecedoresController.listarFornecedores(request, reply);

    expect(fornecedores.find).toHaveBeenCalledWith({
      limiteMinKwh: { $lte: 150 },
    });
    expect(reply.code).toHaveBeenCalledWith(200);
    expect(reply.send).toHaveBeenCalledWith(fornecedoresData);
  });

  it('deve retornar 400 se o consumo for inválido', async () => {
    const request = {
      query: { consumo: '0' },
    };

    const reply = {
      code: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await FornecedoresController.listarFornecedores(request, reply);

    expect(reply.code).toHaveBeenCalledWith(400);
    expect(reply.send).toHaveBeenCalledWith({
      error: 'Consumo inválido. Deve ser um número maior que 0.',
    });
  });

  it('deve retornar 404 se nenhum fornecedor for encontrado', async () => {
    fornecedores.find.mockResolvedValue([]);

    const request = {
      query: { consumo: '150' },
    };

    const reply = {
      code: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await FornecedoresController.listarFornecedores(request, reply);

    expect(reply.code).toHaveBeenCalledWith(404);
    expect(reply.send).toHaveBeenCalledWith({
      message: 'Nenhum fornecedor encontrado para o consumo informado.',
    });
  });

  it('deve retornar 500 se ocorrer um erro no servidor', async () => {
    fornecedores.find.mockRejectedValue(new Error('Erro no banco de dados'));

    const request = {
      query: { consumo: '150' },
    };

    const reply = {
      code: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await FornecedoresController.listarFornecedores(request, reply);

    expect(reply.code).toHaveBeenCalledWith(500);
    expect(reply.send).toHaveBeenCalledWith({
      error: 'Erro ao listar fornecedores.',
    });
  });
});
