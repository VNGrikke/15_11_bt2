let x = +prompt("nhập vào 1 số nguyên dương bất kì");
if(x>0 && x%1===0){
    for(let i = 1; i < x; i++){
        if(i%2!==0 && i%3!==0 && i%5!==0){
            console.log(i);
        }
    }
}