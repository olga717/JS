"use strict"
alert ("Hello!");

function myFun () {
    alert ("Hello!");
}

myFun();


/*AROW стрелки ф-ций */
//позволяют ис-ть короткий синтаксис


//var x = function(x, y) {  //обычный синтаксис
  //  return x * y;
  //}
  
  // ES6 ненужно ключевое слово, return, скобки
  //если ф-ция представляет собой едниный операор
  
  //const x = (x, y) => x * y;
  
  
  //Функции стрелок не имеют своих собственных thisфункций . 
  //Они не очень хорошо подходят для определения методов объекта.
  //Функции стрелок no hosting.
  // Они должны быть определены до того, как будут использованы.
  
  // let double = function(n) { return n * 2 }
 let double = n => n * 2;//если один аргумент то без ()

 alert( double(3) );
  
  
  //Многострочные стрелочные
  let myFunction = () => {
    console.log('work');
    console.log('Hello' + 'world');
  }
  myFunction();
  
  
  
  let sum = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
    let result = a + b;
    return result; // при фигурных скобках для возврата значения нужно явно вызвать return
  };
  
  alert( sum(1, 2) );
  
  
  
  
  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );
  

  //Callback ф-ции
  //возможнось передать одну ф-цию в качестве
  //аргумента для другой

  function first(y) {
      console.log(1);
      y();
  }
  function second() {
      console.log(2);
  }
 first(second);//ф-ция second аргумент для первой

 