
import express from 'express';

const app  = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.json({ message: 'Vinod is a smart and genius' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});