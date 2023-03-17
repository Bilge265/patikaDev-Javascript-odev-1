let fullName = prompt("Lütfen adınızı giriniz: ")
let myName = document.getElementById("myName") 

myName.innerHTML = `${fullName}`

function saatigoster(){
    var zaman= new Date();
    var saat= zaman.getHours();
    var dakika= zaman.getMinutes();
    var saniye= zaman.getSeconds();

    saat=ciftsifirmi(saat);
    dakika=ciftsifirmi(dakika);
    saniye=ciftsifirmi(saniye);
    document.getElementById('clock').innerHTML = saat + ":" + dakika + ":" + saniye;
    setTimeout('saatigoster()', 1000);
    }
    function ciftsifirmi(deger){
    if (deger<10){
    deger="0" + deger;
    }
    return deger;
    }
    window.onload=saatigoster;
