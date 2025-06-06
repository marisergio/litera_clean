import { Router } from 'express';
import { ContainerFactory } from '../../../../app/ContainerFactory';

const router = Router();

router.post('/livros', (req, res) => ContainerFactory.getContainer().livroControle.criarLivro(req, res));
router.get('/livros', (req, res) => ContainerFactory.getContainer().livroControle.listar(res));
router.delete('/livros/:id', (req, res) => ContainerFactory.getContainer().livroControle.removerLivro(req,res));

export default router;