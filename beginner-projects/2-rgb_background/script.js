function changeColor()
{
    
    document.body.style.backgroundColor = `rgb(` + document.getElementById("red").value + `,` + document.getElementById("green").value +  `,` + document.getElementById("blue").value + `)`;

    document.getElementById("span").innerHTML = `RGB(` + document.getElementById("red").value + `,` + document.getElementById("green").value +  `,` + document.getElementById("blue").value + `)`;
}