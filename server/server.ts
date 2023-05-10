const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const path = './mocks/index.ts';

app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`Mock Server Listening on Port ${port}!`));
app.get('/', (req: any, res: any) => res.send('Mock Server is UP!'));