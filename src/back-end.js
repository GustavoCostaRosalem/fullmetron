const sqlite3 = require("sqlite3").verbose();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const bcrypt = require("bcrypt");

const corsOptions = {
  origin: "http://127.0.0.1:5500", // Certifique-se de que a origem esteja correta
  methods: ["GET", "POST", "DELETE"],
  allowedHeaders: ["Content-Type"],
};

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});


app.use(cors(corsOptions));

app.use(bodyParser.json());

// Conectar ao banco de dados SQLite
const db = new sqlite3.Database("./dbcgbr.db", (err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err.message);
  } else {
    console.log("Conectado ao banco de dados!");
  }
});