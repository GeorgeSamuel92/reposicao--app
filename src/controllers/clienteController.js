const clienteModel = require("../models/ClienteModel");

const clienteController = {
  selecionarTodosClientes: async (req, res) => {
    try {
      const clientes = await clienteModel.selecionaTodosClientes();
      return res.json(clientes);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  selecionarUmCliente: async (req, res) => {
    try {
      const { id } = req.params;
      const cliente = await clienteModel.selectOneCliente(id);
      if (cliente.length === 0) {
        return res.status(404).json({ message: "Cliente não encontrado" });
      }
      return res.json(cliente);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  selecionarClienteNome: async (req, res) => {
    try {
      const { nome } = req.params;
      const cliente = await clienteModel.selectClienteNome(nome);
      if (cliente.length === 0) {
        return res.status(404).json({ message: "Cliente não encontrado" });
      }
      return res.json(cliente);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  adicionarCliente: async (req, res) => {
    try {
      const { nome, data_nasc, cpf } = req.body;
      const data_cad = new Date();
      const result = await clienteModel.insertCliente({
        nome,
        data_nasc,
        cpf,
        data_cad,
      });
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  alterarCliente: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, data_nasc, cpf, data_cad } = req.body;
      const result = await clienteModel.updateCliente(id, {
        nome,
        data_nasc,
        cpf,
        data_cad,
      });
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Cliente não encontrado" });
      }
      return res.json(result);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  deletarCliente: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await clienteModel.deleteCliente(id);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Cliente não encontrado" });
      }
      return res.json({ message: "Cliente deletado com sucesso" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

module.exports = clienteController;
