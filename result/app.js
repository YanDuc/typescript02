define(["require", "exports", "./Charge", "jquery"], function (require, exports, Charge_1, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var villes = new Charge_1.Charge();
    var liste = villes.listeVilles;
    var option = '';
    option += "<option value=\"\">Veuillez s\u00E9lectionner une ville</option>";
    for (var _i = 0, liste_1 = liste; _i < liste_1.length; _i++) {
        var ville = liste_1[_i];
        option += "<option value=\"" + ville.id + "\">" + ville.name + "</option>";
    }
    $('select').append(option);
    $('.check').html('<i class="fas fa-check" style="color:green;"></i>');
    $('document').ready(function () {
        var selected1 = '';
        var selected2 = '';
        var selected3 = '';
        $('#select1').change(function () {
            selected1 = $("#select1").find(':selected').val();
            gettingJSON("infoselect1", selected1);
            verifCharge(selected1);
        });
        $('#select2').change(function () {
            selected2 = $("#select2").find(':selected').val();
            gettingJSON("infoselect2", selected2);
            verifCharge(selected2);
        });
        $('#select3').change(function () {
            selected3 = $("#select3").find(':selected').val();
            gettingJSON("infoselect3", selected3);
            verifCharge(selected3);
        });
        if (selected1 == '' && selected2 == '' && selected3 == '') {
            $('.check').html('<i class="fas fa-times" style="color:red;"></i>');
        }
        function verifCharge(value) {
            if (value != '') {
                $('.check').html('<i class="fas fa-check" style="color:green;"></i>');
            }
            else {
                if (selected1 == '' && selected2 == '' && selected3 == '') {
                    $('.check').html('<i class="fas fa-times" style="color:red;">');
                }
            }
        }
        function gettingJSON(select, id) {
            if (id == '') {
                $('.' + select).hide();
            }
            else {
                $('.' + select).show();
                console.log(id);
                $.getJSON("http://api.openweathermap.org/data/2.5/weather?id=" + id + "&APPID=1533c46998f95da57f222e373403b36d&units=metric&lang=fr", function (json) {
                    var image = "<img src='http://openweathermap.org/img/w/" + json.weather[0].icon + ".png' alt='icone-sky'>";
                    var timeStampAPI = new Date(json.dt);
                    var dateWeather = timeStampAPI.toLocaleDateString();
                    var speedWind = json.wind.speed;
                    var speedWindKMF = speedWind * 3.6;
                    $('.' + select + ' .villeName').html(json.name);
                    $('.' + select + ' .lon').html(json.coord.lon);
                    $('.' + select + ' .lat').html(json.coord.lat);
                    $('.' + select + ' .dernierRel').html(dateWeather);
                    $('.' + select + ' .sky').html(image);
                    $('.' + select + ' .temp').html(json.main.temp + "°C");
                    $('.' + select + ' .wind').html(speedWindKMF + " km/h");
                });
            }
        }
    });
});
