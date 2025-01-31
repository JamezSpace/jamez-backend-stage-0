import express, { Express, Request, Response } from 'express';
import cors, { CorsOptions } from 'cors';
import router from './routes/index';

const app: Express = express()

const cors_option: CorsOptions = {
    origin: "*",
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}

app.use(cors(cors_option))
app.use('/api', router)

app.use((_req:Request, res:Response) => {
    res.status(404).send('Route Not Found');
})

app.listen(4200, () => {
    console.log(`Server Running on port 4200`)
})