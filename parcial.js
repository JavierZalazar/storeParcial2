'use strict';

/*
 * Zalazar, Mario Javier
 */


const listaDeProductos = document.querySelector('#productos');

const miniCarrito = document.querySelector('#mini-carrito');
miniCarrito.addEventListener('click', () => validarCarrito());

// Array de productos
const productos = [
    {
        id: 1, // El ID único e irrepetible del producto (Útil para su búsqueda)
        nombre: 'Waffen SS',
        descripcion: 'Duras, lujosamente equipadas y políticamente adoctrinadas, las tropas de las SS formaban más de 38 divisiones y numerosas otras unidades del tamaño de regimientos y batallones, con un total de casi un millón de hombres en armas. Sus unidades blindadas ganaron muchos aplausos por sus acciones, y aunque las relaciones entre las unidades del ejército regular y las Waffen-SS a veces fueron tensas, la mayoría de las unidades SS lucharon ferozmente, contra grandes adversidades, hasta que la guerra terminó en Berlín en 1945. Las Waffen-SS eran una organización controvertida: su celo y disciplina no podían cuestionarse, aunque sus numerosas atrocidades documentadas tal vez sean su mayor legado.',
        precio: 64900,
        imagen: 'waffen_SS.jpg',
        categoria: 'infanteria'
    },
    {
        id: 2,
        nombre: 'Infantería alemana Blitzkrieg',
        descripcion: 'Representando la imagen clásica del soldado de infantería alemán durante la Segunda Guerra Mundial, estas miniaturas están equipadas con botas hasta la rodilla, un casco sin adornos tipo "cubo de carbón" y una disciplina marcial que los llevó a un dominio casi completo de la Europa continental. Aunque la gloria a menudo recaía en los caballeros acorazados de las divisiones panzer, la infantería era la columna vertebral de la Wehrmacht. El astuto uso de las tácticas de Blitzkrieg por parte de Alemania conquistó Polonia, arrasó los Países Bajos y derrotó a Francia, antes de centrar su atención en la Unión Soviética. Las fuerzas soviéticas fueron empujadas hasta Moscú mientras la implacable marcha de los soldados de Hitler arrasaba con todo lo que se les presentaba. Bien dirigido, magníficamente entrenado y equipado con las mejores armas de infantería del mundo, el soldado de infantería alemán era un enemigo hábil y peligroso, capaz de pensar por sí mismo si era necesario, lo que le otorgaba una ventaja significativa sobre sus adversarios.',
        precio: 64900,
        imagen: 'blitzkrieg.jpg',
        categoria: 'infanteria'
    },
    {
        id: 3,
        nombre: 'Panther Ausf A',
        descripcion: 'El Panther fue el mejor tanque alemán en general de la guerra y, aunque fue concebido como un tanque mediano, con 45 toneladas y un blindaje frontal de más de 100 mm de espesor, fácilmente podría ser calificado mejor. El grueso e inclinado blindaje frontal del Panther fue copiado del T-34 ruso, pero el cañón principal era un arma que superaba con creces todo lo que poseían los rusos, el KwK 42 L70 de alta velocidad, que era capaz de penetrar cualquier tanque aliado en servicio cuando se introdujo por primera vez. Esta es la segunda versión del tanque, construida a partir de mediados de 1943 y que entró en acción tanto en el frente oriental como en el occidental. Curiosamente, las marcas no seguían el orden alfabético. Los cambios en el Panther original incluyen una ametralladora rediseñada en el casco y una cúpula para el comandante.',
        precio: 62700,
        imagen: 'panther.jpg',
        categoria: 'vehiculo'
    },
    {
        id: 4,
        nombre: 'Panzer III',
        descripcion: 'El Panzer III fue uno de los tanques alemanes más numerosos de la guerra y fue el pilar de las fuerzas blindadas alemanas cuando invadieron Francia y los Países Bajos, y más tarde Rusia. Estaba bien blindado para la época y equipado con el cañón KwK 38 o 39 L/42 de 5 cm, mientras que la variante N tenía un cañón KwK 37 de 7,5 cm.',
        precio: 38500,
        imagen: 'panzer_iii.jpg',
        categoria: 'vehiculo'
    },
    {
        id: 5,
        nombre: 'Aldea en ruinas',
        descripcion: 'Este conjunto en caja se basa en una casa de campo en ruinas y es extremadamente versátil, ya que se puede construir de varias maneras y también es ideal para usar en muchos períodos, desde la época napoleónica hasta la Segunda Guerra Mundial.',
        precio: 88000,
        imagen: 'ruined_hamlet.jpg',
        categoria: 'terreno'
    },
    {
        id: 6,
        nombre: 'Muros de piedra',
        descripcion: 'Este conjunto en caja se basa en muros de piedra, ya que se puede disponer de varias maneras y también es ideal para usar en muchos períodos, desde la época napoleónica hasta la Segunda Guerra Mundial.',
        precio: 33550,
        imagen: 'stone_walls.jpg',
        categoria: 'terreno'
    },
    {
        id: 7,
        nombre: 'Casa de campo en ruinas',
        descripcion: 'Nada mejora más una batalla de mesa que un terreno atractivo y evocador. Ya sea que tus partidas estén ambientadas en el Renacimiento, el período de los caballos y los mosquetes (1700-1900) o las Guerras Mundiales, esta gran casa de campo en ruinas de plástico te proporcionará un objetivo para tomar y mantener o brindará protección contra el fuego enemigo para salvar vidas de tus valientes tropas.',
        precio: 35200,
        imagen: 'ruined_farmhouse.jpg',
        categoria: 'terreno',
    },
    {
        id: 8,
        nombre: 'Accesorios de campo de batalla',
        descripcion: 'Este nuevo set te permite construir una gran variedad de señales para confundir a tu enemigo, advertir a tus amigos sobre minas, agregar líneas de comunicación y posiciones defendidas, ¡lo que te da una gran variedad de opciones para elegir cómo se verá tu campo de batalla!',
        precio: 26400,
        imagen: 'battlefield_accessories.jpg',
        categoria: 'terreno',
    },
    {
        id: 9,
        nombre: 'T-34/85',
        descripcion: 'La serie T-34, con su blindaje inclinado, cambió los principios del diseño de tanques durante la guerra. El diseño inclinado y angular del T-34 aumentó el espesor efectivo del blindaje y también permitió que una mayor proporción de proyectiles se desviaran de los que penetraban en su blindaje. La introducción del T-34 en acción hizo que el diseño de tanques alemanes siguiera su ejemplo con blindajes con ángulos similares en tanques como el Panther y el King Tiger. A medida que el diseño de tanques alemanes cobraba importancia, la máquina de guerra soviética volvió a subir el listón con el T-34/85.',
        precio: 37400,
        imagen: 't34_85.jpg',
        categoria: 'vehiculo',
    },
    {
        id: 10,
        nombre: 'KV1',
        descripcion: 'El KV-1 es un enorme monstruo de 45 toneladas. Fue uno de los primeros tanques pesados ​​de Rusia utilizados en la Segunda Guerra Mundial y era famoso por su casi inexpugnabilidad. El armamento antitanque alemán de la época casi no tenía forma de penetrar su blindaje; solo la falta de entrenamiento y maniobrabilidad le permitía chocar con las tácticas alemanas superiores. Su tamaño permitía al KV-1 aplastar literalmente cualquier cosa que se cruzara bajo sus gigantescas orugas, y las líneas de fuego y los campamentos eran abandonados con solo verlo. El cañón de 76,2 mm todavía atravesaba cualquiera de los blindados alemanes actuales, por lo que durante 1941 era prácticamente imparable.',
        precio: 37400,
        imagen: 'kv_1.jpg',
        categoria: 'vehiculo',
    },
    {
        id: 11,
        nombre: 'Infantería soviética',
        descripcion: 'Éstos son los hombres que lucharon ferozmente para defender a la Madre Rusia desde la invasión alemana de 1941 hasta la caída de Berlín en 1945. Eran simples soldados campesinos a quienes se les enseñó a obedecer órdenes y a hacer lo que se les decía. Su vida fue dura y sus batallas probablemente no tengan parangón en la historia en cuanto a escala y sufrimiento. Las divisiones rusas pasaron de ser una masa desorganizada a una fuerza de infantería moderna plenamente capaz y experimentada en tan sólo unos pocos años, un arma letal templada en el caldero de la batalla contra los invasores alemanes.',
        precio: 63580,
        imagen: 'soviet_infantry.jpg',
        categoria: 'infanteria',
    },
    {
        id: 12,
        nombre: 'Infantería de invierno soviética',
        descripcion: 'Cuando el ejército alemán se estrelló contra la frontera rusa en 1941, Hitler confiaba en una campaña corta y enérgica. Casi lo logró, pero la heroica defensa de los enormes ejércitos soviéticos frenó el avance nazi. La llevó a cabo un simple soldado raso, "Iván", como lo llamaban los alemanes. Valientes, sólidos y leales, estos soldados soportaron condiciones de batalla terribles. Su equipo era sencillo pero funcional, como las propias tropas. Los encarnizados combates en Finlandia habían enseñado duras lecciones al Ejército Rojo, donde miles de sus hombres cayeron víctimas de congelación. El equipo para el frío que se entregó más tarde era cálido y cómodo, a menudo acolchado o guateado, y era muy envidiado por las tropas alemanas que temblaban bajo sus delgados abrigos.',
        precio: 63580,
        imagen: 'winter_soviets.jpg',
        categoria: 'infanteria',
    }
];



