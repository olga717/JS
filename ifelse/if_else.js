'use strict'

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

if (age == '18') {  //(какое-то условие)
    alert ('Hi!'); //{действие}
}
else if (age > '18') { //(еще условие)
    alert ('Good morning!'); //{действие}
}
else { // любые другие условия
    alert ('Good by!'); // действие
}


//если много if применяется метод switch case
let num = prompt ('Сколько тебе лет?', ' ');
switch (num) {
    case 15:
       alert ('Еще год потерпи');
        break;
    case 16:
        alert ('Ураааа!');
    break;
default:
        alert('okkk');
}
// пример 2
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( 'Нет таких значений' );
}

//групировка case
let a = 2 + 2;

switch (a) {
  case 4:
    alert('Правильно!');
    break;

  case 3: // (без breck) группируем оба case
  case 5:
    alert('Неправильно!');
    alert("Может вам посетить урок математики?");
    break;

  default:
    alert('Результат выглядит странновато. Честно.');
}

//строгое равенство типов
let arg = prompt("Введите число?");
switch (arg) {
  case '0':
  case '1':
    alert( 'Один или ноль' );
    break;

  case '2':
    alert( 'Два' );
    break;

  case 3://тип не соответствует
    alert( 'Никогда не выполнится!' );
    break;
  default:
    alert( 'Неизвестное значение' );
}



//тернарный/условный оператор '?'
//при двойном ветвлении

let b = 15;
b == 15 ? alert ('yes') : alert ('no');
//(условие лучше в скобках (b==5))


//несколько операторов '?'
//более 2х ветвлений-условий

let age1 = prompt('Возраст?', 18);

let message = (age1 < 3) ? 'Здравствуй, малыш!' :
  (age1 < 18) ? 'Привет!' :
  (age1 < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

alert( message );

//сложные условия с логическими операторами
//&& или  || и

let a = 3;
console.log (a == 3 && a > 3);
//console.log (a == 3 || a > 3);

