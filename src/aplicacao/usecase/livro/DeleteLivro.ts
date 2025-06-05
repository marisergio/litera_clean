import { Livro } from "../../../dominio/entidades/Livro";
import { LivroRepositorio } from "../../../dominio/repositorios/LivroRepositorio";
import { CreateLivroInputDTO } from "../../dto/livro/CreateLivroInputDTO";
import { CreateLivroOutputDTO } from "../../dto/livro/CreateLivroOutputDTO";
import { DeleteLivroInputDTO, DeleteLivroOutputDTO } from "../../dto/livro/DeleteLivroDTO";
import { ListLivroInputDTO, ListLivroOutputDTO } from "../../dto/livro/ListLivroDTO";
import { UseCase } from "../UseCase";

export class DeleteLivro implements UseCase<DeleteLivroInputDTO, DeleteLivroOutputDTO>{
    constructor(private readonly livroRepositorio: LivroRepositorio){}

    public async execute(inputDto: DeleteLivroInputDTO): Promise<DeleteLivroOutputDTO> {

        try{
        const op = await this.livroRepositorio.remover(inputDto.id);

        const outputDTO: DeleteLivroOutputDTO = this.presentOutput(inputDto.id)

        return outputDTO
        } catch (error) {
            throw new Error(`Erro ao deletar livro: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
        }
        
    }

    private presentOutput(id: String): DeleteLivroOutputDTO {
        return {
            success: true,
            message: `Livro com ID ${id} deletado com sucesso`
        };
    }
}