document.addEventListener("DOMContentLoaded", init);

function init(){
    document.getElementById("btn").addEventListener("click", felvetel)
}

function felvetel(){
    let input = document.getElementById("input");

    if(input.value.trim() == ""){
        alert("Az input nem lehet üres!");
        return;
    }

    let ujSor = document.createElement("div");
    ujSor.className = "sor";

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.addEventListener("click", pipa);
    ujSor.appendChild(checkBox);

    let szoveg = document.createElement("label");
    szoveg.innerHTML = input.value;
    ujSor.appendChild(szoveg);

    let x = document.createElement("label");
    x.innerHTML = "X";
    x.className = "X";
    x.addEventListener("click", torol);
    ujSor.appendChild(x);

    document.getElementById("todoLista").appendChild(ujSor);
    input.value = "";
}

function pipa(e){
    let sor = e.target.parentNode;
    let szoveg = sor.getElementsByTagName("label")[0];
    szoveg.classList.toggle("kihuzott");
}

function torol(e){
    e.target.parentNode.remove();
}