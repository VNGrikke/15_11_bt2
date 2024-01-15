let a = +prompt("nhập");
let sum = 0;
for(let i = 1; i <= a/2; i++){
    if(a%i===0) sum += i;
}
if(sum === a){console.log(a + " là số hoàn hảo");
}else console.log( a + " không là số hoàn hảo");