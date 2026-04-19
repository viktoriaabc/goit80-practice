// 1 DOM
// Створення елементів
// Історія

// Потрібно динамічно створити список категорій без використання HTML.

// HTML
// <ul class="categories"></ul>
// Дані
// const categories = ['Cars', 'Books', 'Games'];
// ТЗ
// для кожного елемента масиву:
// створити <li>
// вставити текст
// додати всі елементи в <ul>
// додати клас category-item кожному <li>
// const categories = ['Cars', 'Books', 'Games'];

// const refs = {
//   categoriesList: document.querySelector("categories"),// посилання на об'єкт
// };
// console.log(refs.categoriesList);

// function createCategoriesItem(category) {
//   const item = document.createElement("li");
//   item.classList.add("category-item");
//   item.textContent = category;
//   return item;
// }

// //ця функція викликається для кожного ел масиву під час кожної ітерації

// const elements = categories.map(createCategoriesItem);
// //const createCategoriesItem = categories.map(category => {});
// console.log(elements);
// refs.categoriesList.append(...elements);
// console.log(refs.categoriesList);

//2

// У блоці відгуків є тестові картки, які не повинні потрапити в фінальну версію сторінки. Їх треба прибрати з DOM.

// HTML
// <div class="reviews">
//   <div class="review-card">Great service</div>
//   <div class="review-card test">Test review 1</div>
//   <div class="review-card">Fast delivery</div>
//   <div class="review-card test">Test review 2</div>
// </div>
// ТЗ
// знайди всі елементи з класом test
// видали їх зі сторінки
// після видалення знайди всі .review-card
// виведи в консоль, скільки реальних карток залишилось

// const fakeCards = document.querySelectorAll(".test");
// console.log(fakeCards);

// const cards = fakeCards.forEach(card => card.remove());
// const realCards = document.querySelectorAll(".review-card");

// console.log(realCards.length);

//3 DOM event
// Додавання учасників у список

// Історія
// Команда робить маленький внутрішній інструмент для реєстрації учасників події. Менеджеру не потрібна складна форма — достатньо поля для імені, кнопки та списку, який одразу показує, кого вже додали.

// Що має працювати в результаті
//     • Після кліку на кнопку ім’я з інпута додається в список.
//     • Якщо поле порожнє або містить лише пробіли, новий елемент не створюється.
//     • Після успішного додавання інпут очищається.
//     • Кожен новий учасник має додаватися окремим елементом списку.
// HTML
// { <div class="participants-widget">
//   <input type="text" class="participant-input" placeholder="Введіть ім'я" />
//   <button type="button" class="add-participant">Додати</button>
//   <ul class="participants-list"></ul>
// </div>
// }

// 4
// Додавання задач у to-do список
// Контекст: Користувач планує день у невеликому вебзастосунку. Після натискання кнопки введений текст повинен перетворюватися на новий пункт списку.
// Базовий HTML:
// <section class="task todo-task">
//   <h2>Мої справи</h2>
//   <div class="controls">
//     <input class="task-input" type="text" placeholder="Нова задача" />
//     <button class="add" type="button">Add task</button>
//   </div>
//   <ul class="list"></ul>
// </section>
// Розширене ТЗ:
//     • Після кліку на кнопку потрібно створити новий елемент <li> і додати його в кінець списку .list.
//     • Текст нового пункту береться з поля .task-input.
//     • Якщо поле порожнє або містить лише пробіли, новий пункт не додається.
//     • Після успішного додавання поле вводу має очищатися.
//     • Кожне нове завдання повинно додаватися окремим рядком, а не замінювати попередні.

// const refs = {
//   inputTask: document.querySelector(".task-input"),
//   addBtn: document.querySelector(".add"),
//   list: document.querySelector(".list"),
// };

// refs.addBtn.addEventListener("click", onAddBtnClick);

// function onAddBtnClick (event) {
//   // console.log("event");//test
//   const inputText = refs.inputTask.value.trim();
//   // console.log(inputText);
//   if(!inputText) {
//     return;
//   }
//   const liText = `<li>${inputText}</li>`;
//   refs.list.insertAdjacentHTML("beforeend", liText);
//   refs.inputTask.value = "";
// }

//5 +CSS
// body {
//   --text: #6b6375;
//   --text-h: #08060d;
//   --bg: #fff;
//   --border: #e5e4e7;
//   --code-bg: #f4f3ec;
//   --accent: #aa3bff;
//   --accent-bg: rgba(170, 59, 255, 0.1);
//   --accent-border: rgba(170, 59, 255, 0.5);
//   --social-bg: rgba(244, 243, 236, 0.5);
//   --shadow:
//     rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.05) 0 4px 6px -2px;

