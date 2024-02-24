import express from 'express';
import AuthorController from '../controllers/authorController.js';

const authorRoutes = express.Router();

authorRoutes.get('/authors', AuthorController.getAll);

authorRoutes.get('/authors/:id', AuthorController.getOne);

authorRoutes.get('/authors/:id/books', AuthorController.getBooks);

authorRoutes.post('/authors', AuthorController.add);

authorRoutes.put('/authors/:id', AuthorController.update);

authorRoutes.delete('/authors/:id', AuthorController.remove);
export default authorRoutes;