// Objeto que administra el carrito
const carrito = {
    items: [],
    calcularTotal() {
        let total = 0;
        for (const item of this.items) {
            total += item.precio;
        };
        return total
    },

    calcularTotal () {
        return this.items.reduce((acumulador, valor) => acumulador + valor.precio, 0);
    },
    calcularCantidad() { return this.items.length },
}



// Creamos la grilla de prodcutos
function grillaUI(porductos) {
    for (const producto of productos) {

        const itemLista = crearEtiqueta('li');
        listaDeProductos.append(itemLista);

        const itemImgLink = crearEtiqueta('a', {href: '#'});
        itemLista.append(itemImgLink);

        const itemImg = crearEtiqueta('img', { src: `img/${producto.imagen}`, alt: producto.nombre });
        itemImgLink.append(itemImg);

        const itemDatos = crearEtiqueta('div');
        itemLista.append(itemDatos);

        const itemTitulo = crearEtiqueta('h3', {}, producto.nombre);
        const itemPrecio = crearEtiqueta('p', {}, `Precio: $${producto.precio}`);
        const btnAgregarCarrito = crearEtiqueta('button', { class: 'addCarrito' }, 'Agregar al carrito');
        itemDatos.append(itemTitulo, itemPrecio, btnAgregarCarrito);

        itemImgLink.addEventListener('click', (e) => {
            e.preventDefault();
            modalDetalle(producto)})
        btnAgregarCarrito.addEventListener('click', () => agregarItem({ id: producto.id, nombre: producto.nombre, precio: producto.precio }));
    }
}

