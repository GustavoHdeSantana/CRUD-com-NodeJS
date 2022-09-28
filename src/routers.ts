import express from "express";
import TurmaControllers from "./controllers/TurmaControllers";
import UserControllers from "./controllers/UserControllers";

const router = express.Router();


router.post("/users", UserControllers.create);
router.get("/users", UserControllers.findALL); // select all
router.get("/users/:userId", UserControllers.findONE); // select for id
router.get("/users-turmas/:id", UserControllers.findALLUsersbyTurma);
router.put("/users/:userId", UserControllers.update);
router.delete("/users/:userId", UserControllers.destroy);

router.post("/turmas", TurmaControllers.create);
router.get("/turmas", TurmaControllers.findALL);
router.get("/turmas/:turmaId", TurmaControllers.findONE);
router.put("/turmas/:turmaId", TurmaControllers.update);
router.delete("/turmas/:turmaId", TurmaControllers.destroy);

export { router };




