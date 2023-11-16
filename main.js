// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let hello = 'hello world';
// console.log(hello.length);

// let lorem = 'lorem ipsum';
// console.log(lorem.length);

// let js = 'javascript is cool';
// console.log(js.length);
// -------------------------------------------------------------

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення

// let hello = 'hello world';
// let toUpperCase = hello.toUpperCase();
// let toLowerCase = hello.toUpperCase().toLowerCase();

// let lorem = 'lorem ipsum';
// let toUpperCase = lorem.toUpperCase();
// let toLowerCase = lorem.toUpperCase().toLowerCase();

// let js = 'javascript is cool'
// let toUpperCase = js.toUpperCase();
// let toLowerCase = js.toUpperCase().toLowerCase();

// ----------------------------------------------------------------

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let trim = str.trim();
// ------------------------------------------------------------------

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let stringToArray = str.split(' ')
// ----------------------------------------------------------------------

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// let map = arr.map((item) => item.toString())
// console.log(map);

// ----------------------------------------------------------------------------

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

// let nums = [11,21,3];

// function sortNums(nums, direction) {
//     if (direction === 'ascending') {
//        return nums.sort((u1, u2) => {
//         return u1 - u2;
//        })
//     } else {
//         return nums.sort((u1, u2) => {
//             return u2 - u1;
//         })
//     }
// }
// console.log(sortNums(nums, 'descending'));
// -------------------------------------------------------------------------

// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let sortMonth = coursesAndDurationArray.sort((u1, u2) => {
//     return u1.monthDuration - u2.monthDuration;
// });

// let filterCourses = coursesAndDurationArray.filter((item, index) => {
//     if (item.monthDuration > 5) {
//         return item;
//     }
// });
//-----------------------------------------------------------------------------

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         // value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color: '', // 'red','black'
// }

// let deck = [
//     {value: '6', cardSuit: 'spade', color: 'black'},
//     {value: '6', cardSuit: 'diamond', color: 'red'},
//     {value: '6', cardSuit: 'heart', color: 'red'},
//     {value: '6', cardSuit: 'clubs', color: 'black'},
//     {value: '7', cardSuit: 'spade', color: 'black'},
//     {value: '7', cardSuit: 'diamond', color: 'red'},
//     {value: '7', cardSuit: 'heart', color: 'red'},
//     {value: '7', cardSuit: 'clubs', color: 'black'},
//     {value: '8', cardSuit: 'spade', color: 'black'},
//     {value: '8', cardSuit: 'diamond', color: 'red'},
//     {value: '8', cardSuit: 'heart', color: 'red'},
//     {value: '8', cardSuit: 'clubs', color: 'black'},
//     {value: '9', cardSuit: 'spade', color: 'black'},
//     {value: '9', cardSuit: 'diamond', color: 'red'},
//     {value: '9', cardSuit: 'heart', color: 'red'},
//     {value: '9', cardSuit: 'clubs', color: 'black'},
//     {value: '10', cardSuit: 'spade', color: 'black'},
//     {value: '10', cardSuit: 'diamond', color: 'red'},
//     {value: '10', cardSuit: 'heart', color: 'red'},
//     {value: '10', cardSuit: 'clubs', color: 'black'},
//     {value: 'jack', cardSuit: 'spade', color: 'black'},
//     {value: 'jack', cardSuit: 'diamond', color: 'red'},
//     {value: 'jack', cardSuit: 'heart', color: 'red'},
//     {value: 'jack', cardSuit: 'clubs', color: 'black'},
//     {value: 'queen', cardSuit: 'spade', color: 'black'},
//     {value: 'queen', cardSuit: 'diamond', color: 'red'},
//     {value: 'queen', cardSuit: 'heart', color: 'red'},
//     {value: 'queen', cardSuit: 'clubs', color: 'black'},
//     {value: 'king', cardSuit: 'spade', color: 'black'},
//     {value: 'king', cardSuit: 'diamond', color: 'red'},
//     {value: 'king', cardSuit: 'heart', color: 'red'},
//     {value: 'king', cardSuit: 'clubs', color: 'black'},
//     {value: 'ace', cardSuit: 'spade', color: 'black'},
//     {value: 'ace', cardSuit: 'diamond', color: 'red'},
//     {value: 'ace', cardSuit: 'heart', color: 'red'},
//     {value: 'ace', cardSuit: 'clubs', color: 'black'},
//     {value: 'joker', cardSuit: 'spade', color: 'black'},
//     {value: 'joker', cardSuit: 'diamond', color: 'red'},
//     {value: 'joker', cardSuit: 'heart', color: 'red'},
//     {value: 'joker', cardSuit: 'clubs', color: 'black'},
// ];

// let findSpadeAce = deck.find(item => item.value === 'ace' && item.cardSuit === 'spade')

// let findAllSix = deck.filter(item => item.value === '6')

// let findAllRed = deck.filter(item => item.color === 'red')

// let findAllDiamonds = deck.filter(item => item.cardSuit === 'diamond')

// let findAllClubsMoreNine = deck.filter(item => item.value >= '9' && item.cardSuit === 'clubs')
