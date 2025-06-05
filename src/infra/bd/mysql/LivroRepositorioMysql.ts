import { RowDataPacket } from "mysql2";
import { Livro, LivroProps } from "../../../dominio/entidades/Livro";
import { LivroRepositorio } from "../../../dominio/repositorios/LivroRepositorio";
import { conexao } from "./MysqlConexao"

export class LivroRepositorioMysql implements LivroRepositorio {

    public async buscarPorId(id: string): Promise<Livro | null> {
        try {
            const [[result]] = await conexao.query<LivroProps & RowDataPacket[]>("SELECT * FROM livro WHERE id=?", [id])
            if (!result) {
                return null
            }
            const { titulo, autor, editora, ano, isEmprestado } = result

            const livro = Livro.fromPersistence({ id, titulo, autor, editora, ano, isEmprestado })
            return livro
        } catch (error) {
            throw error
        }
    }

    async listar(): Promise<Livro[]> {
        const [rows] = await conexao.query<LivroProps[] & RowDataPacket[]>("SELECT * FROM livros");
        if (Array.isArray(rows)) {
            return rows.map(row => {
                const { id, titulo, autor, editora, ano, isEmprestado } = row
                return Livro.fromPersistence({ id, titulo, autor, editora, ano, isEmprestado })
            });
        }
        return [];
    }

    async salvar(livro: Livro): Promise<void> {
        try {
            await conexao.query(
                "INSERT INTO livros (id, titulo, autor, editora, ano_lancamento, is_emprestado) VALUES (?, ?, ?, ?, ?, ?)",
                [livro.id, livro.titulo, livro.autor, livro.editora, livro.ano, livro.isEmprestado]
            );
        } catch (error) {
            console.log(error)
            throw Error("Erro ao salvar o livro: " + livro.titulo)
        }
    }

    async remover(id: string): Promise<boolean> {
        try {
            await conexao.query("DELETE FROM livros WHERE id = ?", [id]);
            return true;
        } catch (error) {
            console.log(error)
            throw Error("Erro ao deletar o livro: " + id)
        }
    }

    async atualizar(livro: Livro): Promise<void> {
        await conexao.query(
            "UPDATE livros SET titulo = ?, autor = ?, ano = ? WHERE id = ?",
            [livro.titulo, livro.autor, livro.ano, livro.id]
        );
    }
}