import express from 'express';
const router = express.Router();
router.get('/', (req, res) => {
    res.send('Tasks! dsad sa dsa');
});
export { router as taskRouter };
