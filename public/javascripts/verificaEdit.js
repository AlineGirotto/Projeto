var form = document.getElementById('form');
form.addEventListener('submit', verificar);

var btVer = document.getElementById('val');
btVer.addEventListener('click', verificar);

var p = document.getElementById('msg');

function verificar(e) {
    var cont = 0;
    if(verificaN() == true){
        cont ++;
    }
    if(verificaD() == true){
        cont ++;
    }
    if(verificaE() == true){
        cont ++;
    }
    if(verificaCpf() == true){
        cont ++;
    }
    if(verificaCep() == true){
        cont ++;
    }
    if(verificaNum() == true){
        cont ++;
    }
    if(verificaSexo() == true){
        cont ++;
    }
    if(verificaTel() == true){
        cont ++;
    }
    if(verificaLog() == true){
        cont ++;
    }
    if(verificaSenha() == true){
        cont ++;
    }


    if(cont != 10){
        e.preventDefault();
    }
}

function verificaN() {
    var nmc = document.getElementById('nome');
    var nm = document.getElementById("nome").value;
    var numeros = "";

    for (var i = 0; i < nm.length; i++) {
        if (nm.charAt(i) != " ") {
            if (!isNaN(nm.charAt(i))) {
                numeros += nm.charAt(i);
            }
        }
    }

    if (nm == '' || nm.trim().indexOf(' ') == -1 || nm.length < 6 || numeros.length > 0) {
        nmc.setAttribute("class", "red");
        return false;
    } else {
        nmc.setAttribute("class", "");
        return true;
    }

}

function verificaD() {
    var dt = document.getElementById('date');
    var xdt = "";
    for (var i = 0; i <= dt.value.length; i++) {
        if (dt.value.charAt(i) != "-") {
            xdt += dt.value.charAt(i);
        }
    }
    var data = new Date();
    if (dt.value == '') {
        dt.setAttribute("class", "red");
        return false;
    } else {
        var ano = xdt.substring(0, 4);
        if(ano.length<5){
            var mes = xdt.substring(4, 6);
            var dia = xdt.substring(6, 8);
            var data_nasc = new Date(mes + '/' + dia + "/" + ano);

            var anoa = data.getFullYear();
            var mesa = data.getMonth();
            var diaa = data.getDate();
            var data_atual = new Date(mesa + '/' + diaa + "/" + anoa);

            if (data_nasc >= data_atual) {
                dt.setAttribute("class", "red");
                return false;
            } else {
                dt.removeAttribute("class", "red");
                return true;
            }
        }else{
            dt.setAttribute("class","red");
            return false;
        }
    }

}

function verificaE() {
    var em = document.getElementById('email');
    if (em.value.indexOf(' ') != -1 || (em.value.indexOf('@') == -1) || em.value.indexOf('@') != em.value.lastIndexOf('@') || em.value.indexOf('@') > em.value.lastIndexOf('.')) {
        em.setAttribute("class", "red");
        return false;
    } else {
        em.removeAttribute("class", "red");
        return true;
    }
}

function verificaCpf() {
    var c = document.getElementById('cpf');
    var xcpf = "";
    var soma = 0;
    var resto = 0;

    if (c.value.length == 3 || c.value.length == 7) {
        c.value += ".";
    } else if (c.value.length == 11) {
        c.value += "-";
    }

    for (var i = 0; i <= c.value.length; i++) {
        if (c.value.charAt(i) != "." && c.value.charAt(i) != "-") {
            xcpf += c.value.charAt(i);
        }
    }

    if (c.value == '' || xcpf.length <= 10 || isNaN(xcpf)) {
        c.setAttribute("class", "red");
        return false;
    } else {
        if (xcpf == "00000000000" || xcpf == "11111111111" || xcpf == "22222222222" || xcpf == "33333333333" || xcpf == "44444444444" || xcpf == "55555555555" || xcpf == "66666666666" || xcpf == "77777777777" || xcpf == "88888888888" || xcpf == "99999999999") {
            c.setAttribute("class","red");
            return false;
        }else{
            c.removeAttribute("class","red");
            return true;
        }
    }
}


function verificaCep() {
    var cp = document.getElementById('cep');
    var xcep = "";

    if (cp.value.length == 5) {
        cp.value += "-";
    }
    for (var i = 0; i <= cp.value.length; i++) {
        if (cp.value.charAt(i) != "." && cp.value.charAt(i) != "-") {
            xcep += cp.value.charAt(i);
        }
    }
    if (cp.value == '' || xcep.length <= 7 || isNaN(xcep)) {
        cp.setAttribute("class", "red");
        return false;
    } else {
        cp.removeAttribute("class","red");
        return true;
    }
}


function verificaNum() {
    var n = document.getElementById("num");
    if (n.value == '' || isNaN(n.value)) {
        n.setAttribute("class", "red");
        return false;
    } else {
        n.classList.remove("red");
        return true;
    }
}

function verificaSexo() {
    var n = document.getElementById("sexo");
    if (n.value == '') {
        n.setAttribute("class", "red");
        return false;
    } else {
        n.classList.remove("red");
        return true;
    }
}


function verificaTel() {
    var xtel = "";
    var t = document.getElementById("tel").value;
    var te = document.getElementById("tel");

    if (t.length == 1) {
        document.getElementById("tel").value = "(" + t;
    } else if (t.length == 3) {
        document.getElementById("tel").value = t + ")";
    } else if (t.length == 9) {
        document.getElementById("tel").value = t + "-";
    }

    for (var i = 0; i < t.length; i++) {
        if (t.charAt(i) != "(" && t.charAt(i) != ")" && t.charAt(i) != "-") {
            xtel += t.charAt(i);
        }
    }
    if (isNaN(xtel) || xtel.length <= 10 || t == "") {
        te.setAttribute("class", "red");
        return false;
    } else {
        te.classList.remove("red");
        return true;
    }
}

function verificaLog() {
    var n = document.getElementById("login");
    if (n.value == '') {
        n.setAttribute("class", "red");
        return false;
    } else {
        n.classList.remove("red");
        return true;
    }
}

function verificaSenha() {
    var n = document.getElementById("senha");
    if (n.value == '') {
        n.setAttribute("class", "red");
        return false;
    } else {
        n.classList.remove("red");
        return true;
    }
}