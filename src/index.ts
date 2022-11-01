import express, { Express, Request, Response } from "express";

const server: Express = express();
server.use(express.json())

server.get('/api/v1/animals', (req: Request, res: Response) => {
    res.json({mensagem: 'Olá'});
})

server.post('/api/v1/animals', (req: Request, res: Response) => {
    const dados = req.body;

    res.json({
        "especie": dados.especie,
        "raca": dados.raca,
        "idade": dados.idade,
        "peso": dados.peso
    })
})

server.listen(3000, () => {
    console.log('Inicializado');
})