// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

/* let elementWithId = document.getElementById('main_header');
elementWithId.className.add('nov-2023') */
// ---------------------------------------------------------
// b) робить ширину елементу ul 400px

/* let ul = document.getElementsByTagName('ul');
ul.style.width = '400px';
} */
// ---------------------------------------------------------
// c) робить ширину всіх елементів з класом linkList шириною 50%

/* let elementsByClassName = document.getElementsByClassName('linkList');
for (const li of elementsByClassName) {
    li.style.width = '50%';
} */
// ---------------------------------------------------------
// d) отримує текст який зберігається в елементі з класом listElement2

/* function addText(text) {
    let elementsByClassName = document.getElementsByClassName('listElement2');
    elementsByClassName.innerText = text;
} */
// ---------------------------------------------------------
// e) отримує всі елементи li та змінює ім колір фону на сірий

/* let allLi = document.getElementsByTagName('li');
for (const allLiElement of allLi) {
    allLiElement.style.background = 'gray';
} */
// ---------------------------------------------------------
// f) отримує всі елементи 'a' та додає їм клас anchor

/* let aList = document.getElementsByTagName('a');
for (const item of aList) {
    item.classList.add('anchor');
} */

// ---------------------------------------------------------
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

/* let aList = document.getElementsByTagName('a');
for (const item of aList) {
    if (item.innerText === 'link3') {
        item.style.fontSize = '40px';
    }
} */

// ---------------------------------------------------------
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

/* let aList = document.getElementsByTagName('a');
for (const item of aList) {
    let classNew = item.innerText;
    item.classList.add(item.innerText);
} */
// ---------------------------------------------------------
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

/* let subHeaderElements = document.getElementsByClassName('sub-header');
for (const subheader of subHeaderElements) {
    subheader.style.color = prompt('Введите цвет background');
} */
// ---------------------------------------------------------
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

/* let subHeaderElements = document.getElementsByClassName('sub-header');
for (const subheader of subHeaderElements) {
    if (subheader.innerText.includes('content 2 segment')) {
        subheader.style.color = prompt('Введите цвет background');
    }
} */
// ---------------------------------------------------------
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

/* document.getElementsByClassName('content_1').innerText = prompt(); */
// ---------------------------------------------------------
// l) отримати елементи p та змінити їм padding на 20px

/* let p = document.getElementsByTagName('p');
for (const pElement of p) {
    pElement.style.padding = '20px';
} */
// ---------------------------------------------------------
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let elementsByClassName = document.getElementsByClassName('text2');
elementsByClassName.innerText = 'nov-2023';