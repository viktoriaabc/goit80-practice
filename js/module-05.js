// // 3  Для окремого блоку на сайті замовник хоче вивести лише три найдорожчі товари, які реально є в наявності. У підсумку потрібні тільки назви. Дані
// const products = [
//   { name: "A", price: 100, inStock: true },
//   { name: "B", price: 500, inStock: true },
//   { name: "C", price: 300, inStock: false },
//   { name: "D", price: 800, inStock: true },
//   { name: "E", price: 200, inStock: true },
//   { name: "F", price: 1200, inStock: false },
//   { name: "G", price: 950, inStock: true }
// ];
// // ТЗ Створи об’єкт topProducts з методом: •
// //  getTopThreeAvailable() — має:
//   //  1. залишити тільки товари, які є в наявності
//   //  2. відсортувати їх за ціною від більшої до меншої
//   //  3. взяти перші три товари 4. повернути масив лише з назв
// //  Заготовка
//  const topProducts = {
//   products,
//   getTopThreeAvailable() {
//     return this.products.filter(product => product.inStock).toSorted((a, b) => b.price - a.price).slice(0, 3).map(product => product.name);
//   }
//  };

//   // Перевірка
//   console.table(topProducts.getTopThreeAvailable()); // ["G", "D", "B"]

// 4 Продажі
// Дано
// const sales = [
//   { manager: 'Ivan', amount: 500, success: true },
//   { manager: 'Olha', amount: 1200, success: false },
//   { manager: 'Marta', amount: 700, success: true },
//   { manager: 'Taras', amount: 300, success: true },
// ];

// Потрібно
// 1. залишити тільки success === true
// 2. відсортувати за amount за спаданням
// 3. отримати масив імен менеджерів
// 4. порахувати загальну суму amount успішних продажів

// TODO
// зроби окремо:
// getSuccessfulManagers()
// getSuccessfulTotal()
// const salesClone = structuredClone(sales); -if need

// const getSuccessfulManagers = sales =>
//   sales
//     .filter(sale => sale.success)
//     .toSorted((a, b) => b.amount - a.amount)
//     .map(sale => sale.manager);

// const getSuccessfulTotal = sales =>
//   sales
//     .filter(sales => sales.success)
//     .reduce((acc, sale) => {
//       return acc + sale.amount;
//     }, 0);
// // Перевірка
// console.log(getSuccessfulManagers(sales)); //['Marta', 'Ivan', 'Taras']
// console.log(getSuccessfulTotal(sales)); // 1500

// 5 THIS
// У застосунку для онлайн-курсів потрібно показувати коротку інформацію про користувача в різних блоках інтерфейсу. Частину методів потрібно передавати окремо, тому важливо правильно працювати з this.

// Дані

// ТЗ
// Створи об’єкт profileManager.
// Додай у нього властивість user.
// Створи метод getUserInfo(), який повертає рядок у форматі:
// "Олена, 23 роки, м. Львів".
// Створи метод getGreeting(), який повертає рядок:
// "Вітаємо, Олена!".
// У методах обов’язково використовуй this.
// Передай getGreeting() в окрему змінну через bind і виклич її.
// Через call виклич getUserInfo() для іншого користувача.
// Нічого не мутуй.
// Заготовка коду
// const user = {
//   name: 'Олена',
//   age: 23,
//   city: 'Львів',
// };

// const profileManager = {
//   user,

//   getUserInfo() {
//     return `${this.user.name}, ${this.user.age} роки, м.${this.user.city}`;
//   },

//   getGreeting() {
//     return `Вітаємо, ${this.user.name}!`;
//   },
// };

// console.log(profileManager.getUserInfo());
// // 'Олена, 23 роки, м. Львів'

// console.log(profileManager.getGreeting());
// // 'Вітаємо, Олена!'

// const boundGreeting = profileManager.getGreeting.bind(profileManager);
// console.log(boundGreeting());
// // 'Вітаємо, Олена!'

// const anotherProfile = {
//   user: {
//     name: 'Максим',
//     age: 28,
//     city: 'Київ',
//   },

//   ???   function getYearWord(age) {
//   const lastDigit = age % 10;
//   const lastTwoDigits = age % 100;

