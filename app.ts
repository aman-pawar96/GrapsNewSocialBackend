import cors from 'cors';
import express from 'express';
import http from 'http';
import routes from './src/routes/routes';

const app = express();
const port=4000;

export const server = http.createServer(app);;

app.use(cors());
app.use(express.json());

//Routes that will redirect to APIs
app.use(routes);

server.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`App is running on port ${port}`);
});