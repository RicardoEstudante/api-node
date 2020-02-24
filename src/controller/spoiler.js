const Spoiler = require("../model/spoiler");


// pergando o parametro id na URL e armazenando na const id;
exports.buscarUm = (request, response, next) => {
    const id = request.params.id;

    Spoiler.findById(id)
    .then(spoiler => {
        if (spoiler) {
            response.send(spoiler);
        }else {
            response.status(404).send();

        }
    })
    .catch(error => next(error));
};