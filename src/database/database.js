// importamdo o modulo do sequelize
const Sequilize = require('sequelize');


// verifica se a variável de ambiente node_env existe, para carregar as informações da conexão com o banco de dados
// caso não exista, considerar as informações contidas na propriedade development do módulo /src/config/config
const enviroment = process.env.NODE_ENV || 'development';

const config = require('../config/config.js')[enviroment];


// Construtor passando 3 parametros para credenciar a conexão com o banco de dados
// e um objeto de opções onde se informa o endereço da conexão (host) e o SGDB que será usado (dialect)
const sequelize = new Sequilize(
    config.database.name,
    config.database.user,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect
    }
);