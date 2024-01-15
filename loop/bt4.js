let a = +prompt("a");
let b = +prompt("b");
let x = 0;
for(let i = 1; i <= a; i++){
    if(i%b===0){
        console.log(i);
        x++;
    }
}
if(x===0){
    console.log("khong co so nao chia het cho b");
    
}