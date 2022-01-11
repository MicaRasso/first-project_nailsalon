function showPicture(nro){
    console.log(`Foto ${nro}`);
    /*La idea es al apretar la foto, mostrar la información del set y, si lo logro, la foto que se presionó*/     
}

// Se crea el título
const div1 = document.createElement("div");
div1.classList='titulo base';
div1.innerHTML='Golden Rose';

// Se crean las fotos del sitio
const contenedor = document.createElement("div");
contenedor.classList=`container base`; 


// function cargaFotos(i){
//     const img = document.createElement("img");
//     img.src = `Fotos/${i}.png`;
//     img.alt = `Uñas`;
//     img.classList= `foto box`;
//     img.value=`${i}`
//     //se le deberian agregar las clases aca(se podría hacer una funcion y pasarlas por parametros)
//     // tambien podria usarse un addclass fuera del ciclo, si es que existe algo asi INVESTIGAR
//     img.id=`${i}`;
//     contenedor.appendChild(img);
// };

// const cantFotos=15;
// for (let i = 1; i <= cantFotos; i++) {
//     cargaFotos(i)
// }

// Se crea el sector de los filtros

const costado =document.createElement("form");
costado.classList='filtro';
costado.id="myForm";

    // Se crea el título
    const div2 = document.createElement("div");
    div2.classList='subtitulo inputsubtitulo';
    div2.innerHTML='Filtros';
    costado.appendChild(div2)

    // Creacion de los filtros 
    function crearFiltros (id,type,classes,name) {
        let input = document.createElement('input')
        input.id=id;
        input.name = `${name}`;
        input.classList = `${classes}`;
        input.type= `${type}`;
        input.value=`${classes}`;
        costado.appendChild(input);
    };

    function crearLabels(name){
        let label =document.createElement("label");
        label.for=`${name}`;
        label.innerHTML=`${name}`;
        label.classList = `inputlabel`;
        costado.appendChild(label)
    };
    crearFiltros('Esculpidas','checkbox','esc inputbox','filtrar'); 
    crearLabels('Esculpidas')
    crearFiltros('Esmaltado','checkbox','esm inputbox','filtrar');
    crearLabels('Esmaltado')
    crearFiltros('Capping','checkbox','cap inputbox','filtrar');
    crearLabels('Capping')
    // crearFiltros('Cortas','checkbox','cor inputbox','filtrar');
    // crearLabels('Cortas')
    // crearFiltros('Largas','checkbox','lar inputbox','filtrar');
    // crearLabels('Largas')

    //Creacion del boton SUBMIT
    input = document.createElement('input')
        input.classList = "button";
        input.type= "submit";
        input.value="Filtrar";
    costado.appendChild(input);


// El layout precisa la ubicacion de cada bloque en la pagina (exceptuando nav y footer)
const layout=document.createElement("div");
layout.classList='layout';
layout.appendChild(div1);
layout.appendChild(contenedor); 
layout.appendChild(costado);

// Agregado de los elementos al documento HTML
document.body.appendChild(layout);
