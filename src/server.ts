import express from 'express';
import LivroRoutes from './infra/web/express/routes/LivroRoutes';

const app = express();
app.use(express.json());

app.use('/api', LivroRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
