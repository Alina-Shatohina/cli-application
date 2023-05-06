# Крок 1
Ініціалізується npm в проекті
В корені проекту створи файл index.js
Постав пакет nodemon як залежність nodemon як залежність розробки (devDependencies)
В файлі package.json додай "скрипти" для запуску index.js
Скрипт start який запускає index.js за допомогою node
Скрипт dev який запускає index.js за допомогою nodemon

# Крок 2
У корені проекту створи папку db. Для зберігання контактів завантаж і використовуй файл contacts.json, поклавши його в папку db.

У корені проекту створи файл contacts.js.

Зроби імпорт модулів fs і path для роботи з файловою системою
Створи змінну contactsPath і запиши в неї шлях до файлу contacts.json. Для складання шляху використовуй методи модуля path.
Додай функції для роботи з колекцією контактів. У функціях використовуй модуль fs та його методи readFile() і writeFile()
Зроби експорт створених функцій через module.exports
contacts.js
/*
 * Розкоментуйте і запиши значення
 * const contactsPath = ;
 */

// TODO: задокументувати кожну функцію
function listContacts() {
  // ...твій код
}

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

# Крок 3
Зроби імпорт модуля contacts.js в файлі index.js та перевір працездатність функції для роботи з контактами.

# Крок 4
В файлі index.js імпортується пакет yargs для зручного парса аргументів командного рядка. Використовуй готову функцію invokeAction() яка отримує тип виконуваної дії і необхідні аргументи. Функція викликає відповідний метод з файлу contacts.js передаючи йому необхідні аргументи.

// index.js
const argv = require("yargs").argv;

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      break;

    case "get":
      // ... id
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
Так само, ви можете використовувати модуль [commander] (https://www.npmjs.com/package/commander) для парсинга аргументів командного рядка. Це більш популярна альтернатива модуля yargs

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      break;

    case "get":
      // ... id
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
# Крок 5

Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list" - https://monosnap.com/file/z0aFVZT7cAW92VzH5mMkOtgXlFzeB8

Отримуємо контакт по id
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6 - https://monosnap.com/file/kYQINXqPudzG4zqBcm42pGgo89oSHR

Додаємо контакт
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22 - https://monosnap.com/file/WJ49DIUsgorUjKsj80Q6v3nnsSj0h1

Видаляємо контакт
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH - https://monosnap.com/file/yrPb9yb3phA0FSrbNgqs3R8niW3Gou