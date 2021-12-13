//Tehtävä 1 Matemaattiset operaatiot ja muuttujat
console.log("\n Tehtävä1")

var x = 100;
var y = 20;
   

var summa = x+y;
    
var erotus = x-y;
    
var tulo = x*y;
  
var osamaara = x%y;
  
var jakojaannos = x/y;
  
    console.log("luvut ovat " + x + " ja " + y + "\n" + " Summa on " + summa + "\n" + "Erotus on " + erotus + "\n" + 
    "Tulo on " + tulo + "\n" + "Osamäärä on " + osamaara +"\n" + "Jakojäännös on " + jakojaannos )
//Tehtävä 2 Matemaattiset operaatiot funktioina

function operaatiot_funktioina(x,y){
    console.log("\n Tehtävä 2")
    var summa = x+y;
    var erotus = x-y;
    var tulo = x*y;
    var osamaara = x%y;
    var jako = x/y;
    var vastaus = "Luvut ovat "+ x + " ja " + y + "\n" + "Summa on " + summa + "\n" + "Erotus on " + erotus + "\n" + "Tulo on " + tulo + 
    "\n"+"Osamäärä on " + osamaara + "\n" + "Jakojäännös on " + jako;
    return vastaus
}
        console.log(operaatiot_funktioina(2,5))
        console.log(operaatiot_funktioina(40,20))
        console.log(operaatiot_funktioina(100,45))

//Tehtävä 3 Toistorakenne
console.log("\n Tehtävä 3")
let i;
for (i=10; i >= 1; i--){
    if (i%2==1){
        console.log(i);
    }
}

//Tehtävä 4 Ympyrän piiri, säde, pinta-ala
console.log("\n Tehtävä 4")
function ympyra(halkaisija){
    var sade = halkaisija/2;
    var sade2 = "Ympyrän säde on " + Math.round(sade);
    var pii = Math.PI
    var piiri = 2 * pii * sade;
    var piiri2 = "\nympyrän piiri on " + Math.round(piiri);
    var ala = pii *sade **2;
    var ala2 = "\nYmpyrän ala on " + Math.round(ala);
    var vastaus =  sade2 + piiri2 + ala2 + "\n";
    return vastaus
}
console.log(ympyra(20));
console.log(ympyra(4.5));

//Tehtävä 5 tilikauden tulos
    console.log("\n Tehtävä 5")
function tilikausi(tuotto,kulut){
    var tulos = tuotto-kulut

if(tulos > 0){
    console.log ("Tuotto ollut " + tulos + " tilikausi ollut voitollinen")
    }
    else if (tulos < 0){
    console.log("Tuotto ollut " + tulos + " tilikausi ollut tappiollinen")
    }
    else if (tulos == 0){
    console.log("nollatulos")
    }
}
tilikausi(4000,1000);
tilikausi(1000,3000);
tilikausi(20000,3000);
tilikausi(0,1000);
tilikausi(2000,0);
tilikausi(300,300);

//Tehtävä 6 nelilaskin
console.log("\n Tehtävä 6")
function laskin(luku1, luku2, op){
switch (op) {
case "yhteenlasku":
    console.log(luku1 + "+" +  luku2 + "=" + (luku1+luku2));
break;
case "vahennyslasku":
    console.log(luku1 + "-" + luku2 + "=" + (luku1-luku2));
break;
case "kertolasku":
    console.log(luku1 + "*" + luku2 + "=" + (luku1*luku2));
break
case "jakolasku":
    console.log(luku1 + "/" + luku2 + "=" + (luku1/luku2));
}
}
laskin(5,10,"yhteenlasku");
laskin(12,4,"vähennyslasku");
laskin(6,12,"kertolasku");
laskin(54,8,"jakolasku");

//Tehtävä 7 Suurempi luku switch
console.log("\n Tehtävä 7");
function suurempiKuin(a,b){
switch(true){
    case a > b:
    console.log("luvuista " + a + " ja " + b + " luku " + a + " on suurempi");
    break;
    case a < b:
      console.log("luvuista " + a + " ja " + b + " luku " + b + " on suurempi");
    break;
    case a == b:
    console.log("annetuista luvuista ne ovat yhtä suuret");
    break;
    default:
    return 0;
    }
}
suurempiKuin(5,7);
suurempiKuin(8,7);
suurempiKuin(34,5);
suurempiKuin(34,-3.4);

