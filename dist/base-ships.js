"use strict";
exports.__esModule = true;
// Definição de uma classe
var SpaceCraft = (function () {
    function SpaceCraft(propulsor) {
        this.propulsor = propulsor;
    } // Declaração de atributos minimizada
    SpaceCraft.prototype.jumpIntoHyperSpace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return SpaceCraft;
}());
exports.SpaceCraft = SpaceCraft;
