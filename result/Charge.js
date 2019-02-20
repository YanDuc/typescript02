define(["require", "exports", "./Villes"], function (require, exports, Villes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Charge = /** @class */ (function () {
        function Charge() {
            var listevilles = new Villes_1.Villes();
            this.listeVilles = listevilles.listeVilles();
        }
        return Charge;
    }());
    exports.Charge = Charge;
});
