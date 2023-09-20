import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const port = parseInt(process.env.PORT ?? '5000', 10);

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: '*' }));

// ROUTES

// STARTING THE SERVER
app.listen(port, () => console.log(`Server running at port: ${port}`));
