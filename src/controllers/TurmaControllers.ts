import { Request, Response } from "express";
import { TurmaModel } from "../database/models/TurmaModel";

class TurmaControler {
  async findALL(req: Request,res: Response) {
    const turmas = await TurmaModel.findAll()
    return turmas.length > 0
    ?res.status(200).json(turmas)
    :res.status(204).send();
  }

  async findONE(req: Request,res: Response) {
    const {turmaId} = req.params;
    const turma = await TurmaModel.findOne({
      where: {
        id: turmaId,
      },
    });
    return turma ? res.status(200).json(turma)
    : res.status(204).send();
  }

  async create(req: Request,res: Response) {
    const {nome} = req.body;
    const turma = await TurmaModel.create({
      nome
    });
    return res.status(201).json(turma);
  }

  async update(req: Request,res: Response) {
    const { turmaId } = req.params;
    await TurmaModel.update(req.body, {where: {id: turmaId} });
    return res.status(204).send();
  }

  async destroy(req: Request,res: Response) {
    const { turmaId } = req.params;
    await TurmaModel.destroy({where: {id: turmaId} });
    return res.status(204).send();
  }
};

export default new TurmaControler();