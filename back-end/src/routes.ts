

import { Router } from "express";
import ProfessorController from "./Controllers/ProfessorController";

const professorController = new ProfessorController()

const router = Router()

router.get("/professor", professorController.getAll)
router.get("/professor/login", professorController.getLoginPage)
router.get("/professor/boletim", professorController.getBoletimPage)
router.get("/professor/editar", professorController.getEditarPerfilPage)
router.get("/professor/portugues", professorController.getPortuguesPage)
router.get("/professor/ciencias", professorController.getCienciasPage)
router.get("/professor/geografia", professorController.getGeografiaPage)
router.get("/professor/historia", professorController.getHistoriaPage)
router.get("/professor/ingles", professorController.getInglesPage)
router.get("/professor/matematica", professorController.getMatematicaPage)
router.post("/professor", professorController.create)
router.post("/professor/login", professorController.login)
router.put("/professor/:id_professor", professorController.update)

export default router