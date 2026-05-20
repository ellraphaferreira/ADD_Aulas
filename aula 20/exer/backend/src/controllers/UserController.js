import { connection } from "../database/db.js";

export const getPecas = (req, res) => {
    const users = connection.query('SELECT * FROM pecas', (err, results) => {
        if(err){
            return res.status(500).send({response: "Ocorreu algum erro"})
        }
        return res.status(200).send(results)
    })
}
//test
export const createPeca = (req, res) => {
    const { nome_peca,codigo_peca,fornecedor,quantidade,preco_unitario } = req.body;
    try{
        connection.query('INSERT INTO pecas (nome_peca,codigo_peca,fornecedor,quantidade,preco_unitario) VALUES (?,?,?,?,?)', 
            [nome_peca,codigo_peca,fornecedor,quantidade,preco_unitario],
            (err,results) =>{
                if(err){
                    return res.status(500).send({response: "ocorreu um erro"})
                }
            }
        )
        return res.status(201).send({ response: "Peça registrado!"})
    }
    catch{
        return res.status(500).send({ response: "Erro"})
    }
}

export const updatePeca = (req, res) => {

    const { id } = req.params; 
    const {nome_peca,codigo_peca,fornecedor,quantidade,preco_unitario } = req.body;


    connection.query(
        'UPDATE user SET nome_peca = ?, codigo_peca = ?, fornecedor = ?, quantidade = ?, quantidade = ?;', 
        [ nome_peca,codigo_peca,fornecedor,quantidade,quantidade],
        (err, results) => {

            if (err) {
                console.error(err); 
                return res.status(500).send({ response: "Ocorreu um erro no banco de dados." });
            }

            return res.status(200).send({ response: "Peça atualizado com sucesso!" });
        }
    );
};
export const deletePeca = (req, res) => {

    const { id } = req.params;


    connection.query(
        'DELETE FROM pecas WHERE id = ?;', 
        id,
        (err, results) => {

            if (err) {
                console.error(err); 
                return res.status(500).send({ response: "Ocorreu um erro no banco de dados." });
            }

            return res.status(200).send({ response: "Peça deletado com sucesso!" });
        }
    );
};