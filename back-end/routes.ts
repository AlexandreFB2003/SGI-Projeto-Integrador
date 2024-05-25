import Router from "express";
import ProfessorController from "./src/Controllers/ProfessorController";
import AlunosController from "./src/Controllers/AlunosController";

const router = Router()
const professorController = new ProfessorController()
const alunosController = new AlunosController()

router.get("/", )

router.post("/professor", professorController.add)
router.put("/professor/:id", professorController.update)

router.get("/alunos", alunosController.getAll)
router.get("/alunos/:id", alunosController.getByID)
router.post("/alunos", alunosController.add)
router.put("/alunos/:id", alunosController.update)
router.delete("/alunos/:id", alunosController.delete)


export default router