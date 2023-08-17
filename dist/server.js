import express from 'express';
import path from 'path';
import { taskRouter } from './routes/task.js';
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../public/index.html');
    res.sendFile(filePath);
});
app.use('/tasks', taskRouter);
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}! `);
});
