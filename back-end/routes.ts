

import { Router } from "express";
import ProfessorController from "./src/Controllers/ProfessorController";

const professorController = new ProfessorController()

const router = Router()

router.get("/professor", professorController.get)
router.post("/professor", professorController.add)
router.put("/professor/:id_professor", professorController.update)

export default router