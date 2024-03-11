var dateGlobal = formatarData(new Date());
var totalGlobal = 0;

function formatarData(item){
    var options = {
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    }
    return item.toLocaleString("pt-BR", options)
}

function comecar(){
    var nome = document.getElementById("exampleFormControlInput1").value;
    show(nome) ;
}

function show(nome){
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div");
    if(nome && nome.trim() !== ""){
        div.style.display = "flex";
        document.getElementById("exampleFormControlInput1").style.background = "none";
    }else{
        document.getElementById("error").style.display = "block"
    }
}

function fechar(){
    document.getElementById("error").style.display = "none"
    document.getElementById("exampleFormControlInput1").style.background = "lightpink";
}

function calcularTotal(){
    var selectFutebol = document.getElementById("selectFutebol");
    var selectBasquete = document.getElementById("selectBasquete");
    var selectPesca = document.getElementById("selectPesca");
    var selectRoupas = document.getElementById("selectRoupas");
    var selectCamping = document.getElementById("selectCamping");
    var resultadoSpan = document.getElementById("resultado");
    
    var total = 0;
    var futebol = 0;
    var basquete = 0;
    var pesca = 0;
    var roupas = 0;
    var camping = 0;

    switch (selectFutebol.value) {
        case "Bola de Futebol":
            total += 89.99;
            futebol = 89.99;
        break;
        case "Camisa de Futebol":
            total += 299.99;
            futebol = 299.99;
        break;
        case "Shorts de Futebol":
            total += 89.99;
            futebol = 89.99;
        break;
        case "Caneleira de Futebol":
            total += 39.99;
            futebol = 39.99;
        break;
        case "Chuteira de Futebol de Campo":
            total += 549.99;
            futebol = 549.99;
        break;
    }

    switch (selectBasquete.value) {
        case "Tenis de Basquete":
            total += 289.99;
            basquete = 289.99;
        break;
        case "Regata de Basquete":
            total += 149.99;
            basquete = 149.99;
        break;
        case "Shorts de Basquete":
            total += 89.99;
            basquete = 89.99;
        break;
        case "Meia de Basquete":
            total += 39.99;
            basquete = 39.99;
        break;
        case "Manguito de Basquete":
            total += 79.99;
            basquete = 79.99;
        break;
    }

    switch (selectPesca.value) {
        case "Vara de Pesca":
            total += 389.99;
            pesca = 389.99;
        break;
        case "Isca de Pesca":
            total += 29.99;
            pesca = 29.99;
        break;
        case "Kayak de Pesca":
            total += 999.99;
            pesca = 999.99;
        break;
        case "Remo":
            total += 299.99;
            pesca = 299.99;
        break;
        case "Rede de Pesca":
            total += 149.99;
            pesca = 149.99;
        break;
    }

    switch (selectRoupas.value) {
        case "Camisa Térmica":
            total += 139.99;
            roupas = 139.99;
        break;
        case "Calça Esportiva":
            total += 99.99;
            roupas = 99.99;
        break;
        case "Bermuda Esportiva":
            total += 89.99;
            roupas = 89.99;
        break;
        case "Casaco":
            total += 149.99;
            roupas = 149.99;
        break;
        case "Calca Térmica":
            total += 119.99;
            roupas = 119.99;
        break;
    }

    switch (selectCamping.value) {
        case "Barraca":
            total += 699.99;
            camping = 699.99;
        break;
        case "Isolante Térmico":
            total += 129.99;
            camping = 129.99;
        break;
        case "Saco de Camping":
            total += 119.99;
            camping = 119.99;
        break;
        case "Bota de Camping":
            total += 239.99;
            camping = 239.99;
        break;
        case "Corta Vento pra Camping":
            total += 169.99;
            camping = 169.99;
        break;
    }
    totalGlobal = total.toFixed(2);
    document.getElementById("pedido-pronto").style.display = "block";
    document.getElementById("futebol-pronto").textContent = selectFutebol.value + " R$" + futebol.toFixed(2);
    document.getElementById("basquete-pronto").textContent = selectBasquete.value + " R$" + basquete.toFixed(2);
    document.getElementById("pesca-pronto").textContent = selectPesca.value + " R$" + pesca.toFixed(2);
    document.getElementById("roupas-pronto").textContent = selectRoupas.value + " R$" + roupas.toFixed(2);
    document.getElementById("camping-pronto").textContent = selectCamping.value + " R$" + camping.toFixed(2);
    resultadoSpan.textContent = "R$ " + total.toFixed(2);
}

function limpar(){
    document.getElementById("pedido-pronto").style.display = "none";
    document.getElementById("selects-div").style.display = "none";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("selectFutebol").value = "Selecione o seu produto";
    document.getElementById("selectBasquete").value = "Selecione o seu produto";
    document.getElementById("selectPesca").value = "Selecione o seu produto";
    document.getElementById("selectRoupas").value = "Selecione o seu produto";
    document.getElementById("selectCamping").value = "Selecione o seu produto";
}

function zap(){
    var numeroTelefone = "5541998862910"

    var linkWhatsApp = "https://wa.me/" + numeroTelefone + "?text=O Valor total é: R$" + totalGlobal + " comprados na data: " + dateGlobal;
    window.open(linkWhatsApp, "_blank")
}