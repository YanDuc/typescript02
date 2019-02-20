import {Villes} from "./Villes";
import {Charge} from "./Charge";
import * as $ from "jquery";


  let villes = new Charge();
  let liste = villes.listeVilles;
  let option ='';
  option += `<option value="">Veuillez sélectionner une ville</option>`;
  for(let ville of liste){
    option += `<option value="${ville.id}">${ville.name}</option>`;
  }
  $('select').append(option);
  $('.check').html('<i class="fas fa-check" style="color:green;"></i>')



$('document').ready(function() {
  let selected1:any = '';
  let selected2:any = '';
  let selected3:any = '';
  $('#select1').change(function() {
    selected1 = $("#select1").find(':selected').val();
    gettingJSON("infoselect1",selected1);
    verifCharge(selected1);
  });
  $('#select2').change(function() {
    selected2 = $("#select2").find(':selected').val();  
    gettingJSON("infoselect2",selected2);
    verifCharge(selected2);
  });
  $('#select3').change(function() {
    selected3 = $("#select3").find(':selected').val();
    gettingJSON("infoselect3",selected3);
    verifCharge(selected3);
  });
  if(selected1 == '' && selected2 == '' && selected3 == ''){
    $('.check').html('<i class="fas fa-times" style="color:red;"></i>')
  }

  function verifCharge(value){
    if(value != ''){
      $('.check').html('<i class="fas fa-check" style="color:green;"></i>')
    } else {
      if(selected1 == '' && selected2 == '' && selected3 ==''){
        $('.check').html('<i class="fas fa-times" style="color:red;">')
      }
    }
  }

  function gettingJSON(select, id){
    if(id == ''){
      $('.'+select).hide();
    } else {
      $('.'+select).show();
      console.log(id);
      $.getJSON("http://api.openweathermap.org/data/2.5/weather?id="+id+"&APPID=1533c46998f95da57f222e373403b36d&units=metric&lang=fr",function(json){   
        let image = `<img src='http://openweathermap.org/img/w/${json.weather[0].icon}.png' alt='icone-sky'>`
        let timeStampAPI = new Date(json.dt);
        let dateWeather = timeStampAPI.toLocaleDateString();   
        let speedWind: number =  json.wind.speed;
        let speedWindKMF = speedWind*3.6;
        $('.'+select+' .villeName').html(json.name);
        $('.'+select+' .lon').html(json.coord.lon);
        $('.'+select+' .lat').html(json.coord.lat);
        $('.'+select+' .dernierRel').html(dateWeather);
        $('.'+select+' .sky').html(image);
        $('.'+select+' .temp').html(json.main.temp+"°C");
        $('.'+select+' .wind').html(speedWindKMF+" km/h");
      });
    }
  }
});
