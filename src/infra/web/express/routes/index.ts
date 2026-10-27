
import { Router } from "express";

import LivroRoutes from "./LivroRoutes.js";

const router = Router();

router.use(LivroRoutes);

export default router;
