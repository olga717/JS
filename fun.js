/*ключевое слово + имя ф-ции 
(параметры ф-ции, скобки всегда)
{тело ф-ции - код, действие}*/

function myFun () {

    alert ("Hello!");
}

myFun(); /*вызов ф-ции*/


/*Локальная переменная
видна только внутри ф-ции*/ 

function showMessage() {
    
    let message = "Привет, я JavaScript!"; // локальная переменная
    alert( message );
  }
  
showMessage(); // Привет, я JavaScript!
  
/*alert( message ); Не будет выводить т.к локал-ая*/ 