//Tehtävä 8 Tuumat senteiksi
console.log("\n Tehtävä 8");
function Tuumatsentteina(tuumat){
    lasku = 2.54*tuumat;
    return tuumat + " tuumaa" + " on " + Math.round(lasku*100)/100 + " senttimetreinä" 
}
console.log(Tuumatsentteina(5));
console.log(Tuumatsentteina(3.4));
console.log(Tuumatsentteina(9.3));


//Tehtävä 9 On välissä
console.log("\n Tehtävä 9")

function onValissa(luku){

if(luku >= 0 && luku <= 10){
   return true;
}
else {
    return false
}
}
console.log(onValissa(11));
console.log(onValissa(-5));
console.log(onValissa(7));
console.log(onValissa(10));

//Tehtävä 10: Valuuttalaskin
console.log("\n Tehtävä 10")
function valuuttaLaskin (eurot, valuuttakurssi){
    let palvelumaksu = 5.4;
    hinta = eurot * valuuttakurssi - palvelumaksu;
        return "käyttäjällä on valuuttaa " + eurot +" euroa, " + "valuuttakurssi on " + valuuttakurssi +", Käyttäjä saa " + hinta + " valuuttaa";
}
        console.log(valuuttaLaskin(2,10));
        console.log(valuuttaLaskin(4,3.5));
        console.log(valuuttaLaskin(5,7));
        console.log(valuuttaLaskin(7,12));
        console.log(valuuttaLaskin(12,8));


//Tehtävä 11: Farenheit
console.log("\n Tehtävä 11")
function lampotila(celcius){
    var farenheit;
    farenheit = celcius * 1.8 *32;
    return celcius + " celciusta on " + farenheit + " farenheitteina";
}

console.log(lampotila(12));
console.log(lampotila(43));
console.log(lampotila(100));


//Tehtävä 12 Suurin kolmesta

console.log("\n Tehtävä 12")

function suurempiKolmesta(ekaluku,tokaluku,kolmasluku){
    if (ekaluku > tokaluku){
        if (ekaluku > kolmasluku){
            return ("Suurin luku on " + ekaluku);
        }
    }
    if ( tokaluku > ekaluku){
        if (tokaluku > kolmasluku){
            return ("suurin luku on " + tokaluku);
        }
    }
    if (kolmasluku > ekaluku){
        if (kolmasluku > tokaluku){
            return ("suurin luku on " + kolmasluku);
        }
    }

    return ("Try again");

}
console.log(suurempiKolmesta(400,7,28));
console.log(suurempiKolmesta(7,5,32));
console.log(suurempiKolmesta(-3.4,56,4));
console.log(suurempiKolmesta(1,1,1));
console.log(suurempiKolmesta(9,1,1))

//Tehtävä 13 Suuruusjärjestys
console.log("\n Tehtävä 13")
function suuruusJarjestys(luku_1,luku_2,luku_3){
    var vastaus =""
    switch(true){
    case luku_1 > luku_2 && luku_1 > luku_3:
    vastaus = "luvuista " + luku_1 + " , "  + luku_2 + " , " + luku_3 + ", "  + luku_1 + " on suurin"
       return vastaus;
    case luku_1 < luku_2 && luku_3 < luku_2:
        vastaus = "luvuista " + luku_1 + " , " +  luku_2 + " , " + luku_3 + ", " + luku_2 + " on suurin"
        return vastaus;
        case luku_1 < luku_3 && luku_2 < luku_3:
        vastaus = "luvuista " + luku_1 + " , " + luku_2+ " , " + luku_3 + ", " + luku_3 + " on suurin"
        return vastaus;
    default:
             return "Tarkista luvut"
    }
}
console.log(suuruusJarjestys(45,7,9));
console.log(suuruusJarjestys(4,67,89));
console.log(suuruusJarjestys(6,88,12));
console.log(suuruusJarjestys("lol", "ei", 3))
console.log(suuruusJarjestys(34,34,34))