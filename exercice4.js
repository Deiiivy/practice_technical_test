let cadena1 = 'hello worldd23'
let cadena2 = 'holao wordld33'
let count = 0
//6

if(cadena1.length == cadena2.length){
    

for(let i = 1; i < cadena1.length && i < cadena2.length ;i++){
        if(cadena1[i] !== cadena2[i]){
         count++;
        }
    }
}else {
    console.log('las cadenas no son del mismo tamaño');
}

console.log(count);