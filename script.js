// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
let newDiv$$ = document.createElement('div')
let newUl$$ = document.createElement('ul')
newDiv$$.appendChild(newUl$$)
for (let i = 0; i < countries.length; i++) {
    const newLi$$ = document.createElement('li')
    newLi$$.innerText = countries[i]
    newUl$$.append(newLi$$)
}
document.body.append(newDiv$$)
// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const rmv = document.querySelector('.fn-remove-me').remove()

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const coches$$ = document.querySelector('[data-function="printHere"]')
const newUl2$$ = document.createElement('ul')
for (let i = 0; i < cars.length; i++) {
    const element = document.createElement('li')
    element.innerText = cars[i]
    newUl2$$.append(element)
}
coches$$.appendChild(newUl2$$)

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
const newDiv2$$ = document.createElement("div");
    document.body.appendChild(newDiv2$$);
    
    for (const count of countries2) {
        const newDivH$$ = document.createElement("div")
        const newH4$$ = document.createElement("h4")
        const newImg$$ = document.createElement("img")
        newH4$$.innerText = count.title
        newImg$$.setAttribute("src", count.imgUrl)
        newDiv2$$.appendChild(newDivH$$)
        newDivH$$.appendChild(newH4$$)
        newDivH$$.appendChild(newImg$$)
    }

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.

const boton$$ = document.createElement('button')
boton$$.innerText = 'eliminar'

boton$$.addEventListener('click', function(){
    const lis = document.body.querySelectorAll('div')
    lis[lis.length-1].remove()
})
document.body.appendChild(boton$$)


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.