grillaUI(productos)
// Funciones


// MODALES

//Detalle del produto
function modalDetalle(obj) {
    const itemDetailModal = crearEtiqueta('dialog', { class: 'modal' });
    document.body.prepend(itemDetailModal);
    itemDetailModal.showModal();
    itemDetailModal.addEventListener('close', () => itemDetailModal.remove());

    const modalDetalle = crearEtiqueta('div', { class: 'detalle' });

    const imgDetalle = crearEtiqueta('img', { src: `img/${obj.imagen}`, alt: obj.nombre });
    const nombreDetalle = crearEtiqueta('h3', {}, obj.nombre);
    const descripcionDetalle = crearEtiqueta('p', {}, obj.descripcion);
    const precioDetalle = crearEtiqueta('p', {}, `Precio: $ ${obj.precio}`);
    const categoriaDetalle = crearEtiqueta('p', {}, obj.categoria);

    const footterDetalle = crearEtiqueta('footer');

    const formDetalle = crearEtiqueta('form');
    formDetalle.method = 'dialog';

    const btnCerrarDetalle = crearEtiqueta('button');
    btnCerrarDetalle.textContent = 'Cerrar';
    formDetalle.append(btnCerrarDetalle);

    const btnAgregarAlCarrito = crearEtiqueta('button', {}, 'Agregar');
    btnAgregarAlCarrito.addEventListener('click', () => agregarItem({ id: obj.id, nombre: obj.nombre, precio: obj.precio }));

    footterDetalle.append(formDetalle, btnAgregarAlCarrito);

    modalDetalle.append(imgDetalle, nombreDetalle, descripcionDetalle, precioDetalle, categoriaDetalle, footterDetalle);

    itemDetailModal.append(modalDetalle);
}




