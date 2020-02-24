const http = require("http");
const express = require("express");
const status = require("http-status");
const spoilersRoute = require('./routes/spoiler');
const sequelize = require('./database/database');

const app = express();

app.use(express.json());

app.use('/api', spoilersRoute);

app.use((request, response, next) => {
    response.status(404).send("hello word!");
});

// erros desconhecidos são renderizados para o cliente atraves de uma arquivo json
app.use((error, request, response, next) => {
    response.status(500).json({ error });
});

// sync recebe um objeto como parametro, para pegar o banco de dados de acordo com o model
sequelize.sync({ force: true }).then(() => {
    const port = process.env.PORT || 3000; // pegar a porta configurada como padrão || pegar a porta 3000

    app.set("port", port);

    const server = http.createServer(app);

    server.listen(port);
});