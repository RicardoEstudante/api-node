const http = require("http");
const express = require("express");
const spoilersRoute = require('./routes/spoiler');
const sequelize = require('./database/database')

const app = express();

const hostname = "127.0.0.1";
const port = 3000;

app.set("port", port);

app.use(express.json());

app.use('/api', spoilersRoute);

app.use((request, response, next) => {
    response.status(404).send("hello word!");
})

// erros desconhecidos são renderizados para o cliente atraves de uma arquivo json
app.use((error, request, response, next) =>{
    response.status(500).json({ error });
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Servidor em execução em http://${hostname}:${port}/`);
});
