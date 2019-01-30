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
    var Voiture = /** @class */ (function (_super) {
        __extends(Voiture, _super);
        function Voiture(niveauCarburant, consommation, vitesseMax, playerName) {
            var _this = _super.call(this) || this;
            _this.type = 'voiture';
            _this.capaciteReservoir = 120;
            _this.niveauCarburant = niveauCarburant;
            _this.consommation = consommation;
            _this.vitesseMax = vitesseMax;
            _this.playerName = playerName;
            return _this;
        }
        Voiture.prototype.klaxone = function () {
            console.log("pipidou poinpoin");
        };
        Voiture.prototype.rouler = function () {
            _super.prototype.rouler.call(this);
            if (this._niveauCarburant <= 0) {
                this.klaxone();
            }
        };
        Voiture.prototype.win = function () {
            console.log(this.playerName + " dans sa voiture gagne");
        };
        return Voiture;
    }(Vehicule_1.Vehicule));
    exports.Voiture = Voiture;
});
