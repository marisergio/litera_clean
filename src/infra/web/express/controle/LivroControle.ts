import { Request, Response } from "express";
import { CreateLivro } from "../../../../aplicacao/usecase/livro/CreateLivro";
import { ListLivro } from "../../../../aplicacao/usecase/livro/ListLivro";
import { DeleteLivro } from "../../../../aplicacao/usecase/livro/DeleteLivro";

export class LivroControle {
    constructor(private createLivro: CreateLivro, private listLivro: ListLivro, private deleteLivro: DeleteLivro){}

    public async criarLivro(req: Request, res: Response) {
        try {
            const { titulo, autor, editora, ano } = req.body;
            const livro = await this.createLivro.execute({ titulo, autor, editora, ano });
            res.status(201).json({data: livro.id, message: "Livro criado com sucesso!"});
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    public async listar(res: Response){
        try{ 
            const livros = await this.listLivro.execute()
            res.status(200).json(livros);
        }catch (error){
            res.status(500).json({ error: 'Internal server error' })
        }
    }

    public async removerLivro(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const result = await this.deleteLivro.execute({ id });
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}