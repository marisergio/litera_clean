import { Livro } from "../../../dominio/entidades/Livro";
import { LivroRepositorio } from "../../../dominio/repositorios/LivroRepositorio";
import { CreateLivroInputDTO } from "../../dto/livro/CreateLivroInputDTO";
import { CreateLivroOutputDTO } from "../../dto/livro/CreateLivroOutputDTO";
import { ListLivroInputDTO, ListLivroOutputDTO } from "../../dto/livro/ListLivroDTO";
import { UseCase } from "../UseCase";

export class ListLivro implements UseCase<ListLivroInputDTO, ListLivroOutputDTO>{
    constructor(private readonly livroRepositorio: LivroRepositorio){}

    public async execute(inputDto: ListLivroInputDTO): Promise<ListLivroOutputDTO> {

        const livros = await this.livroRepositorio.listar()

        const outputDTO: ListLivroOutputDTO = this.presentOutput(livros)

        return outputDTO
        
    }

    private presentOutput(livros: Livro[]): ListLivroOutputDTO {
        return {
            livros: livros.map((livro) => {
                return {
                    id: livro.id,
                    titulo: livro.titulo,
                    autor: livro.autor,
                    isEmprestado: livro.isEmprestado,
                };
            }),
        };
    }
}