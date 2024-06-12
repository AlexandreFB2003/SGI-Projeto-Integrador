

import { Router } from "express";
import ProfessorController from "./Controllers/ProfessorController";

const professorController = new ProfessorController()

const router = Router()

router.get("/professor", professorController.getAll)
router.get("/professor/login", professorController.getLoginPage)
router.get("/professor/boletim", professorController.getBoletimPage)
router.post("/professor", professorController.create)
router.post("/professor/login", professorController.login)
router.put("/professor/:id_professor", professorController.update)

export default router