import express from "express";
import EquacaoController from "../Controllers/equacaoController.js";

const routes = express.Router();

routes.get("/equacoes", EquacaoController.listarEquacoes);
routes.get("/equacoes/:id", EquacaoController.listarEquacaoPorId);
routes.post("/equacoes", EquacaoController.criarEquacao);
routes.put("/equacoes/:id", EquacaoController.atualizarEquacao);
routes.delete("/equacoes/:id", EquacaoController.deletarEquacao);

export default routes;