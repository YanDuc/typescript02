// Créer un attribut statique "nombre de joueurs" dans la classe véhicule.
// Créer un attribut statique "joueurs ayant fini" dans la classe véhicule.
// Créer une méthode statique dans la classe véhicule qui va déterminer la fin de la course est afficher un message de félicitation aux joueurs.
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Vehicule = /** @class */ (function () {
        function Vehicule() {
            this.authorizedVehicules = ['moto', 'voiture', 'camion'];
            this.errorVehicule = true;
            this._distanceParcourue = 0;
            this.carbu = false;
            this._distanceAParcourir = 10000;
        }
        Object.defineProperty(Vehicule.prototype, "consommation", {
            get: function () {
                return this._consommation;
            },
            set: function (consommation) {
                this._consommation = consommation;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vehicule.prototype, "distanceParcourue", {
            get: function () {
                return this._distanceParcourue;
            },
            set: function (distanceParcourue) {
                this._distanceParcourue = distanceParcourue;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vehicule.prototype, "playerName", {
            get: function () {
                return this._playerName;
            },
            set: function (playerName) {
                this._playerName = playerName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vehicule.prototype, "vitesseMax", {
            get: function () {
                return this._vitesseMax;
            },
            set: function (vitesseMax) {
                this._vitesseMax = vitesseMax;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vehicule.prototype, "type", {
            get: function () {
                return this._type;
            },
            set: function (type) {
                if (this.authorizedVehicules.indexOf(type) != -1) {
                    this._type = type;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vehicule.prototype, "capaciteReservoir", {
            get: function () {
                return this._capaciteReservoir;
            },
            set: function (capReservoir) {
                this._capaciteReservoir = capReservoir;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vehicule.prototype, "niveauCarburant", {
            get: function () {
                return this._niveauCarburant;
            },
            set: function (niveauCarburant) {
                this._niveauCarburant = niveauCarburant;
            },
            enumerable: true,
            configurable: true
        });
        Vehicule.prototype.mettreDuCarburant = function () {
            var _this = this;
            if (this._niveauCarburant + 10 < this._capaciteReservoir) {
                this.carbu = false;
                this._niveauCarburant += 10;
                setTimeout(function () {
                    _this.mettreDuCarburant();
                }, 300);
            }
            else {
                this.carbu = true;
                this._niveauCarburant = this._capaciteReservoir;
                this.rouler();
            }
        };
        Vehicule.prototype.rouler = function () {
            var _this = this;
            if (Vehicule.joueursAyantFini < Vehicule.nombreDeJoueurs) {
                if (this._niveauCarburant - this._consommation <= 0) {
                    this._niveauCarburant = 0;
                    //this.carbu = false;
                    setTimeout(function () {
                        _this.mettreDuCarburant();
                    }, 2000);
                }
                else {
                    this._niveauCarburant -= this._consommation;
                    this._distanceParcourue += this._vitesseMax;
                    if (this._distanceParcourue >= this._distanceAParcourir) {
                        Vehicule.theWinnerIs = this._type;
                        Vehicule._hasWin = true;
                        Vehicule.joueursAyantFini += 1;
                        if (Vehicule.joueursAyantFini == 1) {
                            console.log(this._playerName + " WIN !!!");
                        }
                        else {
                            console.log(this._playerName + " est en " + Vehicule.joueursAyantFini + "eme position");
                        }
                        //this.klaxonne();
                    }
                    else {
                        setTimeout(function () {
                            _this.rouler();
                        }, 50);
                    }
                }
            }
            else {
                console.log('la course est finie');
            }
        };
        Vehicule.prototype.endOfCourse = function () {
            console.log();
        };
        // klaxonne(){
        //
        // }
        Vehicule.prototype.affiche_type = function () {
            console.log(this._type);
        };
        Vehicule._hasWin = false;
        Vehicule.theWinnerIs = '';
        Vehicule.joueursAyantFini = 0;
        return Vehicule;
    }());
    exports.Vehicule = Vehicule;
});
