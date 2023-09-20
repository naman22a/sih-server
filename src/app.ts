import express from 'express';

const app = express();
const port = 5000;

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES

// STARTING THE SERVER
app.listen(port, () => console.log(`Server running at port: ${port}`));
