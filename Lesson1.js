// function yolochka1(item1, item2) {
//     let mass = 'Hello!!'
//     console.log(mass, item1, item2)
// }

// yolochka1(11, 22)

// function yolochka1(item1, item2) {
//     let mass = 'Hello!!'
//     console.log(mass, item1 + item2)
// }

// // yolochka1(11, 22)

// function f1() {
//     console.log('Hello!')
// }
// let f1 = () => { console.log('Hello!!!!') }

// let F11 = () => { console.log('Hello!!!!!') }
// let f22 = (t11, t22) => { console.log('Sum =', t11, t22) }

let t1 = 10;
let t2 = 20;
let t3 = 30;
let t4 = 40;

let f33 = (t1 < t2) ?
    (tt1, tt2) => { console.log('order = ', tt1 + tt2) } :
    (tt1, tt2) => { console.log('order = ', tt1 - tt2) };

f33(t3, t4)



function f55(tt1, tt2) {
    if (t1 < t2) {
        console.log('oder IF = ', tt1 + tt2)
    } else {
        (tt1, tt2) => console.log('oder IF = ', tt1 - tt2);
    }
}
f55(30, 40)


// function yolochka33() {};

// yolochka33.prototype.fast = function() {
//     console.log('FAST !!')
// }
// yolochka33.prototype.green = function(sun, co2) {
//     console.log('Green ==', sun, '+', co2)
// }
// yolochka33.prototype.shishki = function() {
//     console.log('shishki == Yolki')
// }
// let forest = new yolochka33()

// forest.fast()
// forest.green(4500, 50)