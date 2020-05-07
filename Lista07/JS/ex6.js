var ex6= "Exercício 6";
alert(ex6);


var escolha = "1- Circulo   2- Triangulo Retangulo    3- Retangulo  4 - Quadrado ";
alert(escolha);
var i = prompt("Qual figura deseja calcular a área?");
var result = 0;
const pi= 3.14;




if(i == 1)
{
    var raio = prompt("Qual o tamanho do raio?");
    result = pi*(raio*raio);
    alert("Área: "+result);
}

else if(i == 2)
{
    var base = prompt("Qual o tamanho da base?");
    var altura = prompt("Qual o tamnho da altura?");
    result= (base*altura)/2;
    alert("Área: "+result);
}
else if (i == 3) 
{
    var ladoRetangulo1 = prompt("Qual o tamanho do lado?");
    var ladoRetangulo2 = prompt("E do outro?");
    result = ladoRetangulo1*ladoRetangulo2;
    alert("Área: "+result);
}

else if (i == 4)
{
    var ladoQuadrado = prompt("Qual o tamanho do lado?");
    result = ladoQuadrado*ladoQuadrado;
    alert("Área: "+result);
}
else
{
    alert("erro")
}
