import { CreateLivro } from "../../aplicacao/usecase/livro/CreateLivro";
import { DeleteLivro } from "../../aplicacao/usecase/livro/DeleteLivro";
import { ListLivro } from "../../aplicacao/usecase/livro/ListLivro";
import { LivroRepositorioMysql } from "../../infra/bd/mysql/LivroRepositorioMysql";
import { LivroControle } from "../../infra/web/express/controle/LivroControle";

const livroRepositorio = new LivroRepositorioMysql;

const createLivro = new CreateLivro(livroRepositorio);
const listLivro = new ListLivro(livroRepositorio);
const deleteLivro = new DeleteLivro(livroRepositorio);

export const livroControle = new LivroControle(
  createLivro,
  listLivro,
  deleteLivro
);
