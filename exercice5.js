let cadena = 'Hola esto es  una cadena de'
let w = 0;

cadena = cadena.trim()
let words = cadena.split(' ').filter(Boolean)
w = words.length


console.log(w);