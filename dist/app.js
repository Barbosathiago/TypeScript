var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Definição de uma classe
var SpaceCraft = /** @class */ (function () {
    function SpaceCraft(propulsor) {
        this.propulsor = propulsor;
    } // Declaração de atributos minimizada
    SpaceCraft.prototype.jumpIntoHyperSpace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return SpaceCraft;
}());
var ship = new SpaceCraft('HyperDrive');
ship.jumpIntoHyperSpace();
// Implementação de herança e interface
var MilleniumFalcom = /** @class */ (function (_super) {
    __extends(MilleniumFalcom, _super);
    function MilleniumFalcom() {
        var _this = _super.call(this, 'HyperDrive') || this;
        _this.cargoContainers = 4;
        return _this;
    }
    MilleniumFalcom.prototype.jumpIntoHyperSpace = function () {
        return Math.random() >= 0.5 ? _super.prototype.jumpIntoHyperSpace.call(this) : console.log('Failed to jump into hyperspace :(');
    };
    return MilleniumFalcom;
}(SpaceCraft));
var falcon = new MilleniumFalcom();
falcon.jumpIntoHyperSpace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'Yes' : 'No'));
