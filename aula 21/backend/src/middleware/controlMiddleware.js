import { response } from "express"

export function validateRegister(req,res,next){
    const {tittulo,autor,paginas_total,paginas_lidas,status_livro,genero } = req.body
    if(!tittulo || tittulo.length <3 || tittulo.trim() == ""){
        return res.status(400).send({response: "Revise o dado tittulo"}

            
        )
    }
    if(!paginas_total || paginas_total <= 0){
        return res.status(400).send({response: "Revise o dado paginas_total"}

            
        )
    }
    if(!paginas_lidas || paginas_lidas < 0){
        return res.status(400).send({response: "Revise o dado paginas_lidas"}

            
        )
    }
    if(!autor || autor.length <3 || autor.trim() == ""){
        return res.status(400).send({response: "Revise o dado autor"}

            
        )
    }
    if(!status_livro || status_livro.length <3 || status_livro.trim() == ""){
        return res.status(400).send({response: "Revise o dado autor"}

            
        )
    }
    if(!genero || genero.length <3 || genero.trim() == ""){
        return res.status(400).send({response: "Revise o dado autor"}

            
        )
    }
    next();
}

export function validateUpdate(req,res,next){
    const { id } = req.params; 
    const {tittulo,autor,paginas_total,paginas_lidas,status_livro,genero } = req.body

    if(!tittulo || tittulo.length <3 || tittulo.trim() == ""){
        return res.status(400).send({response: "Revise o dado tittulo"}

            
        )
    }
    if(!paginas_total || paginas_total <= 0){
        return res.status(400).send({response: "Revise o dado paginas_total"}

            
        )
    }
    if(!paginas_lidas || paginas_lidas < 0){
        return res.status(400).send({response: "Revise o dado paginas_lidas"}

            
        )
    }
    if(!autor || autor.length <3 || autor.trim() == ""){
        return res.status(400).send({response: "Revise o dado autor"}

            
        )
    }
    if(!status_livro || status_livro.length <3 || status_livro.trim() == ""){
        return res.status(400).send({response: "Revise o dado autor"}

            
        )
    }
    if(!genero || genero.length <3 || genero.trim() == ""){
        return res.status(400).send({response: "Revise o dado autor"}

            
        )
    }

    if(!id || id<1){
        return res.status(400).send({response: "Revise o dado id na rota"}

            
        )
    }

    
   
        connection.query('SELECT FROM user WHERE id = ?',
            [id],
            (err, results) => {
                if(err){
                    return res.status(404).send({ response: "Este livro não foi encontrado"})
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