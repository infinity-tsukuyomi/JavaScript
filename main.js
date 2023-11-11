// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let xxx = 100;

if (xxx !== 0) {
    console.log("Вірно")
} else {
    console.log("Невірно")
}

let a = 0;

if (a !== 0) {
    console.log("Вірно")
} else {
    console.log("Невірно")
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 11;

if (time >= 0 && time <= 15) {
    console.log("В першу")
} else if (time >= 16 && time <= 30) {
    console.log("В другу")
} else if (time >= 31 && time <= 45) {
    console.log("В третю")
} else {
    console.log("В четверту")
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 20;

if (day >= 1 && day <= 10) {
    console.log("В першу")
} else if (day >= 11 && day <= 20) {
    console.log("В другу")
} else {
    console.log("В третю")
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано
// на цей день (можна замість плану на день, назву дня англійською).
let schedule = "Sunday";

switch (schedule) {
    case "Monday":
        console.log("Programming!");
        break;

    case "Tuesday":
        console.log("Shopping");
        break;

    case "Wednesday":
        console.log("Playing computer");
        break;

    case "Thursday":
        console.log("Swimming");
        break;

    case "Friday":
        console.log("Walking");
        break;

    case "Saturday":
        console.log("PLaying football");
        break;

    case "Sunday":
        console.log("Dying:)");
        break;
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let num1 = 14;
let num2 = 768;

if (num1 > num2) {
    console.log(`Your number is ${num1}`) // Поприкалывался)
} else if (num1 < num2) {
    console.log(`Your number is ${num2}`)
} else {
    console.log("They are equal")
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється false (хибноподібне, тобто кастується до false)
let x = NaN;

x = x || "default";
console.log(x)