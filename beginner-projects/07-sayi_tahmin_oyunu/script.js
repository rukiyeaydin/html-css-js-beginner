var sayi = Math.floor(Math.random()*100) + 1;
var guess_num= 0;
var array_guessed_num= [];

function game()
{
    if(document.getElementById("number").value == sayi)
    {
        document.getElementById("correct").innerHTML = "Tahminin doğru";
        document.getElementById("notcorrect").innerHTML = "";
        document.getElementById("count").innerHTML= (guess_num + 1) + " tahminde sayıyı buldun";
    }
    else
    {
        array_guessed_num.push(document.getElementById("number").value);
        guess_num += 1;

        if(document.getElementById("number").value < sayi)
        { 
            document.getElementById("notcorrect").innerHTML= "Tahminin, sayıdan düşük";
            document.getElementById("count").innerHTML= "Yapılan tahmin sayısı: "+guess_num;
            document.getElementById("past").innerHTML= "Tahmin edilen sayılar: "+array_guessed_num;
        }
        else if(document.getElementById("number").value > sayi)
        {
            document.getElementById("notcorrect").innerHTML= "Tahminin, sayıdan yüksek";
            document.getElementById("count").innerHTML= "Yapılan tahmin sayısı: "+guess_num;
            document.getElementById("past").innerHTML= "Tahmin edilen sayılar: "+array_guessed_num;
        }
    }
}