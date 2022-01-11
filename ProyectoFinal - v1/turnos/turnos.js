// OBTIENE LOS TURNOS DISPONIBLES DEL SERVIDOR
document.addEventListener('DOMContentLoaded', async ()=>{
    const tomaTurnos= await fetch('http://localhost:8080/getForm')   
    const turnosjson = await tomaTurnos.json()
    cargaTurnos(JSON.parse(turnosjson)) 
})
 
//Crea las opciones de los turnos y las inserta en la pagina turnos.html
const contenedorTurnos=document.getElementById("elements")
function cargaTurnos(turnos){
        for (let i = 0; i < turnos.length; i++) {           
            const boxes = document.createElement('input')
            boxes.name="botonTurno"
            boxes.type="radio"
            boxes.classList="inputbox"
            boxes.checked="true"
            boxes.value=`${turnos[i].day} ${turnos[i].date}: ${turnos[i].hour}hs`
            contenedorTurnos.appendChild(boxes)
            crearLabels(turnos,i)
        } 
    }
    function crearLabels(turnos,i){
        let label =document.createElement("label");
        label.for="botonTurno";
        label.classList="inputlabel"
        label.innerHTML=`${turnos[i].day} ${turnos[i].date}: ${turnos[i].hour}hs`
        contenedorTurnos.appendChild(label)
    };


// PASA LOS DATOS DEL TURNO RESERVADO AL SERVIDOR
const formElement = document.getElementById("myForm");

formElement.addEventListener('submit',(event)=>{
    event.preventDefault()

    const nombre=document.getElementsByName("inputName")[0].value
    const celular =document.getElementsByName("inputCel")[0].value
    const edad = document.getElementsByName("inputAge")[0].value
    
    const turno=document.getElementsByName("botonTurno")
    const cantTurnos= turno.length
    const turnoElegido= function(turno,cant){ 
        for(i=0; i<cant; i++){
            if(turno[i].checked){
            return turno[i].value;
        }
    }}

const atrapaFormulario = fetch('http://localhost:8080/form', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
            cel:celular,
            name:nombre,
            age:edad,
            turn:turnoElegido(turno,cantTurnos)
        })
        })
    atrapaFormulario.then(data => console.log(data))
    })