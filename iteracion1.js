//?Iteración #1: Interacción con el DOM SI
//? 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const showMe = document.querySelector(".showMe");
console.log(showMe);

//?1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const got_Ya = document.querySelector("#pillado");
console.log(got_Ya);

//?1.3 Usa querySelector para mostrar por consola todos los p
const all_Ps = document.querySelectorAll("p");
console.log(all_Ps);

//? 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const pokemons = document.querySelectorAll(".pokemon");
console.log(pokemons);

//? 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
//? data-function="testMe"
const data_FunctionTestMe = document.querySelectorAll('[data-function="testMe"]')
console.log(data_FunctionTestMe);

//? 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//? data-function="testMe"
const show_ThirdCharacter = document.querySelectorAll('[data-function="testMe"]');
console.log(show_ThirdCharacter[2]);
