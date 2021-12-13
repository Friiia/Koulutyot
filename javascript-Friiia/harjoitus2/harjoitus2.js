function yhteenlasku (x,y){
    var summa = x+y;
    console.log("summa on " + summa);
}

yhteenlasku (55,22);
yhteenlasku (4,7.5)
yhteenlasku (6, -9)

function vahennyslasku(z,d){
var vahennys = z-d;
console.log("vähennys on " + vahennys)
}

vahennyslasku(8,2);
vahennyslasku(5,4.5);
vahennyslasku(5,-2);

function jakolasku(a,s){
var jako = a/s;
    console.log("jakolaskun tulos on " + jako);
}

jakolasku(50,2);
jakolasku(55,27.5);
jakolasku(30,15);

function kertolasku(q,w){
var kerto = q*w;
    console.log("kertolaskun tulos on " + kerto);
}
kertolasku (2,4);
kertolasku(5,6);
kertolasku(7,5);


//Tehtävä 1

//Merkkijonojen yhdistäminen
console.log("\n Tehtävä 1")

function merkkijono(nimi){

    console.log("Hei " + nimi + " mitä kuuluu?")
}

merkkijono("Elsi");
merkkijono("Pulli");

//Tehtävä 2 Neliöön korottaminen
console.log("\n Tehtävä 2")
function nelio2(luku){
var potenssi2;
potenssi2 = luku**2;
return potenssi2;
}
    console.log(nelio2(3));
    console.log(nelio2(31));

//Tehtävä 3 Täysi-ikäisyyden tarkistaminen//!
console.log("\n Tehtävä 3")
function ika(luku){
    if (luku >= 18){
        console.log("Täysi-ikäinen")
}
    else if (luku < 18){
        console.log("Ala-ikäinen")
    }
}
    ika(12);
    ika(56);
    ika(18);


    //Tehtävä 4 Suurempi luku
    
 console.log("\nTehtävä 4");

 function Suurempi(a , b){
    if (a > b){
        console.log("luvuista " + a + " ja " + b + " luku " + a + " on suurempi");
    }
    else if (a < b){
        console.log("luvuista " + a + " ja " + b + " luku " + b + " on suurempi");
    }
    else
    {
        console.log("Luvut ovat yhtä suuria");
 }
 }
Suurempi (3, 4);
Suurempi(2,2);
Suurempi(4,7);


//Tehtävä 5 Kolmion pinta-ala
console.log("\n Tehtävä 5");
function pinta(kanta,korkeus){
    var ala = kanta * korkeus / 2;
console.log(ala);
    var pyorista = Math.round (ala * 10)/10;
console.log(pyorista);
}

pinta(5.2,17.8);
pinta(4.2,7.7);
pinta(9.6,4.5);

//Tehtävä 6  Osamäärä

console.log("\n Tehtävä 6");
function osa(jaettava, jakaja){
    if(jakaja == 0){
        console.log("nollalla ei voi jakaa!");
}
else {
    {console.log(jaettava/jakaja);
}
}}
osa(4.7,2.5);
osa(4.8,3.9);
osa(9.6,0);

//Tehtävä 7 Robotin värianalyysi
console.log("\n Tehtävä 7");
function robotti (aallonpituus){
    let vari = ""
if(aallonpituus  >= 380 && aallonpituus < 450){
    vari = "violetti";}
else if(aallonpituus >= 450 && aallonpituus < 490){
    vari = " sininen";}
else if(aallonpituus >=490 && aallonpituus < 560){
    vari = "vihrea";
}
else if(aallonpituus >=560 && aallonpituus < 590){
    vari ="keltainen";
}
else if(aallonpituus >=590 && aallonpituus < 630){
    vari ="oranssi"
}
else if(aallonpituus >=630 && aallonpituus < 760 ){
    vari = "punainen"
}
else {
    vari="null";
}
return vari;
}
console.log(robotti(300))
console.log(robotti(450))
console.log(robotti(630))

//Tehtävä 8 Taksimatka
console.log("\n Tehtävä 8");

function taksimatka (maara,km){
let aloitusmaksu = 5.4;
let km_hinta= 0;
    if (maara >=1 && maara <=2){
        km_hinta = 1.6;

}
    else if(maara >= 3 && maara <=4){
        km_hinta= 1.9;
}
    else if(maara >= 5 && maara <=6 ){
        km_hinta = 2.0;
}
    else if(maara > 6 && maara <= 10 ){
        km_hinta = 2.2;
}
    else {
        km_hinta="tarkista arvot";
}

hinta = km_hinta * km +aloitusmaksu;
    return hinta;
}
    console.log(taksimatka(2,10));
    console.log(taksimatka(4,3.5));
    console.log(taksimatka(5,7));
    console.log(taksimatka(7,12));
    console.log(taksimatka(12,8));


//Tehtävä 9 Pyöristys
console.log("\n Tehtävä 9")
function pyoristys(x){
    var pyoristys_pos = Math.floor(x + 0.5);
    var pyoristys_neg = Math.ceil(x- 0.5);

    if(x > 0){
        return pyoristys_pos;
    }
    else if (x < 0){
        return pyoristys_neg;
}
    else{
        return "Tarkista luvut";
}
}
    console.log(pyoristys(4.7));
    console.log(pyoristys(0.7));
    console.log(pyoristys(-8.2));
    console.log(pyoristys(0.0));

//Tehtävä 10 Tuotteen hinta
console.log("\n Tehtävä 10");
//alennuksen lasku
function hintaLasku(hinta,alv){
    var alennus =0;
    if (hinta >= 100 && hinta < 200 ){
        alennus = 0.95;
    }
    else if (hinta >= 200 && hinta < 500){
        alennus = 0.9;
    }
    else if (hinta >= 500){
        alennus = 0.85;
    }
    else { 
        return  "Tarkista hinta";

    }

    //alennettuHinta
    alennettuHinta = hinta * alennus; //alennettuHinta
    kokonaisHinta =alennettuHinta*alv; // hinta alennuksen ja alvin kanssa
    return kokonaisHinta;
}

    console.log(hintaLasku(100,1.19))
    console.log(hintaLasku(150,1.24))
    console.log(hintaLasku(-260,1.19))


