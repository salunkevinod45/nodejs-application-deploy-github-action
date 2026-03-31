
import express from 'express';

const app  = express();
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
    res.json({ message: 'new version is deployed using CI/CD' });
});

app.listen(PORT,'0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});