function hesapla(){
    document.getElementById("kilo_value").textContent = parseInt(document.getElementById("kilo").value) + " kg";
    document.getElementById("boy_value").textContent = parseInt(document.getElementById("boy").value) + " cm";

    var k = parseInt(document.getElementById("kilo").value);
    var b = parseInt(document.getElementById("boy").value);

    var vki = (k / Math.pow(( b /100),2)).toFixed(1);
    document.getElementById("index").textContent = vki;

    if(vki < 18.5)
    {
        yaz = "zayıf";
        document.getElementById("index").style.color = "yellow";
    }
    else if(vki >= 18.5 && vki < 24.9)
    {
        yaz = "normal";
        document.getElementById("index").style.color = "#00ff40";
    }
    else if(vki >= 25 && vki < 29.9)
    {
        yaz = "fazla kilolu"
        document.getElementById("index").style.color = "orange";
    }
    else{
        yaz = "obez";
        document.getElementById("index").style.color = "red";
    }

    document.getElementById("metin").textContent = yaz;

}