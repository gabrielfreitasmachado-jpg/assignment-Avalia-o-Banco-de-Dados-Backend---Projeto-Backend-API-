
import express from "express";

const app = express();

app.use(express.json());

let usuario = [];

app.get('/usuarios', (req, res) => {
    const nomeBusca = req.query.nome;

    if (nomeBusca) {
        const nomes = usuario.filter((i) => {
            return i.nome &&
                i.nome.toLowerCase() === nomeBusca.toLowerCase();
        });

        return res.status(200).json(nomes);
    }

    res.status(200).json(usuario);
});

app.post('/usuarios', (req, res) => {
    if (!req.body.nome || typeof req.body.nome !== "string") {
        return res.status(400).json({
            mensagem: "Informe um nome válido"
        });
    }

    usuario.push(req.body);

    res.status(201).json({
        mensagem: "Cliente Cadastrado"
    });
});

app.listen(3000, () => {
    console.log("Servidor Rodando!");
});
