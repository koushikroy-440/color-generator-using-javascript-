var random_number = [0,1,2,3,4,5,6,7,8,9,"a","b","c","e","f"];
var btn = document.getElementById("btn");
var color = document.getElementById("color");
btn.onclick = function(){
    var number_picker = "#";
    for(let i = 0;i<6;i++)
    {
        number_picker += random_number[getNumber()];
    }

    document.body.style.backgroundColor = number_picker;
    color.textContent =  number_picker;
}

function getNumber(){
    return Math.floor(Math.random()*random_number.length);
}