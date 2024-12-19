'use strict';

/*
 * Zalazar, Mario Javier
 */

const listaDeProductos = document.querySelector('#productos');
const ofertas = document.querySelector('#ofertas');

const miniCarrito = document.querySelector('#mini-carrito');
miniCarrito.addEventListener('click', () => validarCarrito());

const filtro = document.querySelectorAll('input[name="filtroCategoria"]');

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
        imagen: 'kv1.jpg',
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

const provincias = ['Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'Ciudad Autónoma de Buenos Aires', 'Córdoba', 'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta', 'San Juan', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego', 'Tucumán']


// Objeto que administra el carrito
const carrito = {
    items: [],

    calcularTotal() {
        return this.items.reduce((acumulador, valor) => acumulador + valor.precio, 0);
    },
    calcularCantidad() { return this.items.length },
}
const carritoNew = {
    items: [],
    calcularCantidad() { 
        return this.items.reduce((acumulador, valor) => acumulador + valor.cantidad, 0) 
    },
    calcularTotal() {
        return this.items.reduce((acumulador, valor) => acumulador + valor.total, 0);
    }
};
class ProductoCarrito {
    constructor(id, nombre, precio, cantidad, total) {
        this.id = id,
            this.nombre = nombre,
            this.precio = precio,
            this.cantidad = cantidad,
            this.total = total
    }
    precioTotalProducto() { this.total = this.cantidad * this.precio };
    agregarCantidad(valor) { this.cantidad += valor };
}



// Creamos la grilla de prodcutos
function grillaUI(porductos) {
    listaDeProductos.innerHTML = '';

    for (const producto of porductos) {

        const itemLista = crearEtiqueta('li');
        listaDeProductos.append(itemLista);

        const itemImgLink = crearEtiqueta('a', { href: '#' });
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
            modalDetalle(producto)
        })
        btnAgregarCarrito.addEventListener('click', () => agregarItem({ id: producto.id, nombre: producto.nombre, precio: producto.precio }));
    }
    carritoGuardado();
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
    const descripcionDetalle = crearEtiqueta('p', { class: 'detalleTexto' }, obj.descripcion);
    const precioDetalle = crearEtiqueta('p', { class: 'detallePrecio' }, `Precio: $ ${obj.precio}`);
    const categoriaDetalle = crearEtiqueta('p', { class: 'detalleTag' }, obj.categoria);

    const footterDetalle = crearEtiqueta('footer');

    const formDetalle = crearEtiqueta('form');
    formDetalle.method = 'dialog';

    const btnCerrarDetalle = crearEtiqueta('button');
    btnCerrarDetalle.textContent = 'Cerrar';
    formDetalle.append(btnCerrarDetalle);

    const btnAgregarAlCarrito = crearEtiqueta('button', {}, 'Agregar');
    btnAgregarAlCarrito.addEventListener('click', () => agregarItem({ id: obj.id, nombre: obj.nombre, precio: obj.precio }));

    footterDetalle.append(formDetalle, btnAgregarAlCarrito);

    modalDetalle.append(imgDetalle, nombreDetalle, categoriaDetalle, descripcionDetalle, precioDetalle, footterDetalle);

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
    const cantidadProdutos = crearEtiqueta('h2', {}, `Mi Carrito`);

    // LISTA DE PRODUCTOS
    const listaCarrito = crearEtiqueta('ul');
    for (const item of carritoNew.items) {
        const itemCarrito = crearEtiqueta('li', {}, `${item.nombre} - Unidades:${item.cantidad} - $${item.total} `);
        const controladroCarrito = crearEtiqueta('div');
        const sumarItemCarrito = crearEtiqueta('a', { href: '#', class: 'btnAdd', id: item.id }, '+');
        const restarItemCarrito = crearEtiqueta('a', { href: '#', class: 'btnSub', id: item.id }, '-');
        const elimiarItem = crearEtiqueta('a', { href: '#', class:"eliminar"}, 'Eliminar');

        elimiarItem.addEventListener('click', (e) => eliminarItemCarrito(e));

        sumarItemCarrito.addEventListener('click', function (e) {
            e.preventDefault();
            let productoEncontrado = carritoNew.items.find(p => p.id == e.currentTarget.id);
            productoEncontrado.agregarCantidad(1)
            productoEncontrado.precioTotalProducto();
            actualizarContadoresCarrito();
            carritoModal.remove();
            modalCarrito();
            localStorage.setItem('ListaCarrito', JSON.stringify(carritoNew.items));

        });

        restarItemCarrito.addEventListener('click', function (e) {
            e.preventDefault();
            let productoEncontrado = carritoNew.items.find(p => p.id == e.currentTarget.id);
          
            if (productoEncontrado.cantidad > 1) {
                productoEncontrado.agregarCantidad(-1);
                productoEncontrado.precioTotalProducto();
                actualizarContadoresCarrito();
                carritoModal.remove();
                modalCarrito()
            } else {
                eliminarItemCarrito(e);
            }
            localStorage.setItem('ListaCarrito', JSON.stringify(carritoNew.items));
        });

        controladroCarrito.append(sumarItemCarrito, restarItemCarrito, elimiarItem);
        itemCarrito.append(controladroCarrito);
        listaCarrito.append(itemCarrito);

        function eliminarItemCarrito(e) {
            e.preventDefault();
            e.currentTarget.closest('li').remove();
            let itemIndex = carritoNew.items.findIndex(producto => producto.id == item.id);
            carritoNew.items.splice(itemIndex, 1);
            carritoModal.remove();
            validarCarrito();
            localStorage.setItem('ListaCarrito', JSON.stringify(carritoNew.items));
        }
    }

    const totalCarrito = crearEtiqueta('p' , {class: 'total'}, `El precio total es de: $${carritoNew.calcularTotal()}`)

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
        carritoModal.remove();
        modalCarritoVacio();
    });

    //BTN pagar
    const btnPagar = crearEtiqueta('button', {}, 'Proceder al pago');
    btnPagar.addEventListener('click', () => {
        carritoModal.remove();
        checkout();
    });

    // APPENDS
    formCarrito.append(btnCerrarCarrito);

    headerCarrito.append(cantidadProdutos);

    footerCarrito.append(formCarrito, btnVaciarCarrito, btnPagar);

    carritoDetalle.append(headerCarrito, listaCarrito, totalCarrito, footerCarrito)

    carritoModal.append(carritoDetalle)
}