//   if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
//     return 'років';
//   }
//   if (lastDigit === 1) {
//     return 'рік';
//   }
//   if (lastDigit >= 2 && lastDigit <= 4) {
//     return 'роки';
//   }
//   return 'років';
// }
// };

// console.log(profileManager.getUserInfo.call(anotherProfile));
// // 'Максим, 28 років, м. Київ'

// 6 THIS
//  Коротка історія

// На стрімінговій платформі є блок “Вечірній розклад”.
// Редактор формує список доступних трансляцій на сьогодні, але окремо потрібно ще:

// порахувати, скільки всього хвилин триватимуть лише відкриті ефіри,
// підготувати короткий текст для банера,
// перевірити, як той самий механізм працюватиме для іншого дня.

// Проблема в тому, що частину методів платформа передає в інший модуль інтерфейсу, тому без правильного контексту все ламається.

// Дані
const todaySchedule = {
  date: '2026-04-09',
  streams: [
    { title: 'Ранкові новини', duration: 30, isOpen: true },
    { title: 'Інтерв’ю з розробником гри', duration: 45, isOpen: false },
    { title: 'Огляд нових серіалів', duration: 25, isOpen: true },
    { title: 'Вечірній лайв', duration: 60, isOpen: true },
  ],
};

const tomorrowSchedule = {
  date: '2026-04-10',
  streams: [
    { title: 'Техно-підсумки тижня', duration: 40, isOpen: true },
    { title: 'Закритий Q&A', duration: 50, isOpen: false },
    { title: 'Нічний стрім', duration: 90, isOpen: true },
  ],
};

const streamScheduler = {
  schedule: todaySchedule,

  getOpenStreamTitles() {
    return this.schedule.streams
      .filter(stream => stream.isOpen)
      .map(stream => stream.title);
  },
  getOpenStreamsDuration() {
    return this.schedule.streams
      .filter(stream => stream.isOpen)
      .reduce((acc, stream) => acc + stream.duration, 0);
  },
  getPromoMessage() {
    const count = this.getOpenStreamTitles().length;
    console.log(count);
    const minutes = this.getOpenStreamsDuration();
    return `Сьогодні доступно ${count} відкриті трансляції на ${minutes} хвилин`;
  },
};
const boundPromoMessage = streamScheduler.getPromoMessage.bind(streamScheduler);

const getTomorrowPromoMessage = () =>
  streamScheduler.getPromoMessage.call({
    ...streamScheduler,
    schedule: tomorrowSchedule,
    //getOpenStreamTitles: "", записати потрібне значення яке змінить шедюл на потрібний томоров, так само можна і змінити знач функції після розпилу
  });

// ТЗ
// Побудуй логіку так, щоб:

// можна було отримати масив назв лише відкритих трансляцій;
// можна було порахувати загальну тривалість лише відкритих трансляцій;
// можна було сформувати рекламний рядок у форматі:
// "Сьогодні доступно 3 відкриті трансляції на 115 хвилин";
// один із методів коректно працював після передачі в окрему змінну;
// той самий метод для банера можна було застосувати до іншого розкладу без дублювання логіки.

// У розв’язку обов’язково використай:

// this
// bind
// call
// Перевірка
console.log(streamScheduler.getOpenStreamTitles());
// [ 'Ранкові новини', 'Огляд нових серіалів', 'Вечірній лайв' ]

console.log(streamScheduler.getOpenStreamsDuration());
// 115

console.log(streamScheduler.getPromoMessage());
// 'Сьогодні доступно 3 відкриті трансляції на 115 хвилин'

console.log(boundPromoMessage());
//'Сьогодні доступно 3 відкриті трансляції на 115 хвилин'

console.log(getTomorrowPromoMessage());
//'Сьогодні доступно 2 відкриті трансляції на 130 хвилин'

// 2 варіант рішення

// const streamScheduler = {
//   getOpenStream() {
//     return this.streams.filter(stream => stream.isOpen);
//   },

//   getOpenStreamTitles() {
//     return this.streams
//       .filter(stream => stream.isOpen)
//       .map(stream => stream.title);
//   },

//   getOpenStreamsDuration() {
//     return this.streams
//       .filter(stream => stream.isOpen)
//       .reduce((acc, stream) => acc + stream.duration, 0);
//   },

