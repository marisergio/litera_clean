import { Livro } from "../../../dominio/entidades/Livro";
import { LivroRepositorio } from "../../../dominio/repositorios/LivroRepositorio";
import { CreateLivroInputDTO } from "../../dto/livro/CreateLivroInputDTO";
import { CreateLivroOutputDTO } from "../../dto/livro/CreateLivroOutputDTO";
import { UseCase } from "../UseCase";

export class CreateLivro implements UseCase<CreateLivroInputDTO, CreateLivroOutputDTO>{
    constructor(private readonly livroRepositorio: LivroRepositorio){}

    public async execute(inputDto: CreateLivroInputDTO): Promise<CreateLivroOutputDTO> {

        const livro = Livro.create(inputDto.titulo, inputDto.autor, inputDto.editora, inputDto.ano);
        await this.livroRepositorio.salvar(livro)

        const outputDTO: CreateLivroOutputDTO = {id: livro.id}

        return outputDTO
        
    }
}