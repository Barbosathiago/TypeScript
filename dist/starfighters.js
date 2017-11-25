"use strict";
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
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
// Implementação de herança e interface
var MilleniumFalcom = (function (_super) {
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
}(base_ships_1.SpaceCraft));
exports.MilleniumFalcom = MilleniumFalcom;
