var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./Vehicule"], function (require, exports, Vehicule_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Moto = /** @class */ (function (_super) {
        __extends(Moto, _super);
        function Moto(niveauCarburant, consommation, vitesseMax, playerName) {
            var _this = _super.call(this) || this;
            _this.type = 'moto';
            _this.capaciteReservoir = 60;
            _this.niveauCarburant = niveauCarburant;
            _this.consommation = consommation;
            _this.vitesseMax = vitesseMax;
            _this.playerName = playerName;
            return _this;
        }
        Moto.prototype.klaxone = function () {
            console.log("wapadou wap yep");
        };
        Moto.prototype.rouler = function () {
            _super.prototype.rouler.call(this);
            if (this._niveauCarburant <= 0) {
                this.klaxone();
            }
        };
        Moto.prototype.win = function () {
            console.log(this.playerName + " dans sa moto gagne");
        };
        return Moto;
    }(Vehicule_1.Vehicule));
    exports.Moto = Moto;
});
