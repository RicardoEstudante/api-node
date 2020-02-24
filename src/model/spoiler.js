// importanto o modulo Sequelize e as configurações realizadas no database/database
const Sequelize = require('sequelize');
const sequelize = require('../database/database');


// define descreve como o model deve ser mapeado para uma tabela no bd e vice-versa
// dois parametros, primeiro String para nomear a tabela, segundo um Obj com instruções de com a tabela deve ser criada;

const Spoiler = sequelize.define("spoiler", {
    id: {
        allowNull: false, // não pode ser falso
        autoIncrement: true, // se auto-imcrementa
        primaryKey: true, // chave - primaria da tabela
        type: Sequelize.INTEGER // tipo inteiro
      },
      titulo: {
        allowNull: false, // pode ser nullo
        type: Sequelize.STRING(255),
        validate: {
          len: [2, 255] // pode conter de 2 até 255 caracteres
        }
      },
      espoliador: {
        allowNull: false,
        type: Sequelize.STRING(40),
        validate: {
          len: [2, 40]
        }
      },
      descricao: {
        allowNull: false,
        type: Sequelize.STRING(255),
        validate: {
          len: [2, 255]
        }
      }
});

module.exports = Spoiler; //  exportando o Spoiler