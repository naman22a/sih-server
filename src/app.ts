import 'dotenv/config';
import express from 'express';

const app = express();
const port = parseInt(process.env.PORT ?? '5000', 10);

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES

// STARTING THE SERVER
app.listen(port, () => console.log(`Server running at port: ${port}`));
