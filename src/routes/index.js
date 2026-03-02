import express from "express";
import equacoes from "./equacaoRoutes.js";


const routes = (app) => { 
    app.route("/").get((req, res) => res.status(200).send({titulo: "API do Mathdle"}));

    app.use(express.json(),equacoes);

}

export default routes;
