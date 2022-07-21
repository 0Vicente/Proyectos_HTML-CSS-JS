function validar() {

    var name = document.getElementById("name").value.trim();
    var lname = document.getElementById("lname").value;
    var cnumber = document.getElementById("cnumber").value;
    var ddate = document.getElementById("ddate").value;
    var cvv = document.getElementById("cvv").value;
    var expression = /\d+\/+\d/;
    /*var eemail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;*/

    //validacion de Tipo de Pais
    var indice = document.getElementById("validatedInputGroupSelect").selectedIndex;
    if (indice == null || indice == 0) {
        alert("El pais debe ser seleccionado");
        return false;
    }

    //validacion de nombre
    if (name.length < 1) {
        alert("No se ha introducido ningun nombre");
        return false;
    }

    for (var i = 0; i < name.length; i++) {
        var caracter = name.charAt(i);
        if (caracter == " ") {
            alert("No se admiten espacios en el campo nombre");
            return false;
        }
    }

    for (var i = 0; i < name.length; i++) {
        var caracter = name.charAt(i);
        if ((caracter == "0") || (caracter == "1") || (caracter == "2") || (caracter == "3") || (caracter == "4") || (caracter == "5") || (caracter == "6") || (caracter == "7") || (caracter == "8") || (caracter == "9")) {
            alert("No se admiten numeros en el campo nombre");
            return false;
        }
    }

    if ((name.length < 5) || (name.length > 10)) {
        alert("El nombre introducido fue de " + name.length + "caracteres. Por favor introducir uno entre 5 y 10 caracteres.");
        return false;
    }

    //validacion de apellido
    if (lname.length < 1) {
        alert("No se ha introducido ningun apellido");
        return false;
    }

    for (var i = 0; i < lname.length; i++) {
        var caracter = lname.charAt(i);
        if (caracter == " ") {
            alert("No se admiten espacios en el campo apellido");
            return false;
        }
    }

    for (var i = 0; i < lname.length; i++) {
        var caracter = lname.charAt(i);
        if ((caracter == "0") || (caracter == "1") || (caracter == "2") || (caracter == "3") || (caracter == "4") || (caracter == "5") || (caracter == "6") || (caracter == "7") || (caracter == "8") || (caracter == "9")) {
            alert("No se admiten numeros en el campo apellido");
            return false;
        }
    }

    if ((lname.length < 5) || (lname.length > 10)) {
        alert("El apellido introducido fue de " + lname.length + " caracteres. Por favor introducir uno entre 5 y 10 caracteres.");
        return false;
    }


    //validacion de Card Number
    if (cnumber.length < 1) {
        alert("No se ha introducido un numero de tarjeta");
        return false;
    }


    if (isNaN(cnumber)) {
        alert("El numero de tarjeta debe ser digitado con valores numericos sin guiones, ni espacios.");
        return false;
    }

    if (cnumber.length != 16) {
        alert("El numero de tarjeta debe ser de 16 digitos.");
        return false;
    }

    //validacion de Fecha de Vencimiento
    if (ddate.length < 1) {
        alert("No se ha introducido una fecha de vencimiento");
        return false;
    }


    if (!expression.test(ddate)) {
        alert("La fecha de vencimiento debe ser introducida bajo el siguiente formato 00/00");
        return false;
    }

    if (ddate.length != 5) {
        alert("La fecha de vencimiento debe contener 4 digitos divididos por un /.");
        return false;
    }

    for (var i = 0; i < ddate.length; i++) {
        var caracter = ddate.charAt(i);
        if (caracter == " ") {
            alert("No se admiten espacios en el campo fecha");
            return false;
        }
    }

    //validacion de Tipo de Pago
    var indice = document.getElementById("inputPtype").selectedIndex;
    if (indice == null || indice == 0) {
        alert("El tipo de pago debe ser seleccionado");
        return false;
    }

    //validacion de cvv
    if (cvv.length < 1) {
        alert("No se ha introducido ningun cvv");
        return false;
    }

    if (isNaN(cvv)) {
        alert("El cvv debe ser digitado con valores numericos");
        return false;
    }

    if (cvv.length != 3) {
        alert("El cvv solo puede tener 3 digitos.");
        return false;
    }


    //si esta correcto
    alert("Correcto");
    return true;
}