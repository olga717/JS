/*ключевое слово + имя ф-ции 
(параметры ф-ции, скобки всегда)
{тело ф-ции - код, действие}*/

function myFun () {

    alert ("Hello!");
}

myFun(); /*вызов ф-ции*/


/*Локальная переменная
видна только внутри ф-ции*/ 

/*function showMessage() {
    
    let message = "Привет, я JavaScript!"; // локальная переменная
    alert( message );
  }
  
showMessage(); // Привет, я JavaScript!*/
  
/*alert( message ); Не будет выводить т.к локал-ая*/ 

/*Ф-ция имеет доступ к внешним переменным и
может менят их значения */
/*let userName = 'Вася'; /*внешняя переменная*/

//function showMessage() {
 // let message = 'Привет, ' + userName; /*локальная пере-ая  */
 // alert(message);
//}

//showMessage();*/

/*Ф-ция меняет значение внешней переменной */
//let userName = 'Вася'; /*внешняя переменная*/
//alert (userName);

//function showMessage() {
  //userName = "Pety";/*ф-ция меняет значение внешней пере-ой*/
  //alert(userName);
//}

//showMessage();



/*Если создали локальную п-ную с таким же именем как у внешней
то внешняя игнорируется */
let userName = "Vasy";

function showMessage() {
    let userName = "Pety";

    let message = "Hello, " + userName;
    alert(message);
}

alert (userName);
showMessage()