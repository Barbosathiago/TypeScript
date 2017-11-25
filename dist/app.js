"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
// Passos para a instalação de dependencias JS
// 1 - Executar o node init
// 2 - Instalar os pacotes necessários utilizando node install
// 2.1 - Utilizando o parametro --save instala-se tanto no desenvolvimento quanto em produção
// 2.2 - Utilizando --save-dev instala-se apenas para o desenvolvimento
// 3 - Caso estejam disponíveis, é posssível instalar as tipagens da dependencia através do
// comando install, o padrão de instalação das tipagens geralmente é @types/suadependencia
var _ = require("lodash");
console.log(_.pad("Typescript Examples", 40, "="));
var ship = new base_ships_1.SpaceCraft('HyperDrive');
ship.jumpIntoHyperSpace();
var falcon = new starfighters_1.MilleniumFalcom();
falcon.jumpIntoHyperSpace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'Yes' : 'No'));
