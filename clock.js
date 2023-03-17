let fullName = prompt("Lütfen adınızı giriniz: ")
let myName = document.getElementById("myName") 

myName.innerHTML = `${fullName}`

function saatigoster(){
    let zaman= new Date();
    let saat= zaman.getHours();
    let dakika= zaman.getMinutes();
    let saniye= zaman.getSeconds();
    saat=ciftsifirmi(saat);
    dakika=ciftsifirmi(dakika);
    saniye=ciftsifirmi(saniye);
    let gun = zaman.getDay();
    let gunler=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    
    document.getElementById('clock').innerHTML = saat + ":" + dakika + ":" + saniye + " "+ gunler[gun];
    setTimeout('saatigoster()', 1000);
    }
    function ciftsifirmi(deger){
    if (deger<10){
    deger="0" + deger;
    }
    return deger;
    }
    window.onload=saatigoster;
