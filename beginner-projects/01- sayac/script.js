document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('#input');
    const azaltButton = document.getElementById('azalt');
    const resetButton = document.getElementById('reset');
    const artButton = document.getElementById('art');

    // sayac 0 dan baslasin
    let counter = 0;

    // kullanici sayacin sayisini degistirirse yeni value atansin
    input.addEventListener('change', function(){
        counter = parseInt(input.value)
    })

    azaltButton.addEventListener('click', function() {
        counter--;
        input.value = counter;
    });

    resetButton.addEventListener('click', function() {
        counter = 0;
        input.value = counter;
    });

    artButton.addEventListener('click', function() {
        counter++;
        input.value = counter;
    });
});
