var peso = prompt("Qual o peso?");
var altura = prompt("Qual a altura?");


var calculo;
calculo = peso/altura


if (calculo < 18.5)
{


    alert("Peso abaixo do normal");
}
else if (calculo >= 18.5 && calculo <= 24.9) 
{
    alert("Peso  ideal, seu IMC é: "+calculo);
}
else if (calculo >= 25 && calculo <= 29.9) 
{
    alert("Acima do peso, seu IMC é: "+ calculo);
}
else if (calculo>= 30 && calculo <= 34.9) 
{
    alert("Obesidade grau I, seu IMC é: "+calculo);
}
else if (calculo >= 35 && calculo <= 40) 
{
    alert("Obesidade grau II, seu IMC é: "+calculo);
}
else if (calculo > 40) 
{
    alert("Obesidade grau III, seu IMC é: "+calculo);
}
