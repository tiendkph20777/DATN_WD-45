import express from 'express';
import { createRole, getAllRole, getRoleById, removeRole, updateRole } from '../controller/role';
import { checkPermission } from '../middleware/checkPermission';

const roleRouter = express.Router();

roleRouter.post("/role/add", checkPermission, createRole)
roleRouter.get("/role", checkPermission, getAllRole)
roleRouter.get("/role/:id", checkPermission, getRoleById)
roleRouter.put("/role/:id/update", checkPermission, updateRole)
roleRouter.delete("/role/:id", checkPermission, removeRole)
export default roleRouter