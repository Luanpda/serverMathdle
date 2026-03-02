import mongoose from "mongoose";


const equacaoSchema = new mongoose.Schema({
    id:{type: mongoose.Types.ObjectId},
    equacao:{type: Array, required: true}
}, {versionKey: false});

const Equacao = mongoose.model('dados', equacaoSchema);




export default Equacao;