const express = require("express");
const app = express();

app.use(express.json());

app.post("/usuarios", (req, res) => {
  res.json({
    mensagem: "Usuário recebido com sucesso",
    dados: req.body,
  });
});

app.listen(3000);