//   getPromoMessage() {
//     const openStreams = this.streams.filter(stream => stream.isOpen);
//     const totalDuration = openStreams.reduce(
//       (acc, stream) => acc + stream.duration,
//       0
//     );

//     return `Сьогодні доступно ${openStreams.length} відкриті трансляції на ${totalDuration} хвилин`;
//   },
// };

// console.log(streamScheduler.getOpenStreamTitles.bind(todaySchedule)());
// // [ 'Ранкові новини', 'Огляд нових серіалів', 'Вечірній лайв' ]

// console.log(streamScheduler.getOpenStreamsDuration.bind(todaySchedule)());
// // 115

// console.log(streamScheduler.getPromoMessage.bind(todaySchedule)());
// // 'Сьогодні доступно 3 відкриті трансляції на 115 хвилин'

// console.log(streamScheduler.getOpenStreamTitles.bind(tomorrowSchedule)());
// // [ 'Техно-підсумки тижня', 'Нічний стрім' ]

// console.log(streamScheduler.getOpenStreamsDuration.bind(tomorrowSchedule)());
// // 130

// console.log(streamScheduler.getPromoMessage.bind(tomorrowSchedule)());
// // 'Сьогодні доступно 2 відкриті трансляції на 130 хвилин'

// 7
const store = {
  orders: [
    {
      id: 1,
      customerId: 3,
      products: [
        { name: 'Ноутбук', price: 1200, qty: 2 },
        { name: 'Мишка', price: 25, qty: 3 },
      ],
    },
    {
      id: 2,
      customerId: 1,
      products: [
        { name: 'Монітор', price: 800, qty: 1 },
        { name: 'Клавіатура', price: 120, qty: 2 },
      ],
    },
    {
      id: 3,
      customerId: 2,
      products: [
        { name: 'Ноутбук', price: 1200, qty: 1 },
        { name: 'Навушники', price: 200, qty: 1 },
      ],
    },
    {
      id: 4,
      customerId: 1,
      products: [
        { name: 'Мишка', price: 25, qty: 5 },
        { name: 'Килимок', price: 15, qty: 2 },
      ],
    },
    {
      id: 5,
      customerId: 3,
      products: [{ name: 'Монітор', price: 800, qty: 2 }],
    },
  ],
  customers: [
    { id: 1, name: 'Аня', grade: 'VIP' },
    { id: 2, name: 'Боб', grade: 'Standard' },
    { id: 3, name: 'Віта', grade: 'VIP' },
  ],
};

const storeManager = {
  store,

  // Сума замовлення по id
  // getOrderTotal(1) → 2475
  getOrderTotal(orderId) {
    
    const order = this.store.orders.find(order => Number(order.id) === Number(orderId)); 
    // console.log(order);
    if (!order) {
     return `Замовлення не знайдено`;
    }
      return order.products.reduce((acc, product) => acc + product.price * product.qty, 0);
    },
  
  // Всі замовлення клієнта з сумою
  // getCustomerOrders(1) → [{ id: 2, total: 1040 }, { id: 4, total: 155 }]
  getCustomerOrders(customerId) {

  },

  // Статистика по кожному клієнту
  // getCustomerStats() → [
  //   { name: 'Аня', grade: 'VIP', ordersCount: 2, totalSpent: 1195 },
  //   { name: 'Боб', grade: 'Standard', ordersCount: 1, totalSpent: 1400 },
  //   { name: 'Віта', grade: 'VIP', ordersCount: 2, totalSpent: 4075 },
  // ]
  getCustomerStats() {},

  // Топ N товарів по кількості проданих штук
  // getTopProducts(3) → [
  //   { name: 'Мишка', totalQty: 8 },
  //   { name: 'Монітор', totalQty: 3 },
  //   { name: 'Ноутбук', totalQty: 3 },
  // ]
  getTopProducts(n) {},

  // Промо для VIP клієнтів з витратами понад 2000
  // getPromoMessage() → 'VIP клієнти з витратами понад 2000: Віта (4075 грн)'
  getPromoMessage() {},
};

console.log(storeManager.getOrderTotal.call(storeManager, 0));
