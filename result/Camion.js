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
    var Camion = /** @class */ (function (_super) {
        __extends(Camion, _super);
        function Camion(niveauCarburant, consommation, vitesseMax, playerName) {
            var _this = _super.call(this) || this;
            _this.type = 'camion';
            _this.capaciteReservoir = 2000;
            _this.niveauCarburant = niveauCarburant;
            _this.consommation = consommation;
            _this.vitesseMax = vitesseMax;
            _this.playerName = playerName;
            return _this;
        }
        Camion.prototype.klaxone = function () {
            console.log("broubla be wap");
        };
        Camion.prototype.rouler = function () {
            _super.prototype.rouler.call(this);
            if (this._niveauCarburant <= 0) {
                this.klaxone();
            }
        };
        Camion.prototype.win = function () {
            console.log(this.playerName + " dans son Camion gagne");
        };
        return Camion;
    }(Vehicule_1.Vehicule));
    exports.Camion = Camion;
});
