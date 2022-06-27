let yolochka4 = 4;
let yolochka6 = 6;
let yolochka_name = "Zelenaya";

let result = yolochka4 + yolochka6;
let result_2 = yolochka6 + yolochka_name;

// console.log('result + ${yolochka4 + yolochka6}')

// console.log(result);
// console.log(result_2);

let t = true
let f = false

// console.log(t + f)

// if (f) {
//     let apples = 3 + 5
//     console.log(apples)
// } else {
//     let meat = 2 + 2
//     console.log("If not true = " + meat)

// }

let age = 75;
let age2 = 36;


let tt = typeof(age)
let nn = typeof(age2)
console.log(tt)

if (typeof(age) == "number") {

    if (age >= 18 && age < 60) {

        console.log("Full content")
    } else if (age < 18) {

        console.log("Multiki")
    } else if (age > 60) {

        console.log("Kultura")
    } else {

        console.log("Good luck")
    }
}