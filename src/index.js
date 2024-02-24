import express from 'express';
import routes from "./routes/index.js";
import database from './config/database.js';
const db = await database();

db.on('error', console.error.bind(console, 'connection error:'));



const app = express();
routes(app);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000/');
});

app.get('/', (req, res) => {
    res.send('Hello, from Bookstore!');
});


export default app;
