import express, { Express, Request, Response } from "express";

const server: Express = express();
server.use(express.json())

type User = {
    especie: string,
    raca: string,
    idade: number,
    peso: number
}

const listUsers: User[] = [];

server.get('/api/v1/animals', (req: Request, res: Response) => {
    res.json(listUsers);
})

server.post('/api/v1/animals', (req: Request, res: Response) => {
    const {especie, raca, idade, peso} = req.body;
    const newUser: User = {
        especie,
        raca,
        idade,
        peso
    }

    listUsers.push(newUser);
    res.json(listUsers);
})

server.listen(3000, () => {
    console.log('Inicializado');
})