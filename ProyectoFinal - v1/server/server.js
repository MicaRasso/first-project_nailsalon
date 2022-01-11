const http = require('http');
const url = require("url");
const fs = require('fs');

const server = http.createServer(function (request, response) {
	response.setHeader('Access-Control-Allow-Origin', '*');

    let body = '';
    request.on('data', (chunk) => {
        body += chunk;
    });

    request.on('end', () => {

         // CARGA DE TURNOS DISPONIBLES
        const parsedUrl = url.parse(request.url)
        if (parsedUrl.pathname === '/getForm'){ 
            console.log('Carga correcta de turnos disponibles') 
            fs.readFile("./disponible.json","utf-8",(err,data)=>{
            if (err){
                console.log("Error al cargar el archivo");
                return;
            }else{
                response.end(JSON.stringify(data))
            }}
        )} 
        
         // GUARDAR RESERVA DE UN TURNO
        if (parsedUrl.pathname === '/form') {
            const parsedData = JSON.parse(body)
            const data = JSON.stringify(parsedData,null,2)
            console.log(data)
            fs.appendFile('reservas.json',data, err =>{
                if (err){console.log(err)}
                return
            })
        } 
    });
});

server.listen(8080, function() {
  console.log('Server started');
});


