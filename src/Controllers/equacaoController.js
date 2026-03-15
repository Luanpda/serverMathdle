import Equacao from "../models/equacao.js";

class EquacaoController {
    static async listarEquacoes(req, res){

        try{
            const listaDeEquacoes = await Equacao.find();
            res.status(200).json(listaDeEquacoes);
        }catch(error){
            res.status(500).json({message:`${error.message} - falha na requisicao`});
        }
        
    }

    static async criarEquacao(req, res){
        try{
            const equacao = await Equacao.create(req.body);
            res.status(201).json({message: "Equação criada com sucesso!",
                equacao: equacao
            }); 
        }catch(error){
            res.status(500).json({message:`${error.message} - falha na criação`});
        }
       
    }

    static async listarEquacaoPorId(req, res){

        try{
            const id = req.params.id;
            const equacao = await Equacao.findById(id);
            res.status(200).json(equacao);
        }catch(error){
            res.status(500).json({message:`${error.message} - falha na requisicao`});
        } 
    }

    static async listarEquacaoPorDificuldade(req, res){

        try{
            const dificuldade = req.params.dificuldade;
            const equacao = await Equacao.find({dificuldade: dificuldade});
            res.status(200).json(equacao);
        }catch(error){
            res.status(500).json({message:`${error.message} - falha na requisicao`});
        } 
    }

    static async atualizarEquacao(req, res){

        try{
            const id = req.params.id;
            await Equacao.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Equação atualizada com sucesso!"});
        }catch(error){
            res.status(500).json({message:`${error.message} - falha na atualizacao`});
        } 
    }

    static async deletarEquacao(req, res){

        try{
            const id = req.params.id;
            await Equacao.findByIdAndDelete(id);
            res.status(200).json({message: "Equação deletada com sucesso!"});
        }catch(error){
            res.status(500).json({message:`${error.message} - falha na delecao`});
        } 
    }

}

export default EquacaoController;