function validar() {

    var name = document.getElementById("nombre").value.trim();
    var ced = document.getElementById("cedula").value;
    var address = document.getElementById("direccion").value;

    var sexo = "";

    var sexoMasculino = document.getElementById("masculino");
    var sexoFemenino = document.getElementById("femenino");
    var sexoOtro = document.getElementById("otro");

    if (sexoMasculino.checked) {
        sexo = sexoMasculino.value;
    } else if (sexoFemenino.checked) {
        sexo = sexoFemenino.value;
    } else if (sexoOtro.checked) {
        sexo = sexoOtro.value;
    } else {
        sexo = null;
    }

    /*
    var nacido = "";
    var lugarSanto = document.getElementById("santoDomingo");
    var lugarSamana = document.getElementById("samana");
    var lugarPuerto = document.getElementById("puertoPlata");
    var lugarNagua = document.getElementById("nagua");
    var lugarMonte = document.getElementById("monteCristi");

    if (lugarSanto.checked) {
        nacido = lugarSanto.value;
    } else if (lugarSamana.checked) {
        nacido = lugarSamana.value;
    } else if (lugarPuerto.checked) {
        nacido = lugarPuerto.value;
    } else if (lugarNagua.checked) {
        nacido = lugarNagua.value;
    } else if (lugarMonte.checked) {
        nacido = lugarMonte.value;
    } else {
        nacido = null;
    }*/


    //validacion de nombre
    if ((name.length < 5) || (name.length > 10)) {
        alert("el nombre introducido fue de " + name.length + "caracteres. Por favor introducir uno entre 5 y 10.");
        return false;
    }
    //validacion de cedula
    if (Number.isInteger(parseInt(ced)) == false) {
        alert("La cedula debe ser digitada en valores numericos.");
        return false;
    }
    if (ced.length != 11) {
        alert("La cedula debe constar de 11 numeros.");
        return false;
    }
    //validacion de direccion
    if ((address.length < 30) || (name.length > 50)) {
        alert("La direccion introducida fue de " + address.length + " caracteres. Por favor introducir una entre 30 y 50.");
        return false;
    }
    //validacion de sexo
    if (sexo == null) {
        alert("El sexo debe ser seleccionado");
        return false;
    }
    //validacion de lugar de nacimiento
    /*if (nacido == null) {
        alert("El lugar de nacimiento debe ser seleccionado");
        return false;
    }*/

    var indice = document.getElementById("select").selectedIndex;
    if (indice == null || indice == 0) {
        alert("El lugar de nacimiento debe ser seleccionado");
        return false;
    }

    //si esta correcto
    alert("Correcto");
    return true;


}