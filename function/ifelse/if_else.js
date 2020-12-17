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
        console.log('Еще год потерпи');
        break;
    case 16:
        console.log('Ураааа!');
    break;
default:
    console.log('okkk');
}




//тернарный/условный оператор '?'
//при двойном ветвлении

let b = 15;
b == 15 ? alert ('yes') : alert ('no');
//(условие лучше в (b==5))


//несколько операторов '?'
//более 2х ветвлений-условий

let age1 = prompt('Возраст?', 18);

let message = (age1 < 3) ? 'Здравствуй, малыш!' :
  (age1 < 18) ? 'Привет!' :
  (age1 < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

alert( message );

