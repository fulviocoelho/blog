console.log('Iniciando constantes...');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const fs = require('fs');
const { json } = require('express');
app.use(cors({origin: '*'}));
app.use(express.json());

console.log('Setando requests...');
app.get('/api/config', (req, res) => {
    const fs = require('fs');
    fs.readFile('./json/blog_config.json', 'utf-8', (err, data) => {
        if(err){
            console.log(`Erro ao ler arquivo blog_config.json para responder a requisição /post => ${err}`);
            return
        }
        res.send(data);
    });
});app.get('/api/post/:page', (req, res) => {
    const fs = require('fs');
    fs.readFile('./json/galeria.json', 'utf-8', (err, data) => {
        if(err){
            console.log(`Erro ao ler arquivo textos.json para responder a requisição /post => ${err}`);
            return
        }
        res.header("Access-Control-Allow-Origin", "*");
        var json = JSON.parse(data);
        var textos = json.textos.slice((9*(req.params.page-1)),(9*req.params.page));
        json.pages = Math.ceil((Object.keys(json.textos).length / 9));
        json.textos = textos;
        res.send(json);
    });
});
app.get('/api/post/article/:id', (req, res) => {
    fs.readFile(`./json/textos/${req.params.id}.json`, 'utf-8', (err, data) => {
        if(err){
            console.log(`Erro ao ler arquivo textos.json para responder a requisição /post => ${err}`);
            return res.status(400).send({message: err});
        }
        res.header("Access-Control-Allow-Origin", "*");
        var json = JSON.parse(data);
        json.id = req.params.id;
        res.send(json);
    });
});
app.get('/api/key', (req, res) => {
    const {v4: uuidv4} = require('uuid');
    res.send(uuidv4());
});
app.post('/api/comment', (req, res) => {
    console.log(req.body);
    fs.readFile(`./json/textos/${req.body.postid}.json`, 'utf-8', (err, data) => {
        if(err){
            console.log(`Erro ao ler arquivo textos.json para responder a requisição /post => ${err}`);
            return
        }
        var json = JSON.parse(data);
        const novoComentario = {
            usuario: req.body.usuario,
            comentario: req.body.coment
        }
        json.comentarios = [...json.comentarios, novoComentario];
        fs.writeFile(`./json/textos/${req.body.postid}.json`, JSON.stringify(json), function (err) {
            if (err) throw err;
          });
    });
    res.send("sucesso");
});

console.log('Começando a ouvir...');
app.listen(port, () => {
    console.log(`Ouvindo na porta ${port}...`);
})