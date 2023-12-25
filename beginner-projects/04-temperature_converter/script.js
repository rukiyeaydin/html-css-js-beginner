const from = document.querySelector("#convert");
const into = document.querySelector("#into");
const value1Input = document.querySelector("#deger1");
const value2Input = document.querySelector("#deger2");

function convertTemperature (){
    const fromValue = from.value;
    const intoValue = into.value;

    const value1 = parseFloat(value1Input.value);

    let result;

    if(fromValue === 'Celsius (°C)')
    {
        if(intoValue === 'Fahrenheit (°F)')
        {
            result = (value1 * 9/5) + 32;
        }
        else if(intoValue === 'Kelvin (°K)')
        {
            result = value1 + 273.15;
        }
        else
        {
            result = value1;
        }
    }
    else if(fromValue === 'Fahrenheit (°F)')
    {
        if(intoValue === 'Celsius (°C)')
        {
            result = (value1 - 32) * 5/9;
        }
        else if(intoValue === 'Kelvin (°K)')
        {
            result = (value1 - 32) * 5/9 + 273.15;
        }
        else
        {
            result = value1;
        }
    }
    else if(fromValue === 'Kelvin (°K)')
    {
        if(intoValue === 'Celsius (°C)')
        {
            result = value1 - 273.15;
        }
        else if(intoValue === 'Fahrenheit (°F)')
        {
            result = (value1 - 273.15) * 9/5 + 32;
        }
        else
        {
            result = value1;
        }
    }
    value2Input.value = result.toFixed(2);
}


value1Input.addEventListener('input', convertTemperature);
from.addEventListener('change', convertTemperature);
into.addEventListener('change', convertTemperature);