function checkout() {
    const checkoutModal = crearEtiqueta('dialog', { class: 'modal' });
    document.body.prepend(checkoutModal);
    checkoutModal.showModal();
    checkoutModal.addEventListener('close', () => checkoutModal.remove());



    const formCheckout = crearEtiqueta('form', { action: '#', id: 'formCheckout' });

    //Datos del comprador
    const tituloChekout = crearEtiqueta('h2', {}, 'Checkout');
    // nombre
    const nombreFormDiv = crearEtiqueta('div');
    const nombreFormLabel = crearEtiqueta('label', { for: 'nombre' }, 'Nombre: ');
    const nombreForminput = crearEtiqueta('input', { id: 'nombre', type: 'text', name: 'nombre' });
    nombreFormDiv.append(nombreFormLabel);
    nombreFormLabel.append(nombreForminput);

    // teléfono
    const telefonoFormDiv = crearEtiqueta('div');
    const telefonoFormLabel = crearEtiqueta('label', { for: 'telefono' }, 'Teléfono: ');
    const telefonoForminput = crearEtiqueta('input', { id: 'telefono', type: 'text', name: 'telefono' });
    telefonoFormDiv.append(telefonoFormLabel);
    telefonoFormLabel.append(telefonoForminput);

    // email
    const emailFormDiv = crearEtiqueta('div');
    const emailFormLabel = crearEtiqueta('label', { for: 'email' }, 'Email: ');
    const emailForminput = crearEtiqueta('input', { id: 'email', type: 'email', name: 'email' });
    emailFormDiv.append(emailFormLabel);
    emailFormLabel.append(emailForminput);

    // lugar
    const lugarFormDiv = crearEtiqueta('div');

    const provinciaFormDiv = crearEtiqueta('div');
    const provinciaFormLabel = crearEtiqueta('label', { for: 'provincia' }, 'Provincia: ');
    const provinciaFormSelect = crearEtiqueta('select', { id: 'provincia', name: 'provincia' });
    for (const provincia of provincias) {
        const provinciaFormOption = crearEtiqueta('option', { value: provincia }, provincia)
        provinciaFormSelect.append(provinciaFormOption);
    }

    provinciaFormDiv.append(provinciaFormLabel, provinciaFormSelect);

    const direccionFormDiv = crearEtiqueta('div');
    const direccionFormLabel = crearEtiqueta('label', { for: 'direccion' }, 'Direccion: ');
    const direccionForminput = crearEtiqueta('input', { id: 'direccion', type: 'text', name: 'direccion' });
    direccionFormDiv.append(direccionFormLabel);
    direccionFormLabel.append(direccionForminput);
    lugarFormDiv.append(provinciaFormDiv, direccionFormDiv)

    // fecha
    const fechaFormDiv = crearEtiqueta('div');
    const fechaFormLabel = crearEtiqueta('label', { for: 'fecha' }, 'Fecha de entrega: ');
    const fechaForminput = crearEtiqueta('input', { id: 'fecha', type: 'date', name: 'fecha' });
    fechaFormDiv.append(fechaFormLabel);
    fechaFormLabel.append(fechaForminput);

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    const tomorrowString = `${yyyy}-${mm}-${dd}`;

    fechaForminput.min = tomorrowString;
    fechaForminput.value = tomorrowString;

    // metodo de pago 
    const pagoFormDiv = crearEtiqueta('div');
    const pagoFormTitulo = crearEtiqueta('h3', {}, 'Elija su medio de pago');

    const pagoFormGroupDiv = crearEtiqueta('div');
    const pagoFormLabelEfectivo = crearEtiqueta('label', {}, 'Efectivo ');
    const pagoFormRadioEfectivo = crearEtiqueta('input', { type: 'radio', name: 'medioDePago', id: 'mpefectivo', value: 'mpefectivo', checked: 'checked' });
    const pagoFormLabelTrans = crearEtiqueta('label', {}, 'Transferencia ');
    const pagoFormRadioTrans = crearEtiqueta('input', { type: 'radio', name: 'medioDePago', id: 'mptrans', value: 'mptrans' });
    pagoFormLabelEfectivo.append(pagoFormRadioEfectivo);
    pagoFormLabelTrans.append(pagoFormRadioTrans);

    pagoFormGroupDiv.append(pagoFormLabelEfectivo, pagoFormLabelTrans);

    pagoFormDiv.append(pagoFormTitulo, pagoFormGroupDiv)



    //Footer para cerrar o confirmar pago
    const formcheckoutModal = crearEtiqueta('form');
    formcheckoutModal.method = 'dialog';

    const footerCheckout = crearEtiqueta('div');
    const btnCerrarCheckout = crearEtiqueta('button');
    btnCerrarCheckout.textContent = 'Cerrar';

    const btnConfirmarCheckout = crearEtiqueta('button', { type: "submit" }, 'Confirmar Pago');

    footerCheckout.append(formcheckoutModal)
    //formcheckoutModal.append(btnCerrarCheckout,btnConfirmarCheckout);
    formcheckoutModal.append(btnCerrarCheckout);

    //formCheckout.append(tituloChekout,nombreFormDiv,telefonoFormDiv,emailFormDiv,lugarFormDiv,fechaFormDiv,pagoFormDiv,footerCheckout);
    formCheckout.append(tituloChekout, nombreFormDiv, telefonoFormDiv, emailFormDiv, lugarFormDiv, fechaFormDiv, pagoFormDiv, footerCheckout, btnConfirmarCheckout);
    checkoutModal.append(formCheckout);

    formCheckout.addEventListener('submit', (e) => {
        e.preventDefault();


        const data = new FormData(e.currentTarget);

        const nombreErrorForm = crearEtiqueta('small');
        const telefonoErrorForm = crearEtiqueta('small');
        const emailErrorForm = crearEtiqueta('small');
        const direccionErrorForm = crearEtiqueta('small');

        //nombre
        document.querySelector('#nombre').addEventListener('input', (e) => {
            const campo = e.currentTarget;

            if (campo.value.length >= 1) {
                formCheckout.nombre.removeAttribute('data-invalid');
                nombreErrorForm.textContent = '';
            }
        })

        if (data.get('nombre') == '') {
            formCheckout.nombre.setAttribute('data-invalid', 'true');
            nombreErrorForm.textContent = 'Se requiere indicar su nombre';
            nombreFormDiv.append(nombreErrorForm);
        } else {
            formCheckout.nombre.removeAttribute('data-invalid');
            nombreErrorForm.textContent = '';
        }

        //telefono
        document.querySelector('#telefono').addEventListener('input', (e) => {
            const campo = e.currentTarget;

            if (campo.value.length >= 6) {
                formCheckout.telefono.removeAttribute('data-invalid');
                telefonoErrorForm.textContent = '';
            }
        })

        if (data.get('telefono') == '' || data.get('telefono').length > 13) {
            formCheckout.telefono.setAttribute('data-invalid', 'true');
            telefonoErrorForm.textContent = 'El teléfono es invalido';
            telefonoFormDiv.append(telefonoErrorForm);
        } else {
            formCheckout.telefono.removeAttribute('data-invalid');
            telefonoErrorForm.textContent = '';
        }

        //emails
        document.querySelector('#email').addEventListener('input', (e) => {
            const campo = e.currentTarget;

            if (campo.value.includes('@')) {
                formCheckout.email.removeAttribute('data-invalid');
                emailErrorForm.textContent = '';
            }
        })

        if (!data.get('email').includes('@')) {
            formCheckout.email.setAttribute('data-invalid', 'true');
            emailErrorForm.textContent = 'El email es invalido';
            emailFormDiv.append(emailErrorForm);
        } else {
            formCheckout.email.removeAttribute('data-invalid');
            emailErrorForm.textContent = '';
        }

        //direccion
        document.querySelector('#direccion').addEventListener('input', (e) => {
            const campo = e.currentTarget;

            if (campo.value.length >= 1) {
                formCheckout.direccion.removeAttribute('data-invalid');
                direccionErrorForm.textContent = '';
            }
        })

        if (data.get('direccion') == '') {
            formCheckout.direccion.setAttribute('data-invalid', 'true');
            direccionErrorForm.textContent = 'Se requiere indicar su direccion';
            direccionFormDiv.append(direccionErrorForm);
        } else {
            formCheckout.direccion.removeAttribute('data-invalid');
            direccionErrorForm.textContent = '';
        }


        if (!data.get('nombre') == '' && !(data.get('telefono') == '' || data.get('telefono').length > 13) && data.get('email').includes('@') && !data.get('direccion') == '') {
            checkoutModal.remove()
            gracias()
        }

    });

}


