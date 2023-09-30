 let user = 0;
 for (let i = 0; i < 10; i++) {
     let info = {
         imya: prompt('Введите имя пользователя'),
         age: prompt('Введите возвраст пользователя'),
     }
    
     console.log(`Пользователь ${user += 1} 
 Имя - ${info.imya} 
 Возраст - ${info.age}`);

 }



let rec = receipt()
let sum = 0
let text = ''
let food = ''
for (let key in rec) {
    sum += rec[key].price;
    text += rec[key].info;
    food += key;

}
console.log(`Вы заказали ${food+text} | стоимость: ${sum + 9000} сум с доставкой (9000)`);

