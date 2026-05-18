import { connection } from "../database/db.js";

export const getPeople = (req, res) => {
    const users = connection.query('SELECT * FROM user', (err, results) => {
        if(err){
            return res.status(500).send({response: "Ocorreu algum erro"})
        }
        return res.status(200).send(results)
    })
}
//test
export const createUser = (req, res) => {
    const { name,email,password } = req.body;
    try{
        connection.query('INSERT INTO user (name,email,pasword) VALUES (?,?,?)', 
            [name,email,password],
            (err,results) =>{
                if(err){
                    return res.status(500).send({response: "ocorreu um erro"})
                }
            }
        )
        return res.status(201).send({ response: "Usuário registrado!"})
    }
    catch{
        return res.status(500).send({ response: "Erro"})
    }
}

export const updateUser = (req, res) => {

    const { id } = req.params; 
    const { name, email, password } = req.body;


    connection.query(
        'UPDATE user SET name = ?, email = ?, password = ? WHERE id = ?;', 
        [ name, email, password, id],
        (err, results) => {

            if (err) {
                console.error(err); 
                return res.status(500).send({ response: "Ocorreu um erro no banco de dados." });
            }

            return res.status(200).send({ response: "Usuário atualizado com sucesso!" });
        }
    );
};
export const deleteUser = (req, res) => {

    const { id } = req.params;


    connection.query(
        'DELETE FROM user WHERE id = ?;', 
        id,
        (err, results) => {

            if (err) {
                console.error(err); 
                return res.status(500).send({ response: "Ocorreu um erro no banco de dados." });
            }

            return res.status(200).send({ response: "Usuário deletado com sucesso!" });
        }
    );
};