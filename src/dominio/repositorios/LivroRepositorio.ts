import { Livro } from "../entidades/Livro";

export interface LivroRepositorio {
    buscarPorId(id: string): Promise<Livro | null>;
    listar(): Promise<Livro[]>;
    salvar(livro: Livro): Promise<void>;
    remover(id: string): Promise<void>;
    atualizar(livro: Livro): Promise<void>;
}