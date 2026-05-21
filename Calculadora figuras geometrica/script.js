
function mostrarCampos() {

    let figura = document.getElementById("figura").value;
    let campos = document.getElementById("campos");

    campos.innerHTML = "";

    if(figura === "circulo"){
        campos.innerHTML = `
            <input type="number" id="radio" placeholder="Ingresa el radio">
        `;
    }

    else if(figura === "triangulo"){
        campos.innerHTML = `
            <input type="number" id="base" placeholder="Ingresa la base">
            <input type="number" id="altura" placeholder="Ingresa la altura">
        `;
    }

    else if(figura === "rectangulo"){
        campos.innerHTML = `
            <input type="number" id="ancho" placeholder="Ingresa el ancho">
            <input type="number" id="alto" placeholder="Ingresa el alto">
        `;
    }
}

function calcularArea(){

    let figura = document.getElementById("figura").value;
    let resultado = document.getElementById("resultado");

    let area = 0;

    if(figura === "circulo"){

        let radio = parseFloat(document.getElementById("radio").value);

        area = Math.PI * radio * radio;

        resultado.innerHTML = `Área del círculo: ${area.toFixed(2)}`;
    }

    else if(figura === "triangulo"){

        let base = parseFloat(document.getElementById("base").value);
        let altura = parseFloat(document.getElementById("altura").value);

        area = (base * altura) / 2;

        resultado.innerHTML = `Área del triángulo: ${area.toFixed(2)}`;
    }

    else if(figura === "rectangulo"){

        let ancho = parseFloat(document.getElementById("ancho").value);
        let alto = parseFloat(document.getElementById("alto").value);

        area = ancho * alto;

        resultado.innerHTML = `Área del rectángulo: ${area.toFixed(2)}`;
    }

    else{
        resultado.innerHTML = "Selecciona una figura.";
    }
}