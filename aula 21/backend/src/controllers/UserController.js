import { connection } from "../database/db.js";

export const getlivro = (req, res) => {
    const users = connection.query('SELECT * FROM livros', (err, results) => {
        if(err){
            return res.status(500).send({response: "Ocorreu algum erro"})
        }
        return res.status(200).send(results)
    })
}
//test
export const createlivro = (req, res) => {
    const {tittulo,autor,paginas_total,paginas_lidas,status_livro,genero} = req.body
    try{
        connection.query('INSERT INTO livros (tittulo,autor,paginas_total,paginas_lidas,status_livro,genero) VALUES (?,?,?,?,?)', 
            [tittulo,autor,paginas_total,paginas_lidas,status_livro,genero],
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

export const updatelivro = (req, res) => {

    const { id } = req.params; 
    const {tittulo,autor,paginas_total,paginas_lidas,status_livro,genero } = req.body


    connection.query(
        'UPDATE livro SET tittulo=?,autor=?,paginas_total=?,paginas_lidas=?,status_livro=?,genero=?;', 
        [ tittulo,autor,paginas_total,paginas_lidas,status_livro,genero],
        (err, results) => {

            if (err) {
                console.error(err); 
                return res.status(500).send({ response: "Ocorreu um erro no banco de dados." });
            }

            return res.status(200).send({ response: "Peça atualizado com sucesso!" });
        }
    );
};
export const deletelivro = (req, res) => {

    const { id } = req.params;


    connection.query(
        'DELETE FROM livro WHERE id = ?;', 
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