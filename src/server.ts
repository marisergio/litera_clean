import express from 'express';
import LivroRoutes from './infra/web/express/routes/LivroRoutes';
import { ApiExpress } from './infra/web/express/ApiExpress';

const app = new ApiExpress(LivroRoutes);
app.start(3000);
