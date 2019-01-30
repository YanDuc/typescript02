define(["require", "exports", "./Vehicule", "./Voiture", "./Moto", "./Camion", "jquery"], function (require, exports, Vehicule_1, Voiture_1, Moto_1, Camion_1, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var participants = [{ 'prenom': 'bob', 'vehicule': 'camion', 'consommation': 30, 'vitesse_max': 120, 'niveauCarburant': 1000 },
        { 'prenom': 'martine', 'vehicule': 'moto', 'consommation': 10, 'vitesse_max': 250, 'niveauCarburant': 15 },
        { 'prenom': 'jean-rené', 'vehicule': 'voiture', 'consommation': 8, 'vitesse_max': 150, 'niveauCarburant': 5 }];
    var objet = [];
    var i = 0;
    for (var _i = 0, participants_1 = participants; _i < participants_1.length; _i++) {
        var player = participants_1[_i];
        if (player.vehicule == 'voiture') {
            objet[i] = new Voiture_1.Voiture(player.niveauCarburant, player.consommation, player.vitesse_max, player.prenom);
        }
        if (player.vehicule == 'camion') {
            objet[i] = new Camion_1.Camion(player.niveauCarburant, player.consommation, player.vitesse_max, player.prenom);
        }
        if (player.vehicule == 'moto') {
            objet[i] = new Moto_1.Moto(player.niveauCarburant, player.consommation, player.vitesse_max, player.prenom);
        }
        i++;
    }
    $('.run').click(function () {
        Vehicule_1.Vehicule.nombreDeJoueurs = participants.length;
        objet[0].rouler();
        objet[1].rouler();
        objet[2].rouler();
    });
    setInterval(verifCarbu, 200);
    function verifCarbu() {
        if (objet[0].carbu == false) {
            $("." + objet[0]._type + 'pompe').show();
        }
        else {
            $(".fa-gas-pump").hide();
        }
        if (objet[1].carbu == false) {
            $("." + objet[1]._type + 'pompe').show();
        }
        else {
            $(".fa-gas-pump").hide();
        }
        if (objet[2].carbu == false) {
            $("." + objet[2]._type + 'pompe').show();
        }
        else {
            $(".fa-gas-pump").hide();
        }
        var distance0 = objet[0]._distanceParcourue;
        var distance1 = objet[1]._distanceParcourue;
        var distance2 = objet[2]._distanceParcourue;
        $("." + objet[0]._type).css({
            "margin-left": distance0 / 100 * 10 + "px"
        });
        $("." + objet[1]._type).css({
            "margin-left": distance1 / 100 * 10 + "px"
        });
        $("." + objet[2]._type).css({
            "margin-left": distance2 / 100 * 10 + "px"
        });
    }
});