//Carrito vacio
function modalCarritoVacio() {
    const carritoModal = crearEtiqueta('dialog', { class: 'modal' });
    document.body.prepend(carritoModal);
    carritoModal.showModal();
    carritoModal.addEventListener('close', () => carritoModal.remove());


    const mensajeCarrito = crearEtiqueta('h2', {}, 'Su Carrito esta vacio')


    const formCarrito = crearEtiqueta('form');
    formCarrito.method = 'dialog';

    const btnCerrarCarrito = crearEtiqueta('button');
    btnCerrarCarrito.textContent = 'Cerrar';

    formCarrito.append(mensajeCarrito, btnCerrarCarrito);
    carritoModal.append(formCarrito);
}


//Modal del CARRITO
function modalCarrito() {
    const carritoModal = crearEtiqueta('dialog', { class: 'modal' });
    document.body.prepend(carritoModal);
    carritoModal.showModal();
    carritoModal.addEventListener('close', () => carritoModal.remove());

    const carritoDetalle = crearEtiqueta('div', { class: 'carrito' });

    // HEADER CARRITO
    const headerCarrito = crearEtiqueta('header');
    const cantidadProdutos = crearEtiqueta('span', {}, `Productos: ${carrito.calcularTotal()}`);

    // LISTA DE PRODUCTOS
    const listaCarrito = crearEtiqueta('ul');
    for (const item of carrito.items) {
        const itemCarrito = crearEtiqueta('li', {}, `${item.nombre} - $${item.precio} `);
        const elimiarItem = crearEtiqueta('a', { href: '#' }, 'Eliminar');

        elimiarItem.addEventListener('click', function (e) {
            e.preventDefault();
            e.currentTarget.closest('li').remove();
            let itemIndex = carrito.items.findIndex(producto => producto.id == item.id);
            carrito.items.splice(itemIndex, 1);
            carritoModal.remove();
            validarCarrito();
        });

        itemCarrito.append(elimiarItem);
        listaCarrito.append(itemCarrito);
    }

    //FOOTER
    const footerCarrito = crearEtiqueta('footer');
    const formCarrito = crearEtiqueta('form');
    formCarrito.method = 'dialog';

    //BTN Cerrar Modal
    const btnCerrarCarrito = crearEtiqueta('button');
    btnCerrarCarrito.textContent = 'Cerrar';

    //BTN Vaciar carrito
    const btnVaciarCarrito = crearEtiqueta('button', {}, 'Vaciar Carrito');
    btnVaciarCarrito.addEventListener('click', () => {
        eliminarCarrito();
        alert('Se eliminaron los productos de su carrito');
        carritoModal.remove();
    });

    //BTN pagar
    const btnPagar = crearEtiqueta('button', {}, 'Proceder al pago');
    btnPagar.addEventListener('click', () => {
        carritoModal.remove();
        eliminarCarrito();
        alert('Gracias por su compra');
    });

    // APPENDS
    formCarrito.append(btnCerrarCarrito);

    headerCarrito.append(cantidadProdutos);

    footerCarrito.append(formCarrito, btnVaciarCarrito, btnPagar);

    carritoDetalle.append(headerCarrito, listaCarrito, footerCarrito)

    carritoModal.append(carritoDetalle)
}



// Constructor de etiquetas HTML
function crearEtiqueta(nombre, atributos = {}, contenido = '') {
    const elemento = document.createElement(nombre);
    for (const atributo in atributos) {
        elemento.setAttribute(atributo, atributos[atributo]);
    }
    if (contenido !== '') {
        elemento.textContent = contenido
    }
    return elemento;
}


// Funciones para el Carrito 
function validarCarrito() {
    if (carrito.items.length == 0) {
        modalCarritoVacio();
        actualizarContadoresCarrito();
    } else {
        modalCarrito();
        actualizarContadoresCarrito();
    }
}

function agregarItem(item) {
    carrito.items.push(item);
    actualizarContadoresCarrito();
}

function eliminarCarrito() {
    carrito.items = [];
    actualizarContadoresCarrito();
}

function actualizarContadoresCarrito() {
    miniCarrito.firstElementChild.firstElementChild.textContent = carrito.calcularCantidad();
    miniCarrito.firstElementChild.nextElementSibling.firstElementChild.textContent = carrito.calcularTotal();

}