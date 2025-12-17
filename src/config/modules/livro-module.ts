import { CreateLivro } from "../../aplicacao/usecase/livro/CreateLivro";
import { DeleteLivro } from "../../aplicacao/usecase/livro/DeleteLivro";
import { ListLivro } from "../../aplicacao/usecase/livro/ListLivro";
import { LivroRepositorioMysql } from "../../infra/bd/mysql/LivroRepositorioMysql";
import { LivroRepositorioPg } from "../../infra/bd/pg/LivroRepositorioPg";
import { LivroControle } from "../../infra/web/express/controle/LivroControle";

const livroRepositorio = new LivroRepositorioMysql();

const livroRepositorioPg = new LivroRepositorioPg();

const createLivro = new CreateLivro(livroRepositorioPg);
const listLivro = new ListLivro(livroRepositorio);
const deleteLivro = new DeleteLivro(livroRepositorio);

export const livroControle = new LivroControle(
  createLivro,
  listLivro,
  deleteLivro
);
