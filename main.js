// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let user1 = new User(1, 'vasya', 'sumailov', 'bla@ukr.com', '+380731289442');
// let user2 = new User(2, 'petya', 'sumailov', '123@ukr.com', '+380931249442');
// let user3 = new User(3, 'sereja', 'sidorov', 'sadad@ukr.com', '+380312894421');
// let user4 = new User(4, 'semen', 'kost', 'jw1wwj1@ukr.com', '+380731289212');
// let user5 = new User(5, 'misha', 'pyatochkin', 'qwe@ukr.com', '+380894289442');
// let user6 = new User(6, 'vadim', 'serj', 'zxc@ukr.com', '+380731289442');
// let user7 = new User(7, 'olya', 'olyachkina', 'dofo@ukr.com', '+380139289442');
// let user8 = new User(8, 'oksana', 'sobakova', 'kdsa@ukr.com', '+38073125678');
// let user9 = new User(9, 'fedya', 'kotov', '3901@ukr.com', '+380731284212');
// let user10 = new User(10, 'ruslan', 'degot', 'odfs@ukr.com', '+380731289872');

// let users = [];
// users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)
// console.log(users);
// // -----------------------------------------------------------------------------------

// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// // let filter = users.filter((user) => user.id % 2 === 0)
// // console.log(filter);

// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sort = users.sort((a, b) => a.id - b.id);
// console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }

// let client1 = new Client(1, 'Silva', 'Horche', 'smth@ukr.net', +38073112678, ['toy', 'ball', 'umbrella']);
// let client2 = new Client(2, 'David', 'Doole', 'edu@gmail.com', +38073975678, ['tube', 'pen', 'pencil', 'package']);
// let client3 = new Client(3, 'Maria', 'Sempa', 'sasas@ukr.net', +38073154678, ['glue', 'sandwitch', 'chair', 'dog', 'cat']);
// let client4 = new Client(4, 'Dmitriy', 'Nose', 'opeqp@ukr.net', +38073112378, ['toy']);
// let client5 = new Client(5, 'Nikolas', 'Paplishev', 'c,mz@ukr.net', +38062125678, ['doll', 'glass', 'plate', 'trousers']);
// let client6 = new Client(6, 'Ariel', 'Torres', 'ppsds@ukr.net', +38097531678, ['jeans', 'shirt', 'trainers', 'shoes', 'cap']);
// let client7 = new Client(7, 'Antares', 'Choe', 'wqdeqdas@ukr.net', +38073154378, ['hotdog', 'sauce', 'catchup', 'apple', 'orange', 'bubblegum']);
// let client8 = new Client(8, 'Liza', 'Sidorova', 'gjjas@ukr.net', +38073125609, ['juice', 'banana'])
// let client9 = new Client(9, 'Masha', 'Kome', 'zxc@ukr.net', +38073125651, ['bubblegum', 'sausage', 'computer', 'disc']);
// let client10 = new Client(10, 'Medina', 'Khalilova', 'qwe@ukr.net', +38073127128, ['keyboard', 'mouse', 'display', 'chair']);

// let clients = [];
// clients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10)
// console.log(clients);
// ---------------------------------------------------------------------------------------------------

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sort = clients.sort((a, b) => a.order < b.order);
// console.log(sort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, inventor, year, maxSpeed, volume) {
//     this.model = model;
//     this.inventor = inventor;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.drive = function (maxSpeed) {
//         return `їдемо зі швидкістю ${this.maxSpeed} на годину`
//     }
//     this.info = function (info) {
//         return `${this.model} - model, ${this.inventor} - company inventor, ${this.year} - year of creation, ${this.maxSpeed} - Max Speed, ${this.volume} - engine volume`
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {

// }
// let car1 = new Car('JLS', 'Mercedes', 2018, 365, 6);
// console.log(car1);
// console.log(car1.info());
// console.log(car1.increaseMaxSpeed);
// console.log(car1.changeYear());
// ------------------------------------------------------------------------

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, inventor, year, maxSpeed, volume) {
        this.model = model;
        this.inventor = inventor;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
        this.drive = function (maxSpeed) {
            return `їдемо зі швидкістю ${this.maxSpeed} на годину`
        }
        this.info = function (info) {
            return `${this.model} - model, ${this.inventor} - company inventor, ${this.year} - year of creation, ${this.maxSpeed} - Max Speed, ${this.volume} - engine volume`
        }
        this.increaseMaxSpeed = function (newSpeed) {
            this.maxSpeed = this.maxSpeed + newSpeed;
        }
        this.changeYear = function (newValue) {
            this.year = newValue;
        }
        this.addDriver = function (driver) {}
    }
}
let car1 = new Car('JLS', 'Mercedes', 2018, 365, 6);
console.log(car1);

// -створити класс/функцію конструктор попелюшка з полярми ім'я, вік, озмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Doll {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }

// let dolls = [];

//     let doll1 = new Doll('Masha', 17, 36);
//     let doll2 = new Doll('Natasha', 20, 37);
//     let doll3 = new Doll('Sasha', 14, 32);
//     let doll4 = new Doll('Katya', 16, 34);
//     let doll5 = new Doll('Oksana', 27, 41);
//     let doll6 = new Doll('Liza', 21, 39);
//     let doll7 = new Doll('Elza', 24, 40);
//     let doll8 = new Doll('Jenya', 15, 33);
//     let doll9 = new Doll('Anya', 18, 35);
//     let doll10 = new Doll('Nikol', 19, 38);

// dolls.push(doll1, doll2, doll3, doll4, doll5, doll6, doll7, doll8, doll9, doll10);
// console.log(dolls);

// class Prince {
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
// }

//     let prince = new Prince('Victor', 24, 36);

//     for (item of dolls) {
//         if (item.footSize === 36) {
//             console.log(item);
//         }
//     }

//     let find = dolls.find(value => value.footSize === 36);
//     console.log(find);