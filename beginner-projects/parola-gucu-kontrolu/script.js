const input = document.querySelector(".input");
const hide = document.querySelector("#eye");

input.type = "password";

hide.addEventListener("click", () => {
    if (input.type === "password") 
    {
        input.type = "text";
        hide.classList.replace("fa-eye-slash", "fa-eye");
    } else {
        input.type = "password";
        hide.classList.replace("fa-eye", "fa-eye-slash");
    }
});

let alfabe = /[a-zA-Z]/;
let numara = /[0-9]/;
let karakter = /[!\@#\$%\^&\*\?\(\)\-+=<>]/;

const test = document.querySelector(".text");
const paraf = document.querySelector(".paraf")

// keyup event = herhangi bir key girilirse aktifleşir.
input.addEventListener("keyup", () => {
    test.classList.add("aktif");

    if(input.value == ""){
        test.classList.remove("aktif");
        document.querySelector(".password").style.border = "2px solid gray";
        document.querySelector("#eye").style.color = "gray";
    }

    // zayif
    if(input.value.match(alfabe) || input.value.match(numara) || input.value.match(karakter))
    {
        paraf.textContent = "Zayıf parola";
        document.querySelector("#dikkat").style.color = "red";
        document.querySelector(".paraf").style.color = "red";
        document.querySelector("#eye").style.color = "red";
        document.querySelector(".password").style.border = "2px solid red";
    }

    // medium
    if(input.value.match(alfabe) && input.value.match(numara) && input.value.length >= 8)
    {
        paraf.textContent = "Kısment zayıf parola";
        document.querySelector("#dikkat").style.color = "orange";
        document.querySelector(".paraf").style.color = "orange";
        document.querySelector("#eye").style.color = "orange";
        document.querySelector(".password").style.border = "2px solid orange";
    }

    // strong
    if(input.value.match(alfabe) && input.value.match(numara) && input.value.match(karakter) && input.value.length >= 8)
    {
        paraf.textContent = "Güçlü parola";
        document.querySelector("#dikkat").style.color = "green";
        document.querySelector(".paraf").style.color = "green";
        document.querySelector("#eye").style.color = "green";
        document.querySelector(".password").style.border = "2px solid green";
    }  
})