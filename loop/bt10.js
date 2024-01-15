let x = +prompt("nhập x");
let y = `*`;
for(i = 0; i < x; i++){
    console.log(y);
    y += `*`;
}
let z = `*`;
let doDaiCanLe = x;
let chuoiDaCanLe = z.padStart(doDaiCanLe, ' '); 
for(let i = 0; i < x; i++){
    console.log(chuoiDaCanLe);
    z += `*`;
    chuoiDaCanLe = z.padStart(doDaiCanLe, ' '); 
}


