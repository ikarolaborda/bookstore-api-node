import express from 'express';
import BookController from '../controllers/bookController.js';

const bookRoutes = express.Router();

bookRoutes.get('/books', BookController.getAll);

bookRoutes.get('/books/:id', BookController.getOne);

bookRoutes.post('/books', BookController.add);

bookRoutes.put('/books/:id', BookController.update);

bookRoutes.delete('/books/:id', BookController.remove);
export default bookRoutes;