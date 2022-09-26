if(false){
    console.log('a');
}else{
    console.log('b');
}

console.log(false && "dog");

let result = '' && 'foo';  // result is assigned "" (empty string)
console.log(result);

result = 2 && 0;       // result is assigned 0
console.log(result);

result = 'foo' && 4;   // result is assigned 4
console.log(result);