//   --sans: system-ui, 'Segoe UI', Roboto, sans-serif;
//   --heading: system-ui, 'Segoe UI', Roboto, sans-serif;
//   --mono: ui-monospace, Consolas, monospace;

//   font: 18px/145% var(--sans);
//   letter-spacing: 0.18px;
//   color-scheme: light dark;
//   color: var(--text);
//   background: var(--bg);
//   font-synthesis: none;
//   text-rendering: optimizeLegibility;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;

//   @media (max-width: 1024px) {
//     font-size: 16px;
//   }
// }

// .dark {
//   --text: #9ca3af;
//   --text-h: #f3f4f6;
//   --bg: #16171d;
//   --border: #2e303a;
//   --code-bg: #1f2028;
//   --accent: #c084fc;
//   --accent-bg: rgba(192, 132, 252, 0.15);
//   --accent-border: rgba(192, 132, 252, 0.5);
//   --social-bg: rgba(47, 48, 58, 0.5);
//   --shadow:
//     rgba(0, 0, 0, 0.4) 0 10px 15px -3px, rgba(0, 0, 0, 0.25) 0 4px 6px -2px;
// }
// Перемикач теми сторінки
// Контекст: Користувач хоче перемикатися між звичайною та темною темою. Замовник просить реалізувати це через один клас на елементі body.
// Базовий HTML:
// <section class="task theme-task">
//   <h2>Theme switcher</h2>
//   <button class="theme" type="button">Змінити тему</button>
//   <p>Цей текст потрібен, щоб бачити зміну теми сторінки.</p>
// </section>
// Розширене ТЗ:
//     • Після першого кліку на кнопку до елемента body має додаватися клас dark.
//     • Після наступного кліку цей клас має видалятися.
//     • Припускається, що стилі теми вже описані в CSS або будуть додані окремо; задача стосується саме логіки перемикання.
//     • Логіка повинна впливати на всю сторінку, а не лише на кнопку або окремий блок.
// const refs1 = {
//   themeBtn: document.querySelector(".theme"),

// }
// refs1.themeBtn.addEventListener("click", onThemeBtnClick);
// function onThemeBtnClick() {
//   // console.log("hnh");
//   document.body.classList.toggle("dark");
// }
//body is always one so document.body without class

//6
//Живе прев’ю введеного імені
// Контекст: У формі реєстрації користувач вводить своє ім’я і відразу нижче бачить,
// як воно буде відображатися в профілі.

// Базовий HTML:
// <section class="task preview-task">
//   <h2>Прев’ю імені</h2>
//   <label>
//     Введіть ім’я:
//     <input class="input" type="text" placeholder="Ваше ім’я" />
//   </label>
//   <p class="output"></p>
// </section>

// Розширене ТЗ:
// •	При кожній зміні значення в полі вводу текст має одразу відображатися в елементі .output.
// •	Виводити потрібно саме поточний вміст input, без додаткових фраз на кшталт «Ваше ім’я:».
// •	Якщо користувач повністю очищає поле, блок .output також повинен ставати порожнім.
// •	Оновлення має відбуватися в момент введення, а не після втрати фокусу.

// const input = document.querySelector(".input");
// const output = document.querySelector(".output");

// input.addEventListener("input", event => {
//   output.textContent = input.value.trim();
//   console.log(input.value.trim().length);
//   }
// );

// TODO HOMEWORK 7

//TODO 1
//<ul id="categories">
//  <li class="item">
//    <h2>Animals</h2>
//    <ul>
//     <li>Cat</li>
//     <li>Hamster</li>
//     <li>Horse</li>
//     <li>Parrot</li>
//   </ul>
// </li>
// <li class="item">
//   <h2>Products</h2>
//   <ul>
//     <li>Bread</li>
//     <li>Parsley</li>
//     <li>Cheese</li>
//   </ul>
// </li>
// <li class="item">
//   <h2>Technologies</h2>
//   <ul>
//     <li>HTML</li>
//       <li>CSS</li>
//       <li>JavaScript</li>
//       <li>React</li>
//       <li>Node.js</li>
//     </ul>
//   </li>
// </ul>
// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

// На що буде звертати увагу ментор при перевірці:

// Кількість категорій, їх назва та кількість елементів отримані за допомогою властивостей і методів DOM-елементів
// Дані за кожною категорією були отримані й виведені в консоль у тілі циклу або методу forEach()
// У консолі має бути виведено наступне повідомлення:

// const items = Array.from(document.querySelectorAll("#categories .item"));//array methods
// console.log(`Total number of items is ${items.length}`);

