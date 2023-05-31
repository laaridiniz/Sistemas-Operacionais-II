import AppDataSource from "../data-source";
import { Request, Response } from 'express';
import { Aluno } from "../entities/Aluno";

class AlunoController {

    public async getHistoricAluno (req: Request, res: Response) : Promise<Response> {
        const alunoRepository = AppDataSource.getRepository(Aluno)
        const allAluno = await alunoRepository.find()
        console.log(allAluno)
        return res.json(allAluno)
    }

    public async getAluno (req: Request, res: Response) : Promise<Response> {
        const idAluno:any = req.params.uuid
        const alunoRepository = AppDataSource.getRepository(Aluno)
        const allAluno = await alunoRepository.findOneBy({id: idAluno})
        return res.json(allAluno)
    }

    public async postAluno (req: Request, res: Response) : Promise<Response> {
        const createAluno = req.body
        const alunoRepository = AppDataSource.getRepository(Aluno)
        const insertAluno = new Aluno();
        insertAluno.nome = createAluno.nome
        insertAluno.email = createAluno.email
        insertAluno.curso = createAluno.curso
     
        const allAluno = await alunoRepository.save(insertAluno)
        return res.json(allAluno)
    }

    public async putAluno (req: Request, res: Response) : Promise<Response> {
        const createAluno = req.body
        const idAluno:any = req.params.uuid
        const alunoRepository = AppDataSource.getRepository(Aluno)
        const findAluno = await alunoRepository.findOneBy({id: idAluno})
        findAluno.nome = createAluno.nome
        findAluno.email = createAluno.email
        findAluno.curso = createAluno.curso
        const allAluno = await alunoRepository.save(findAluno)
        return res.json(allAluno)
    }

    public async deleteAluno (req: Request, res: Response) : Promise<Response> {
        const idAluno:any = req.params.uuid
        const alunoRepository = AppDataSource.getRepository(Aluno)
        const findAluno = await alunoRepository.findOneBy({id: idAluno})
        const allAluno = await alunoRepository.remove(findAluno)
        return res.json(allAluno)
    }

}
export default new AlunoController();