import { Request, Response } from "express";
import { TurmaModel } from "../database/models/TurmaModel";
import { UserModel } from "../database/models/UserModel";

class UserControler {
  async findALL(req: Request,res: Response) {
    const users = await UserModel.findAll();
    return users.length > 0
    ?res.status(200).json(users)
    : res.status(204).send();
  }

  async findALLUsersbyTurma(req: Request,res: Response) {
    const {id} = req.params;
    const users = await UserModel.findAll({
      where: {
        idturma: id
      }
    });
    return users.length > 0
    ?res.status(200).json(users)
    : res.status(204).send();
  }

  async findONE(req: Request,res: Response) {
    const {userId} = req.params;
    const user:any = await UserModel.findOne({
      where: {
        id: userId,
      },
    });
    const turma = await TurmaModel.findOne({
      where: {
        id: user.idturma
      }
    })
    user.idturma = turma
    return user ? res.status(200).json(user)
    : res.status(204).send();
  }

  async create(req: Request,res: Response) {
    const {email, nome, idade, idturma} = req.body;
    const user = await UserModel.create({
      email,
      nome,
      idade,
      idturma
    });
    return res.status(201).json(user);
  }

  async update(req: Request,res: Response) {
    const { userId } = req.params;
    await UserModel.update(req.body, {where: {id: userId} });
    return res.status(204).send();
  }

  async destroy(req: Request,res: Response) {
    const { userId } = req.params;
    await UserModel.destroy({where: {id: userId} });
    return res.status(204).send();
  }
};

export default new UserControler();