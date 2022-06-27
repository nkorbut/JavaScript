// console.log("1 ==" + true || true)
// // console.log("2 ==" + true || false)
// // console.log(false || true)

// // console.log(true && true)
// // console.log(false && true)

// let item_1 = 5;
// let item_2 = 100;

// if (item_1 > 3 || item_2 < 15) {
//     console.log("Idi Kuhat")
// } else {
//     console.log("Hodi golodniy")
// }

// if (item_1 > 3 && item_2 < 15) {
//     console.log("Idi Kuhat")
// } else {
//     console.log("Hodi golodniy")
// }

// let item_1 = 5;
// let item_2 = 100;
// let item_3 = 50;

// if (item_1 > 3 || item_2 < 15 && item_3 == 50) {
//     console.log("Idi Kuhat")
// } else {
//     console.log("Hodi golodniy")
// }

let item_1 = 0;
let item_2 = 20;
// while(true) {
//     console.log(item_1 + " = Idi Kuhat")
//     item_1++
// }
// while (item_1 < 20) {
//     console.log(item_1 + " = Idi Kuhat")
//     item_1++
// }

// while (item_1 < 20 || item_2 < 30) {
//     console.log(item_1 + " = Idi Kuhat")
//     console.log(item_2 + " = ------")
//     item_1++
//     item_2++
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i, "=FOR")
// }

// for (let temperature = 0; temperature < 10; temperature++) {
//     if (temperature < 3) {
//         console.log("temperature = ", temperature, "holodno")
//     } else if (temperature >= 3 && temperature < 7) {
//         console.log("temperature = ", temperature, "HOROSHO!!!")
//     } else {
//         console.log("temperature = ", temperature, "Kapec!!!")
//     }
// }

// let names = ['Kate',
//         'Alex',
//         'Ivan',
//         'Ignat',
//         'Andrey',
//         'Vika'
//     ]
// for (let item_1 in names) {
//     console.log(item_1, names[item_1])
// }
// for (item_1 of names) {
//     console.log(item_1)
// }
// for (item_1 of names) {
//     if (item_1 == 'Ignat') {
//         break;
//     }
//     console.log(item_1)
// }

let names = ['Kate',
    'Alex',
    'Ivan',
    'Ignat',
    'Andrey',
    'Vika'
]
let items = names.length
let count = 0
while (++count < items) {
    console.log(names[count])
}