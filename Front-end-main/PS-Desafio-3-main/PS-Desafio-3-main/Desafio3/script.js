let modal = "prato";

mudarmodal();

function mudarmodal() {
    document.getElementById(modal).style.display = "none";
    let sectors = document.getElementById("selecionar");
    modal = sectors.value;
    document.getElementById(modal).style.display = "block";
} 