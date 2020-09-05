var random_color = ["red","green","yellow","aqua","#701e2d","#21f28a","#77b3ef","#2a6b4a","#600516"];
var btn = document.getElementById("btn");
var color = document.getElementById("color");
btn.onclick = function(){
    var color_pick = getNumber();
    document.body.style.backgroundColor = random_color[color_pick];
    color.textContent =  random_color[color_pick];
}

function getNumber(){
    return Math.floor(Math.random()*random_color.length);
}