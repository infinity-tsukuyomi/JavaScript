// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let user1 = new User(1, 'vasya', 'sumailov', 'bla@ukr.com', '+380731289442');
let user2 = new User(2, 'petya', 'sumailov', '123@ukr.com', '+380931249442');
let user3 = new User(3, 'sereja', 'sidorov', 'sadad@ukr.com', '+380312894421');
let user4 = new User(4, 'semen', 'kost', 'jw1wwj1@ukr.com', '+380731289212');
let user5 = new User(5, 'misha', 'pyatochkin', 'qwe@ukr.com', '+380894289442');
let user6 = new User(6, 'vadim', 'serj', 'zxc@ukr.com', '+380731289442');
let user7 = new User(7, 'olya', 'olyachkina', 'dofo@ukr.com', '+380139289442');
let user8 = new User(8, 'oksana', 'sobakova', 'kdsa@ukr.com', '+38073125678');
let user9 = new User(9, 'fedya', 'kotov', '3901@ukr.com', '+380731284212');
let user10 = new User(10, 'ruslan', 'degot', 'odfs@ukr.com', '+380731289872');

let users = [];
users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)
console.log(users);
// -----------------------------------------------------------------------------------

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)


let filter = users.filter((user) => user.id % 2 === 0)
console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let arrSort = arr.sort((u1, u2) => u1-u2)
// console.log(arrSort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, inventor, year, maxSpeed, volume) {
    this.model = model;
    this.inventor = inventor;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.drive = function (maxSpeed) {
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`
    }
    this.info = function (info) {
        return `${this.model} - model`
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.driver =
}
let car1 = new Car('JLS', 'Mercedes', 2018, 365, 6);
console.log(car1);
console.log(car1.increaseMaxSpeed(150));
console.log(car1.changeYear(2008));
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



// -створити класс/функцію конструктор попелюшка з полярми ім'я, вік, озмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Doll {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let array = []