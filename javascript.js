var radio = document.querySelector(".manual-btn")
var cont = 1

document.getElementById("radio1").checked = true

 setInterval(() => {
    proximoPerfil()
 }, 4000)

function proximoPerfil(){
    cont++

    if(cont > 3){
        cont = 1
    }

    document.getElementById("radio" + cont).checked = true
}




function Avaliar(mundo){
    var url=window.location;
    url = url.toString()
    url = url.split("index.html")
    url = url[0]

    var s1 = document.getElementById("s1").src;
    var s2 = document.getElementById("s2").src;
    var s3 = document.getElementById("s3").src;
    var s4 = document.getElementById("s4").src;
    var s5 = document.getElementById("s5").src;
    var avaliacao = 0;

    if(mundo == 5){
        if(s5 == url + "imagens/world.png"){
            document.getElementById("s1").src = "imagens/globe.png";
            document.getElementById("s2").src = "imagens/globe.png";
            document.getElementById("s3").src = "imagens/globe.png";
            document.getElementById("s4").src = "imagens/globe.png";
            document.getElementById("s5").src = "imagens/globe.png";
            avaliacao = 5;
        }
        else{
            document.getElementById("s1").src = "imagens/globe.png";
            document.getElementById("s2").src = "imagens/globe.png";
            document.getElementById("s3").src = "imagens/globe.png";
            document.getElementById("s4").src = "imagens/globe.png";
            document.getElementById("s5").src = "imagens/world.png";
            avaliacao = 4;
        }
    }
    if(mundo == 4){
        if(s4 == url + "imagens/world.png"){
            document.getElementById("s1").src = "imagens/globe.png";
            document.getElementById("s2").src = "imagens/globe.png";
            document.getElementById("s3").src = "imagens/globe.png";
            document.getElementById("s4").src = "imagens/globe.png";
            document.getElementById("s5").src = "imagens/world.png";
            avaliacao = 4;
        }
        else{
            document.getElementById("s1").src = "imagens/globe.png";
            document.getElementById("s2").src = "imagens/globe.png";
            document.getElementById("s3").src = "imagens/globe.png";
            document.getElementById("s4").src = "imagens/world.png";
            document.getElementById("s5").src = "imagens/world.png";
            avaliacao = 3;
        }
    }
    if(mundo == 3){
        if(s3 == url + "imagens/world.png"){
            document.getElementById("s1").src = "imagens/globe.png";
            document.getElementById("s2").src = "imagens/globe.png";
            document.getElementById("s3").src = "imagens/globe.png";
            document.getElementById("s4").src = "imagens/world.png";
            document.getElementById("s5").src = "imagens/world.png";
            avaliacao = 3;
        }
        else{
            document.getElementById("s1").src = "imagens/globe.png";
            document.getElementById("s2").src = "imagens/globe.png";
            document.getElementById("s3").src = "imagens/world.png";
            document.getElementById("s4").src = "imagens/world.png";
            document.getElementById("s5").src = "imagens/world.png";
            avaliacao = 2;
        }
    }
    if(mundo == 2){
        if(s2 == url + "imagens/world.png"){
            document.getElementById("s1").src = "imagens/globe.png";
            document.getElementById("s2").src = "imagens/globe.png";
            document.getElementById("s3").src = "imagens/world.png";
            document.getElementById("s4").src = "imagens/world.png";
            document.getElementById("s5").src = "imagens/world.png";
            avaliacao = 2;
        }
        else{
            document.getElementById("s1").src = "imagens/globe.png";
            document.getElementById("s2").src = "imagens/world.png";
            document.getElementById("s3").src = "imagens/world.png";
            document.getElementById("s4").src = "imagens/world.png";
            document.getElementById("s5").src = "imagens/world.png";
            avaliacao = 1;
        }
    }
    if(mundo == 1){
        if(s1 == url + "imagens/world.png"){
            document.getElementById("s1").src = "imagens/globe.png";
            document.getElementById("s2").src = "imagens/world.png";
            document.getElementById("s3").src = "imagens/world.png";
            document.getElementById("s4").src = "imagens/world.png";
            document.getElementById("s5").src = "imagens/world.png";
            avaliacao = 1;
        }
        else{
            document.getElementById("s1").src = "imagens/world.png";
            document.getElementById("s2").src = "imagens/world.png";
            document.getElementById("s3").src = "imagens/world.png";
            document.getElementById("s4").src = "imagens/world.png";
            document.getElementById("s5").src = "imagens/world.png";
            avaliacao = 0;
        }
    }

    document.getElementById("rating").innerHTML = avaliacao
}
