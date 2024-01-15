let x = Math.floor(Math.random()*11);
console.log(x);
let a = +prompt("nhap a tu 1 den 10");
while(a !== x){
    if(a > x){
        alert("a lớn hơn x");
        a = +prompt("nhap a tu 1 den 10");
    }else if(a < x){
        alert("a nhỏ hơn x");
        a = +prompt("nhap a tu 1 den 10");
    }
}