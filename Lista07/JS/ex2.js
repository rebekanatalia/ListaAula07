var num1, num2, num3;


var EX2 = "“Exercício 2";

alert(EX2);


num1 = prompt("digite o primeiro valor:");
num2 = prompt("digite o segundo valor:");
num3 = prompt("digite o terceiro valor:");

var aux = num1;

if(num2 < num1){
    aux=num2;
    num2=num1;
    num1=aux;
   }

   if(num3 < num1){
    aux=num3;
    num3=num1;
    num1=aux;
   }

   if(num3 < num2){
    aux=num3;
    num3=num2;
    num2=aux;
   }
   alert(num1+"-"+num2+"-"+num3);
  

