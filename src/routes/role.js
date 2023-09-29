import express from 'express';
import { createRole, getAllRole, getRoleById, removeRole, updateRole } from '../controller/role';

const roleRouter = express.Router();

roleRouter.post("/role/add", createRole)
roleRouter.get("/role", getAllRole)
roleRouter.get("/role/:id", getRoleById)
roleRouter.put("/role/:id/update", updateRole)
roleRouter.delete("/role/:id", removeRole)
export default roleRouter