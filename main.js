let lista = [];
document.addEventListener("DOMContentLoaded", init);

function init(){
    document.getElementById("btn").addEventListener("click", felvetel)
}

function felvetel(){
    let input = document.getElementById("input");
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    lista.push(input.value);
    input.value = "";
}