function kiinnostus()
{  
    document.getElementById("tulostusAlue").innerHTML="";
var kinostuksenTaso= document.getElementById("kiinnostuksen_taso").value;
var luova =document.getElementById("luovuus").value;
var tulos ="";

if (kinostuksenTaso <= 10 && luova <= 10){
tulos = "Pidä tauko";
}
else if (kinostuksenTaso <=5 && luova <=5){
   tulos = "STOP!";
}
else {
    tulos = "Oletko ihan varma?";

}
document.getElementById("tulostusAlue").innerHTML = tulos;
}