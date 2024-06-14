const { connection } = require("../config/db");
const Cliente = require("../models/Cliente");

const clienteModel = {
  selecionaTodosClientes: async () => {
    try {
      const conn = await connection();
      const [rows] = await conn.query("SELECT * FROM tbl_cliente;");
      return rows.map((row) => Cliente.fromDatabase(row));
    } catch (error) {
      throw error;
    }
  },

  selectOneCliente: async (id) => {
    try {
      const conn = await connection();
      const sql = "SELECT * FROM tbl_cliente WHERE id=?;";
      const [rows] = await conn.query(sql, [id]);
      return rows.map((row) => Cliente.fromDatabase(row));
    } catch (error) {
      throw error;
    }
  },

  selectClienteNome: async (nome) => {
    try {
      const conn = await connection();
      const sql = "SELECT * FROM tbl_cliente WHERE nome=?;";
      const [rows] = await conn.query(sql, [nome]);
      return rows.map((row) => Cliente.fromDatabase(row));
    } catch (error) {
      throw error;
    }
  },

  insertCliente: async (cliente) => {
    try {
      const conn = await connection();
      const sql =
        "INSERT INTO tbl_cliente (nome, data_nasc, cpf, data_cad) VALUES (?, ?, ?, ?);";
      const values = [
        cliente.nome,
        cliente.data_nasc,
        cliente.cpf,
        cliente.data_cad,
      ];
      return await conn.query(sql, values);
    } catch (error) {
      throw error;
    }
  },

  updateCliente: async (id, cliente) => {
    try {
      const conn = await connection();
      const sql =
        "UPDATE tbl_cliente SET nome=?, data_nasc=?, cpf=?, data_cad=? WHERE id=?;";
      const values = [
        cliente.nome,
        cliente.data_nasc,
        cliente.cpf,
        cliente.data_cad,
        id,
      ];
      return await conn.query(sql, values);
    } catch (error) {
      throw error;
    }
  },

  deleteCliente: async (id) => {
    try {
      const conn = await connection();
      const sql = "DELETE FROM tbl_cliente WHERE id=?;";
      return await conn.query(sql, [id]);
    } catch (error) {
      throw error;
    }
  },
};

module.exports = clienteModel;
