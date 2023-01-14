//? Iteración #2: Modificando el DOM SI

//? 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const div$$ = document.createElement("div");

document.body.appendChild(div$$);

//? 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const div2$$ = document.createElement("div");
const p$$ = document.createElement("p");

div$$.appendChild(p$$);

document.body.appendChild(div2$$);

//? 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div3$$ = document.createElement("div");


for (let index = 0; index < 6; index++) {
   const p2$$ = document.createElement("p");
   div3$$.appendChild(p2$$);
}

document.body.appendChild(div3$$);

//? 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

// const p3$$ = document.createElement("p");
// const im_dynamic = document.createTextNode("Soy dinámico!");
// p3$$.appendChild(im_dynamic);
// document.body.appendChild(p3$$);
// //! O

const p4$$ = document.createElement("p");
p4$$.textContent= "Soy dinámico!"
//? p4$$.innerText...
//? p4$$.innerHTML...
//? p4$$.append...
document.body.appendChild(p4$$);

//? 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const to_H2 = document.querySelector (".fn-insert-here");
to_H2.textContent = 'Wubba Lubba dub dub';
console.log(to_H2);

//? 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
//?--> crear un ul
//?--> crear un li
//?--> al li le damos el contenido de texto de una app
//?--> meter el li en el ul
//?--> hacerlo realidad

const ul$$ = document.createElement("ul");

for (const app of apps) {

   //crear elemento
   const li$$ = document.createElement("li");

   // darle contenido
   li$$.append(app);

   //Hacerlo realidad
   ul$$.appendChild(li$$);
}

document.body.appendChild(ul$$);

//? 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

// const get_AllFnRemoveMe = document.querySelectorAll(".fn-remove-me");

// for (let index = 0; index < get_AllFnRemoveMe.length; index++) {
//     const element$$ = get_AllFnRemoveMe[index];
//     element$$.remove();
//     get_AllFnRemoveMe.splice(index, 1);
//     index--;
//     }

// console.log(get_AllFnRemoveMe)

//selecionar esos nodos
//borrar un nodo? --> un array de nodos

const nodosRemove$$ = document.querySelectorAll(".fn-remove-me");

for (let index = 0; index < nodosRemove$$.length; index++) {
    nodosRemove$$[index].remove();
}



//? 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//? 	Recuerda que no solo puedes insertar elementos con .appendChild.

const p5$$ = document.createElement("p");

p5$$.textContent = "Voy en medio";

const divs$$ = document.querySelectorAll("div");


document.body.insertBefore(p4$$, divs$$[1]);

//? 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here


//? Selecionar todos los divs con la clase .fn-insert-here
//? recorrer el array de los divs 
//? crear una p
//? darle contenido de texto 
//? insertarla dentro de div


const divsInsert$$ = document.querySelectorAll("div.fn-insert-here");

for (const div of divsInsert$$) {
   const p6$$ = document.createElement("p");

   p6$$.textContent = "Voy dentro!";

   div.appendChild(p6$$);
}