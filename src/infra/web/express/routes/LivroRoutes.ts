import { Router } from 'express';
import { controllers } from '../../../../config/composition-root';

const router = Router();

router.post('/livros', (req, res) => controllers.livroControle.criarLivro(req, res));
router.get('/livros', (req, res) => controllers.livroControle.listar(res));
router.delete('/livros/:id', (req, res) => controllers.livroControle.removerLivro(req,res));

export default router;