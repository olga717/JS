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
