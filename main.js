// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

/* let getElementById= document.getElementById('content');
console.log(getElementById) */
// -----------------------------------------------------------
// -- отримує текст з блоку з id "rules"

/* let getElementById1 = document.getElementById('rules');
console.log(getElementById1.innerText); */
// -----------------------------------------------------------
// -- замініть текст параграфа з id 'content' на будь-який інший

/* let getElementById = document.getElementById('content');
getElementById.innerText = 'dijaidaiojdaijodaiojdaioad'; */
// -----------------------------------------------------------
// -- замініть текст параграфа з id 'rules' на будь-який інший

/* let getElementById1 = document.getElementById('rules');
getElementById1.innerText = '213147141414981skdamkldakkldam'; */
// -----------------------------------------------------------
// -- змініть кожному елементу колір фону на червоний

/* function reCall(startElement) {
    if (startElement.children.length) {
        for (const element of startElement.children) {
            element.style.background = 'red';
        }
    }
}
    reCall(document.body); */
// -----------------------------------------------------------
// -- змініть кожному елементу колір тексту на синій

/* function reCall1(startElement) {
    if (startElement.children.length) {
        for (const element of startElement.children) {
            element.style.color = 'blue';
        }
    }
}
reCall1(document.body); */
// -----------------------------------------------------------
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

/* let divWithIdRules = document.getElementById('rules');
console.log(divWithIdRules.classList); */
// -----------------------------------------------------------
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
/* let liWithColorRed = document.getElementsByClassName('fc_rules');
for (const fcr of liWithColorRed) {
    fcr.style.color = 'red';
} */