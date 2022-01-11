// Acciones del filtro
const formElement=document.getElementById("myForm");

formElement.addEventListener('submit',async(event)=>{
  event.preventDefault();

  //Asignaión de los filtros para las fotos
  const filtros= []
  const elemento=document.getElementsByName("filtrar")

  elemento.forEach(el => {
      if (el.checked === true){
          const valor = el.value[0]+el.value[1]+el.value[2]
          filtros.push(valor)
      }
  })

  // Eliminar las fotos anteriores
  let img = document.getElementsByClassName("foto");
  await eliminarFotos(img);

  //Carga las fotos segun los filtros
  await cargaFotosSegunFiltro(filtros)
});
  function cargaFotos(i){
  const img = document.createElement("img");
  img.src = `Fotos/${i}.png`;
  img.alt = `Uñas`;
  img.classList= `foto box`;
  img.value=`${i}`
  img.id=`${i}`;
  contenedor.appendChild(img);
};
function cargaFotosSegunFiltro(filtros){
  for (let i = 0; i < filtros.length; i++) {
    const element = filtros[i];
    if(element==='esc'){
      cargaFotos(3)
      cargaFotos(7)
      cargaFotos(8)
    }else{
      if (element==='esm'){
        cargaFotos(4)
        cargaFotos(5)
        cargaFotos(6)
        cargaFotos(9)
        cargaFotos(10)
        cargaFotos(14)
        cargaFotos(15)
      }else{
        if (element==='cap'){
          cargaFotos(1)
          cargaFotos(2)
          cargaFotos(11)
          cargaFotos(12)
          cargaFotos(13)
        }
      }
    }    
    }}   
  function eliminarFotos (img){
    const cantTotal = img.length
    console.log(cantTotal)
    for (let i = 0; i < cantTotal; i++) {
        const element=img[i]
        contenedor.removeChild(element)
    }
    console.log(cantTotal)
}

document.addEventListener('DOMContentLoaded',()=>{
  const cantFotos=15;
for (let i = 1; i <= cantFotos; i++) {
    cargaFotos(i)
}
})

    
