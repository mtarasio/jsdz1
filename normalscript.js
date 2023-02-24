let userName = prompt('Як вас звати?');
alert('Привіт,' + userName);

//Завдання 2


let userBirthday = prompt('Якого ви року народження?');
const currentYear = 2023;
let userAge = currentYear - userBirthday;
alert ('Вам ' + userAge + ' років');

//Завдання 3

let lenghtSideSquare = prompt('Вкажіть довжину сторони квадрату для обчислення його периметру:');
let perimeterSquare = lenghtSideSquare * 4;
alert ('Периметр вашого квадрату: ' + perimeterSquare);