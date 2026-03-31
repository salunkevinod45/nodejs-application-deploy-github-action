
import express from 'express';

const app  = express();
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
    res.json({ message: 'latest deploy' });
});

app.listen(PORT,'0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});