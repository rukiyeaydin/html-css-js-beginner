const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const buton = document.getElementById('buton');

buton.addEventListener("click", () => {
    let input = document.getElementById("input").value;

    if(input.length > 0){
        fetch(`${url}${input}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
    
            const hone = document.getElementById('hone');
            const tanim = document.getElementById('tanim');
            const sentence = document.getElementById('sentence');
    
            hone.textContent = input;
    
            if (data.length > 0) {
                tanim.style.color = "black";
                sentence.style.color = "black";
                tanim.textContent = data[0].meanings[0].definitions[0].definition;
                sentence.innerHTML = `<i>${data[0].meanings[0].definitions[0].example}</i>`;
            } else {
                tanim.textContent = "No definition found.";
                tanim.style.color = "red";
                sentence.textContent = "No sentence found";
                sentence.style.color = "red";
            }
        })
        .catch((error) => {
            console.error(error);
            const tanim = document.getElementById('tanim');
            const sentence = document.getElementById('sentence');
            tanim.textContent = "An error occurred while fetching data.";
            sentence.textContent = "";
        });
    }
    else{
        alert("Enter a word that has at least a letter.");
    }
});
