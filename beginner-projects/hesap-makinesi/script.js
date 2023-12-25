const input = document.querySelector(".input");
const butonlar = document.querySelectorAll("button");
const karakterler = ["%", "*", "/", "-", "+", "="];

let sonuc = "";

const hesapla = (deger) => {
  input.focus();
  if (deger === "=" && sonuc !== "") {
    sonuc = eval(sonuc.replace("%", "/100"));
  } 
  else if (deger === "AC") {
    sonuc = "";
  } 
  else if (deger === "DEL") {
    sonuc = sonuc.toString().slice(0, -1);
  } 
  else {
    if (sonuc === "" && karakterler.includes(deger)) return;
    sonuc += deger;
  }
  input.value = sonuc;
};

//Add event listener to buttons, call calculate() on click.
butonlar.forEach((button) => {
  button.addEventListener("click", (e) => hesapla(e.target.dataset.value));
});