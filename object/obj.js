'use strict'
// синтаксис "конструктор объекта"
//let user = new Object(); 

/*синтаксис "литерал обьекта"
let obj = {
    ключ1: значение,
    ключ2: значение,
    "ключ3 ключ": значение,//если более 2х слов, то в ""
} //можно ставить "," после послед. значения

alert(obj.ключ1);//вызов значения через "."
alert(obj.ключ3 ключ)//доступ к
//значению не работает
//можно через []
let user = {};


// присваивание значения свойству
user["likes birds"] = true;
// получение значения свойства
alert(user["likes birds"]); // true

// удаление свойства
delete user["likes birds"];

//Объект, объявленный через const, может быть изменён.
const user = {
    name: "John"
  };
  user.name = "Pete"; 
  
  alert(user.name);//Pete*/

 /*const person = {
     name: 'Maxim',
     age: 25,
     greet: function () {
         console.log ( 'Greet!')
     }
    };*/

    //Прототипы объектов
    const person = new Object ({
        name: 'Maxim',
        age: 25,
        greet: function () {
        console.log ( 'Greet!')
    }
       
    })
    Object.prototype.sayHello = function() {
    console.log('Hello')
    }

    const lena = Object.create(person)
    lena.name = 'Elena'
    
    const str = new String('I am string')

    //
    let user = {
        name: "John",
        age: 30
      };
      let key = prompt("Что вы хотите узнать о пользователе?", "name");

    // доступ к свойству через переменную
    alert( user[key] ); // John (если ввели "name")
      //через точку не работает
      /*let key = "name";
      alert( user.key ); // undefined*/
//[] для создания вычисляемого с-ва в литеральной нотации
        let fruit = prompt("Какой фрукт купить?", "apple");

        let bag = {
            [fruit]: 5, // имя св-а взято из п-ой fruit
            };

        alert( bag.apple ); // 5, если fruit="apple"
    //для свойств объектов допустимы имена зарез-ых слов
let obj = {
    for: 1,
    let: 2,
    return: 3
  };
  
  alert( obj.for + obj.let + obj.return );  // 6 
  
  
  //__proto__не можем уст-ить его в необъектное значение:
  let obj = {};
  obj.__proto__ = 5; // присвоим число
  alert(obj.__proto__); // [object Object]


  //оператор "in" для проверки есть ли св-ва в объекте.
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age существует
alert( "blabla" in user ); // false, user.blabla не существует


// цикл for..in для перебора св-в объекта
let user = {
    name: 'John',
    age: 30,
    isAdmin: true
};

for (let key in user) {
    alert (key);//name, age. isAdmin
    alert ( user[key] );//'John', 30,true
}
//Упорядочение свойств объекта
let codes = {
    "49": "Германия",
    "41": "Швейцария",
    "44": "Великобритания",
    // ..,
    "1": "США"
  };
  
  for (let code in codes) {
    alert(code); // 1, 41, 44, 49
  }
  //это целочисленные св-ва, поэтому в порядке возростания
  //делаем их нецелочисл. добавив +
  let codes = {
    "+49": "Германия",
    "+41": "Швейцария",
    "+44": "Великобритания",
    // ..,
    "+1": "США"
  };
  
  for (let code in codes) {
    alert( +code ); // 49, 41, 44, 1
  }
  //получаем в порядке написания

//задание
  let user = {};
      user.name = 'John';
      user.surname ='Smith';
      user.name = 'Pete';
  delete user.name;