function gracias() {
    const graciasModal = crearEtiqueta('dialog', { class: 'modal gracias' });
    document.body.prepend(graciasModal);
    graciasModal.showModal();
    graciasModal.addEventListener('close', () => graciasModal.remove());

    const graciasMensajeTitulo = crearEtiqueta('h2', {}, '¡Gracias por tu compra!');
    const graciasMensajeTexto1 = crearEtiqueta('p', {}, 'Tu pedido está siendo procesado y pronto estará en camino.');
    const graciasMensajeTexto2 = crearEtiqueta('p', {}, 'Revisa tu correo para obtener más detalles y seguimiento. Si tienes preguntas, ¡estamos aquí para ayudarte!');
    graciasModal.append(graciasMensajeTitulo, graciasMensajeTexto1, graciasMensajeTexto2);

    setTimeout(() => {
        graciasModal.remove();
    }, 1500);
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

    if (carritoNew.items.length == 0) {
        modalCarritoVacio();
        actualizarContadoresCarrito();
    } else {
        modalCarrito();
        actualizarContadoresCarrito();
    }
}

function agregarItem(item) {
    carrito.items.push(item);
    let seleccionado = carritoNew.items.find(producto => producto.id == item.id)
    if (seleccionado === undefined) {
        carritoNew.items.push(new ProductoCarrito(item.id, item.nombre, item.precio, 1, item.precio))
        actualizarContadoresCarrito();
        
    } else {
        let encontrado = (carritoNew.items.findIndex(elemento => elemento.id == item.id));
        carritoNew.items[encontrado].agregarCantidad(1);
        carritoNew.items[encontrado].precioTotalProducto();
        console.log(carritoNew.items);
        actualizarContadoresCarrito();
    }
    localStorage.setItem('ListaCarrito', JSON.stringify(carritoNew.items));

}

