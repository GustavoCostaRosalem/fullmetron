const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const UserController = require("../controllers/usercontrolers"); // Importando o controller
const userRoutes = require("../routes/userRoutes")
const app = express();


const corsOptions = {


  origin: "http://127.0.0.1:5500", // Certifique-se de que a origem esteja correta
  methods: ["GET", "POST", "DELETE"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
// app.use("/user", userRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send({
    message: 'erro detectado',
    error: err.message || 'erro desconhecido '
  })
})

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

