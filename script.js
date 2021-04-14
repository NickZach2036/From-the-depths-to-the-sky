/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function FixNavbar() {
  var navbar = document.getElementById("navbar");
  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add("sticky");
  }
  else {
    navbar.classList.remove("sticky");
  }
}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
function SetImageSize() {
  document.getElementById("loading").innerHTML="From the depths to the sky";
  if (window.outerWidth > window.outerHeight) {
    document.getElementById("round1").style.height="60%";
    document.getElementById("round2").style.height="60%";
    document.getElementById("round3").style.height="60%";
    document.getElementById("round4").style.height="60%";
    document.getElementById("map1").style.height="60%";
    document.getElementById("map2").style.height="60%";
    document.getElementById("map3").style.height="60%";
    document.getElementById("map4").style.height="60%";
    document.getElementById("map5").style.height="60%";
    document.getElementById("map6").style.height="60%";
    document.getElementById("map7").style.height="60%";
    document.getElementById("map8").style.height="60%";
    document.getElementById("map9").style.height="60%";
    document.getElementById("round1").style.width="";
    document.getElementById("round2").style.width="";
    document.getElementById("round3").style.width="";
    document.getElementById("round4").style.width="";
    document.getElementById("map1").style.width="";
    document.getElementById("map2").style.width="";
    document.getElementById("map3").style.width="";
    document.getElementById("map4").style.width="";
    document.getElementById("map5").style.width="";
    document.getElementById("map6").style.width="";
    document.getElementById("map7").style.width="";
    document.getElementById("map8").style.width="";
    document.getElementById("map9").style.width="";
  }
  else {
    document.getElementById("round1").style.width="90%";
    document.getElementById("round2").style.width="90%";
    document.getElementById("round3").style.width="90%";
    document.getElementById("round4").style.width="90%";
    document.getElementById("map1").style.width="90%";
    document.getElementById("map2").style.width="90%";
    document.getElementById("map3").style.width="90%";
    document.getElementById("map4").style.width="90%";
    document.getElementById("map5").style.width="90%";
    document.getElementById("map6").style.width="90%";
    document.getElementById("map7").style.width="90%";
    document.getElementById("map8").style.width="90%";
    document.getElementById("map9").style.width="90%";
    document.getElementById("round1").style.height="";
    document.getElementById("round2").style.height="";
    document.getElementById("round3").style.height="";
    document.getElementById("round4").style.height="";
    document.getElementById("map1").style.height="";
    document.getElementById("map2").style.height="";
    document.getElementById("map3").style.height="";
    document.getElementById("map4").style.height="";
    document.getElementById("map5").style.height="";
    document.getElementById("map6").style.height="";
    document.getElementById("map7").style.height="";
    document.getElementById("map8").style.height="";
    document.getElementById("map9").style.height="";
  }
}
function CalculateCO2() {
  var razhod = [5.7, 4.6, 3.5, 10.4];
  razhod[2] = 1000*(razhod[2]/792.5);
  var emisions = [0.13, 0.121, 0.094, 0.169];
  var distance = document.getElementById("distance").value;
  var fuel = document.getElementById("fuel").value;
  var i = document.getElementById("fuel_type").value;
  var result = distance*(fuel/razhod[i])*emisions[i];
  result=result.toFixed(2);
  document.getElementById('ResultCO2').innerHTML='Количесвото на CO2 емисии на вашата кола през този пробег е: ' + result + ' kg';
}
function CalculateWater() {
  var sources = 25000000 + 13000000 + 250000;
  sources *= 1000000000000;
  var litters = document.getElementById("litters_per_day").value;
  var population = document.getElementById("population").value;
  var days = litters*population;
  days = sources/days;
  days = Math.floor(days);
  var years = days/365.25;
  years = Math.floor(years);
  document.getElementById('ResultWater').innerHTML='Питейната вода на света ще стигне за: ' + days + ' дни (' + years + ' години)';
}