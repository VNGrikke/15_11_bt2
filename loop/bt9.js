let x = +prompt("nhập x");
let f0 = 0;
let f1 = 1;
let f2;
let sum = 1;
console.log(f1);
while(sum < x/2){
    f2 = f1 + f0;
    f0 = f1;
    f1 = f2;
    console.log(f2);
    sum += f2;
}
console.log(sum);