function eliminarCarrito() {
    carrito.items = [];
    carritoNew.items = [];
    actualizarContadoresCarrito();
    localStorage.removeItem('ListaCarrito');
}

function actualizarContadoresCarrito() {
    miniCarrito.firstElementChild.firstElementChild.textContent = carritoNew.calcularCantidad();
    miniCarrito.firstElementChild.nextElementSibling.firstElementChild.textContent = carritoNew.calcularTotal();
}

//filtro por precio
for (const elemento of filtro) {
    elemento.addEventListener('change', () => {


        switch (elemento.value) {
            case 'infanteria':
                grillaUI(productos.filter(categoria => categoria.categoria === 'infanteria'));
                oferta();
                break;
            case 'vehiculo':
                grillaUI(productos.filter(categoria => categoria.categoria === 'vehiculo'));
                oferta();
                break;
            case 'terreno':
                grillaUI(productos.filter(categoria => categoria.categoria === 'terreno'));
                oferta();
                break;
            default:
                grillaUI(productos);
                oferta();
        }
    }
    )
}



function oferta() {
    const bannerEtiqueta = crearEtiqueta('div', { class: 'bannerOferta' });
    const bannerImg = crearEtiqueta('img', { src: 'img/15_off.png' });
    bannerEtiqueta.append(bannerImg);
    ofertas.append(bannerEtiqueta);

    setTimeout(() => {
        ofertas.innerHTML = '';
    }, 10000);

}

function confirmarCompra(e) {
    e.preventDefault();
    eliminarCarrito();
}


function carritoGuardado() {
    console.log(localStorage);
    
    if ('ListaCarrito' in localStorage) {
        let carritoGuardado = JSON.parse(localStorage.getItem('ListaCarrito'));
            for (const item of carritoGuardado) {
                agregarItem(item)
            } 
        }
}