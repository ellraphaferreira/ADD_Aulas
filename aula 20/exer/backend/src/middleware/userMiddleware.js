import { response } from "express"

export function validateRegister(req,res,next){
    const {nome_peca,codigo_peca,fornecedor,quantidade,preco_unitario } = req.body
    if(!nome_peca || nome_peca.length <3 || nome_peca.trim() == ""){
        return res.status(400).send({response: "Revise o dado nome_peca"}

            
        )
    }
    if(!codigo_peca || codigo_peca.length <3 || codigo_peca <= 0 || codigo_peca.trim() == ""){
        return res.status(400).send({response: "Revise o dado codigo_peca"}

            
        )
    }
    if(!fornecedor || fornecedor.length <3 || fornecedor.trim() == ""){
        return res.status(400).send({response: "Revise o dado fornecedor"}

            
        )
    }
    if(!quantidade || quantidade.length <3 || quantidade == 0){
        return res.status(400).send({response: "Revise o dado quantidade"}

            
        )
    }
    if(!preco_unitario || preco_unitario.length <3 || preco_unitario <= 0){
        return res.status(400).send({response: "Revise o dado preco_unitario"}

            
        )
    }
    next();
}

export function validateUpdate(req,res,next){
    const { id } = req.params; 
    const {nome_peca,codigo_peca,fornecedor,quantidade,preco_unitario } = req.body

    if(!id || id.length <1 || id.trim() == ""||  id<1){
        return res.status(400).send({response: "Revise o dado id na rota"}

            
        )
    }

    if(!nome_peca || nome_peca.length <3 || nome_peca.trim() == ""){
        return res.status(400).send({response: "Revise o dado nome_peca"}

            
        )
    }
    if(!codigo_peca || codigo_peca.length <3 || codigo_peca <= 0 || codigo_peca.trim() == ""){
        return res.status(400).send({response: "Revise o dado codigo_peca"}

            
        )
    }
    if(!fornecedor || fornecedor.length <3 || fornecedor.trim() == ""){
        return res.status(400).send({response: "Revise o dado fornecedor"}

            
        )
    }
    if(!quantidade || quantidade.length <3 || quantidade == 0){
        return res.status(400).send({response: "Revise o dado quantidade"}

            
        )
    }
    if(!preco_unitario || preco_unitario.length <3 || preco_unitario <= 0){
        return res.status(400).send({response: "Revise o dado preco_unitario"}

            
        )
    }
   
        connection.query('SELECT FROM user WHERE id = ?',
            [id],
            (err, results) => {
                if(err){
                    return res.status(404).send({ response: "Este usuário não foi encontrado"})
                }
    
                if(results){
                    next();
                }
            }
        )
    

}

export function validateDelete(req, res, next) {
    const { id } = req.params;

    if (id === undefined ||id === null ||String(id).trim() === "" ||  id<1) {
        return res.status(400).send({
            response: "Revise o dado id na rota"
        });
    }

    next();
}

export function validateGetbyid(req, res, next) {
    const { id } = req.params;

    if (id === undefined ||id === null ||String(id).trim() === "" ||  id<1) {
        return res.status(400).send({
            response: "Revise o dado id na rota"
        });
    }

    next();
}