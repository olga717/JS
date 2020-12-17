//Косктрукция if else
//Оператор условия if
/*let c =5;
let b = 3;
if (c>b) {
    alert ('yes');
}
*/
//Разветвление конструкции.
// два варианта
/*let c =5;
let b = 8;
if (c > b) {alert ('yes');}
else {alert ('no');}*/

//более двух вариантов
//сравнение 2х чисел

/*let c =3;
let b = 3;
if (c > b) {alert ('Rigth!');} 
else if (c < b) {alert ('Wrong!');}
else {alert ('Числа равны');}*/

//пример с prompt
//несколько условий if
let age = prompt ('Сколько тебе лет?', ' ');

if (age == '18') {  //(какоето условие)
    alert ('Hi!'); //{действие}
}
else if (age < '18') { //(еще условие)
    alert ('Good by!'); //{действие}
}
else { // любые другие условия
    alert ('Good morning!'); // действие
}