// items.forEach( item => {
//   const title = item.children[0].textContent;
//   console.log(title);
//   const elements = item.querySelectorAll("li").length;
//   console.log(elements);
// });

//   варіант2
// const categories = document.querySelectorAll(".item");

// console.log("Кількість категорій:", categories.length);

// categories.forEach( category => {
//    const categoryTitle = category.querySelector("h2").textContent;
//   console.log("Категорія:", categoryTitle);
//   const elemQuantity = category.querySelectorAll("ul li").length;

//   const elemsLi = category.querySelectorAll("ul li");
//    як варіант
// const result = [...elemsLi].map(el => el.textContent);

//  або ще варіант
//  const result = [];
// elemsLi.forEach(el => {
//   result.push(el.textContent);
// });

// або ще варіант
//   elemsLi.forEach(elem => {
//     const elemLi = elem.textContent;
//     console.log("-", elemLi);
//   })
//   })

//TODO 2
// Напиши скрипт для створення галереї зображень на основі масиву даних. HTML містить список ul.gallery.
// <ul class="gallery"></ul>
// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
// Ти можеш створити й додати HTML-елементи, використовуючи document.createElement() і elem.append() або шаблонні рядки і elem.insertAdjacentHTML().
// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами через CSS класи.

// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
//     alt: "Alpine Spring Meadows",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
//     alt: "Nature Landscape",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
//     alt: "Lighthouse Coast Sea",
//   },
// ];

// 1 варіант : через  createElement +  append

// const createGalleryCard = images => {

// const listEl = document.createElement("li");
// listEl.classList.add("list-item");

// const listImgEl = document.createElement("img");
// listImgEl.classList.add("list-img");

// listImgEl.src = images.url;
// listImgEl.alt = images.alt;

// listEl.append(listImgEl);
// return listEl;

// };
// const gallaryCardArr = images.map(img => createGalleryCard(img));

// console.log(...gallaryCardArr);
// const list = document.querySelector(".gallery");
// list.append(...gallaryCardArr);

//2  варіант map + `..`
// const list = document.querySelector(".gallery");
// //  можна записати у функцію
// // function renderImages (images) {
// //   const markup = list.map...join
// // }
// // list.innerHTML = markup;
// //
// list.innerHTML = images.map(({url, alt}) =>
//   `<li class = "list-item"></li>
//   <img
//   class = "list-img"
//   src = "${url}"
//   alt = "${alt}"/>`
// ).join("");
// console.log(list);

//TODO 3

// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// На що буде звертати увагу ментор при перевірці:

// На елементі input#name-input прослуховується подія input
// Під час набору тексту в інпуті його поточне значення підставляється в span#name-output як ім’я для привітання
// Значення в інпуті очищене від пробілів по краях
// Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous"

// const input = document.getElementById("name-input");
// const output = document.getElementById("name-output");

// input.addEventListener("input", event => {
//    const value = input.value.trim();

//   if (value === "") {
//     output.textContent = "Anonymous";
//   } else {
//     output.textContent = value;
//   }
// });
//2 варіант
//input.addEventListener("input", event => {
//   const value = event.target.value.trim();

//   output.textContent = value === "" ? "Anonymous" : value;
// });

// TODO 4/
// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Log in</button>
// </form>

// відправлення форми form.login-form повинна відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.


// На що буде звертати увагу ментор при перевірці:

// Прослуховується подія submit
// Під час відправлення форми сторінка не перезавантажується
// Якщо при сабміті у формі є незаповнені поля, виводиться alert
// При сабміті в консоль виводиться об’єкт з двома властивостями, де ключі — це ім’я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях
// Після сабміту елементи форми очищаються
// const registerForm = document.querySelector(".login-form");
// registerForm.addEventListener("submit", handleSubmit);
// function handleSubmit (event) {
//   event.preventDefault();
//   const form = event.target;
//   const refs = {
//     email : form.elements.email.value.trim(),
//     password : form.elements.password.value.trim(),
//   };
 
//   if (refs.email === "" || refs.password === "") {
//     alert('All form fields must be filled in');
//     return;
//   }
//   return console.log(refs);
//   form.reset;
// }

//TODO 5
// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.
// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерування випадкового кольору використовуй функцію getRandomHexColor().
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Зверни увагу, що функція getRandomHexColor() повертає колір у hex-форматі, в той час, як колір фону на <body> буде у форматі rgb. Це нормально й не потребує якихось правок.
// На що буде звертати увагу ментор при перевірці:

// Фон на <body> задається тільки після кліку на button.change-color
// При кожному кліку на елемент button.change-color фон <body> зафарбовується новим рандомним кольором
// На <body> і span.color значення одного й того самого кольору

