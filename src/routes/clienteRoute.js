const express = require("express");
const router = express.Router();

const clienteController = require("../controllers/clienteController");

router.get("/clientes", clienteController.selecionarTodosClientes);
router.get("/clientes/id/:id", clienteController.selecionarUmCliente);
router.get("/clientes/nome/:nome", clienteController.selecionarClienteNome);
router.post("/clientes", clienteController.adicionarCliente);
router.put("/clientes/:id", clienteController.alterarCliente);
router.delete("/clientes/:id", clienteController.deletarCliente);

module.exports = router;
