import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './app.routes';
import { connectDB } from './db/connectDB';
import errorHandler from './common/middlewares/errorHandler';
import { wrapAsync } from './common/middlewares/wrapAsync';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(cors());

app.use('/isAlive', (req, res) => {
    return res.status(200).send('server is alive and well');
});
app.use('/api', routes);

app.use(errorHandler);

process
    .on('unhandledRejection', (reason, p) => {
        console.error('Unhandled Rejection at Promise');
    })
    .on('uncaughtException', (err) => {
        console.error('Uncaught Exception thrown');
    });

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
