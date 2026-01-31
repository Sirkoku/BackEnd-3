import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerSpecs from './config/swagger.js';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect(`mongodb+srv://faucrivelli_db_user:MdQ3u6IlUcaXivdw@cluster3.szsmcyn.mongodb.net/`)
.then(() => console.log("DB connected"))
.catch(err => console.log("DB connection error: ", err));

app.use(express.json());
app.use(cookieParser());
app.use('/api/mocks',mocksRouter);
app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use("/api/docs",swaggerUi.serve,swaggerUi.setup(swaggerSpecs));

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))

export default app;
