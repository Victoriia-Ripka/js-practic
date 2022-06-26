"use strict";
// ========== Модуль 2. Занятие 4. Функции ==========


// Example 1 - Индекс массы тела
// Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает индекс массы тела человека.
//Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
// Вес и высота будут специально переданы как строки. Нецелые числа могут быть заданы в виде 24.7 или 24,7,
//то есть в качестве разделителя дробной части может быть запятая.
// Индекс массы тела необходимо округлить до одной цифры после запятой;

// function calcBMI(weight, height) {
//   const weightNumber = parseFloat(weight.replace(',', '.'));
//   const heightNumber = parseFloat(height.replace(',', '.'));
//   const BMI = weightNumber / (heightNumber * heightNumber);
//   return BMI.toFixed(1);
// }


// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8


// Example 2 - Меньшее из чисел
// Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.

// function min(a, b) {
//   if (a < b) {
//     return a;
//   }
//   return b;
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1


// Example 3 - Площадь прямоугольника
// Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами,
// значения которых будут переданы в параметр dimensions в виде строки.
// Значения гарантированно разделены пробелом.

// function getRectArea(dimensions) {
//   let rect = dimensions.split(" ");
//   let area = rect[0] * rect[1] * 0.5;
//   return area;
// }

// console.log(getRectArea('8 11'));


// Example 4 - Логирование элементов
// Напиши функцию logItems(items), которая получает массив и использует цикл for,
// который для каждого элемента массива будет выводить в консоль сообщение в формате
// < номер элемента > - <значение элемента >.Нумерация элементов должна начинаться с 1.
// Например для первого элемента массива['Mango', 'Poly', 'Ajax']
// с индексом 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// function logItems(items) {
//   for (let i = 0; i < items.length; i ++){
//     console.log(`${i+1} - ${ items[i] }`);
//   }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);


// Example 5 - Логирование контактов
// Напиши функцию printContactsInfo(names, phones) которая выводит в консоль имя и телефонный номер пользователя.
// В параметры names и phones будут переданы строки имен и телефонных номеров, разделенные запятыми.
// Порядковый номер имен и телефонов в строках указывают на соответствие.
// Количество имен и телефонов гарантированно одинаковое.

// function printContactsInfo(names, phones) {
//   names = names.split(",");
//   phones = phones.split(",");
//   for (let i = 0; i < names.length; i += 1){
//     let info = names[i] +" "+ phones[i];
//     console.log(info);
//   }
// }

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );


// Example 6 - Поиск наибольшего элемента
// Напиши функцию findLargestNumber(numbers)которая ищет самое большое число в массиве.

// function findLargestNumber(numbers) {
//   let max = numbers[0];
//   for (let i = 1; i < numbers.length; i += 1){
//     if (numbers[i] > max) max = numbers[i];
//   }
//   return max;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83


// Example 7 - Среднее значение
// Напишите функцию calAverage() которая принимает произвольное кол - во аргументов и возвращает их среднее
// значение.Все аругменты будут только числами.

// function calAverage() {
//   let sum = 0;
//   for (const number of arguments) {
//     sum += number;
//   }
//   return sum / arguments.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2


// Example 8 - Форматирование времени
// Напиши функцию formatTime(minutes) которая переведёт значение minutes
//(количество минут) в строку в формате часов и минут HH: MM.

// function formatTime(minutes) {
//   const hours = Math.floor(minutes / 60);
//   const minute = minutes % 60;

//   const doubleDigitHours = String(hours).padStart(2, 0);
//   const doubleDigitMinutes = String(minute).padStart(2, 0);
//   return `${doubleDigitHours}:${doubleDigitMinutes}`;
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"


// Example 9 - Коллекция курсов (includes, indexOf, push и т. д.)
// Напишите функции для работы с коллекцией обучающих курсов courses:
// addCourse(name) - добавляет курс в конец коллекции
// removeCourse(name) - удаляет курс из коллекции
// updateCourse(oldName, newName) - изменяет имя на новое
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function addCourse(name) {
//   if (courses.includes(name)) {
//     console.log('У вас уже есть такой курс');
//   }
//   else return courses.push(name);
// }
// function removeCourse(name) {
//   if (courses.includes(name)) {
//     courses.splice(courses.indexOf(name), 1);
//   }
//   else console.log('Курс с таким имененем не найден');
// }
// function updateCourse(oldName, newName) {
//   if (courses.includes(oldName)) {
//     courses.splice(courses.indexOf(oldName), 1, newName);
//   }
//   else console.log('Курс с таким имененем не найден');
// }

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас уже есть такой курс'
// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс с таким имененем не найден'
// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']



// ========== Модуль 3. Занятие 5. Об'єкти ==========

// Example 1 - Основы обьектов
// Напиши скрипт, который, для объекта user, последовательно:
// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'eat',
//   premium: true,
//   mood: 'sad',
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = 'false';
// for (const key in user) {
//   console.log(key, " ", user[key]);
// }


// Example 2 - метод Object.values()
// У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для суммирования всех 
// зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, 
//то результат должен быть 0.

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};


// Example 3 - Массив объектов
// Напишите ф-цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов 
// и строку с названием камня. Ф - ция считает и возвращает общую стоимость камней с таким именем,
// ценой и количеством из обьекта

const stones = [
  { name: 'Изумруд', price: 1300, quantity: 4 },
  { name: 'Бриллиант', price: 2700, quantity: 3 },
  { name: 'Сапфир', price: 400, quantity: 7 },
  { name: 'Щебень', price: 200, quantity: 2 },
];


// Example 4 - Комплексные задачи
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором
//необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {},

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {},

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {},

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {},

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {},
};





// ========== Модуль 3. Занятие 6. &&& ==========


// ========== Модуль 4. Занятие 7. &&& ==========

// ========== Модуль 4. Занятие 8. &&& ==========
const bookShelf = {
  books: ["The last kingdom", "The guardian of dreams"],
  removeBook(bookName) {
    const index = this.books.indexOf(bookName);
    this.books.splice(index, 1);
    return `Deleting book ${bookName}`;
  },
  
  updateBook(oldName, newName){
    this.books.splice(oldName, 1, newName);
    return `Updating book ${oldName} to ${newName}`;
  },
};

console.log(bookShelf.removeBook('Red sunset'));
console.log(bookShelf.updateBook('Sands of dune', 'Dune'));