// const refs = {
// btn : document.querySelector(".change-color"),
// span : document.querySelector(".color"),
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// refs.btn.addEventListener("click", () => {
//   const color = getRandomHexColor();
//   document.body.style.backgroundColor = color;
//   refs.span.textContent = color;
// });



// TODO GPT---------------------------------------------------------

//1 3. Додати новий елемент
//<ul id="list"></ul>
// const list = document.getElementById("list");
// const liOne = document.createElement("li");
// liOne.textContent = "Перший пункт";
// list.append(liOne);
// //list.insertAdjacentElement("beforeend", liOne);
//2 1. Знайти і вивести текст
//<h1 id="title">Привіт, світ!</h1>
// const title = document.getElementById("title");
// console.log(title.textContent);
// console.log(title.innerHTML);
//3 2. Змінити текст елемента
// const text = document.querySelector(".text");
// text.textContent = "Новий текст";
// 👉 HTML:

// <p class="text">Старий текст</p>

// 👉 Задача:

// Знайди <p>
// Заміни текст на "Новий текст"
// const p1 = document.querySelector(".text");
// p1.textContent = "Новий текст";

// 🔹 4. Додати кілька елементів (цикл)

// 👉 HTML:

// <ul id="list"></ul>

// 👉 Задача:

// // Є масив:
// const items = ["яблуко", "банан", "апельсин"];
// // Для кожного елемента створи <li>
// // Додай їх у список
// // додати в <ul id="list">
// // 👉 зроби через createElement (не innerHTML)

//  const list = document.getElementById("list");
// //  console.log(list);

//  items.forEach(item => {
//   const listItem = document.createElement("li");
//   listItem.textContent = item;
//   list.append(listItem);
//  })

// list.style.listStyle = "none";
// list.style.padding = "0";
// console.log(list);

// 🔹 5. Обробка кліку (event)

// 👉 HTML:

// <button id="btn">Натисни мене</button>
//  <p id="message"></p>

// 👉 Задача:

// При кліку на кнопку:
// в <p> з’являється текст "Кнопка натиснута!"

// const btn1 = document.getElementById("btn");
// const message = document.getElementById("message");
// btn1.addEventListener("click", () => {
//  return message.textContent = "Кнопка натиснута!";
// })

// 🟢 Задача 1 (майже як твоя, але з нюансом)

// 👉 Якщо користувач вводить текст — показуй його ВЕЛИКИМИ літерами
// 👉 Якщо пусто або пробіли → "No text"

// HTML:
// <input id="input-1" />
// <p id="output-1">No text</p>
// const input1 = document.querySelector("#input-1");
// const output1 = document.querySelector("#output-1");
// input1.addEventListener("input", event => {
//   const value = event.target.value.trim();
//  output1.textContent = value === "" ? "No text" : value.toUpperCase();

// });

//2 варіант
//   if (value === "") {
//     output1.textContent = "No text";
//   } else {
//     output1.textContent = value.toUpperCase();
//   }
// });

// 🟡 Задача 2 (логіка + умова)

// 👉 Якщо довжина тексту < 5 → "Too short"
// 👉 Якщо ≥ 5 → показати текст

// ❗ Але:

// пробіли по краях ігноруються
// HTML:
// <input id="input-2" />
// <p id="output-2"></p>
// const input2 = document.getElementById('input-2');
// const output2 = document.getElementById('output-2');
// input2.addEventListener('input', event => {
//   const value = event.currentTarget.value.trim();
//   output2.textContent =
//     value === '' 
//     ? '' 
//     : value.length < 5 
//     ? 'Too short' : value;
// });

// 🔴 Задача 3 (реальний сценарій)

// 👉 Користувач вводить ім’я
// 👉 Показати:

// "Hello, ІМ’Я" якщо є текст
// "Enter your name" якщо пусто

// ❗ Плюс:

// перша літера має бути велика (Viktoria, а не viktoria)
// HTML:
// <input id="input-3" />
// <p id="output-3">Enter your name</p>
// 🧠 Підказки (якщо застрягнеш)
// .trim() — обов’язково
// .length — для довжини
// .toUpperCase() — для великого тексту
// для першої букви:
// // value[0].toUpperCase() + value.slice(1)
// const input3 = document.getElementById("input-3");
// const output3 = document.getElementById("output-3");
// input3.addEventListener("input", event => {
// const value = event.currentTarget.value.trim();
// if(value === "") {
//   return output3.textContent = "Enter your name";
// } 
//   const nameUser = value[0].toUpperCase() + value.slice(1);

//  output3.textContent = `Hello, ${nameUser}`;
// });