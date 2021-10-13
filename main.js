document.addEventListener("DOMContentLoaded", init);
let hideCheckbox;
let lista;

function init(){
    document.getElementById("btn").addEventListener("click", felvetel);
    hideCheckbox = document.getElementById("hideCheckbox");
    hideCheckbox.addEventListener("click", hide);    
    document.getElementById("deleteAllDone").addEventListener("click", deleteAllDone);
    document.getElementById("searchInput").addEventListener("input", search);
    lista = document.getElementById("todoLista");
}

function felvetel(){
    let input = document.getElementById("input");

    if(input.value.trim() == ""){
        alert("Az input nem lehet üres!");
        return;
    }

    let ujSor = document.createElement("li");
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
    if (e.target.checked && hideCheckbox.checked){
        sor.classList.toggle("hidden");
    }
}

function torol(e){
    e.target.parentNode.remove();
}

function hide(){
    let db = lista.getElementsByTagName("li").length;
    for(let i = 0; i < db; i++){
        if (lista.getElementsByTagName("li")[i].getElementsByTagName("label")[0].className == "kihuzott"){
            lista.getElementsByTagName("li")[i].classList.toggle("hidden");
        }
    }
}

function deleteAllDone(){
    let db = lista.getElementsByTagName("li").length;
    for(let i = 0; i < db; i++){
        if (lista.getElementsByTagName("li")[i].getElementsByTagName("label")[0].className == "kihuzott"){
            lista.getElementsByTagName("li")[i].remove();
            db--;
            i--;
        }
    }
}

function search() {
    let db = lista.getElementsByTagName("li").length;
    for(let i = 0; i < db; i++){
        let sorSzoveg = lista.getElementsByTagName("li")[i].getElementsByTagName("label")[0].innerHTML.toLowerCase();
        let keresettSzoveg = document.getElementById("searchInput").value.toLowerCase();
        if (sorSzoveg.includes(keresettSzoveg)){
            lista.getElementsByTagName("li")[i].classList.remove("hiddenSearch");
        }
        else{
            lista.getElementsByTagName("li")[i].classList.add("hiddenSearch");
        }
    }
}