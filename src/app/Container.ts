
import { CreateLivro } from '../aplicacao/usecase/livro/CreateLivro';
import { DeleteLivro } from '../aplicacao/usecase/livro/DeleteLivro';
import { ListLivro } from '../aplicacao/usecase/livro/ListLivro';
import { LivroRepositorioMysql } from '../infra/bd/mysql/LivroRepositorioMysql';
import { LivroControle } from '../infra/web/express/controle/LivroControle';


export class Container {

    public get livroControle(): LivroControle{
        const livroRepo = new LivroRepositorioMysql();
        const createLivro = new CreateLivro(livroRepo);
        const listLivro = new ListLivro(livroRepo);
        const deleteLivro = new DeleteLivro(livroRepo);
        const livroControle = new LivroControle(createLivro, listLivro, deleteLivro);
        return livroControle
    }

    

}
