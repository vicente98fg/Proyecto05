//Zona de variables y arrays

fila1=Array(2,6,5,4,5,5);
fila2=Array(4,6,6,3,2,6);
fila3=Array(3,4,1,2,6,3);
fila4=Array(1,4,2,5,6,1);
fila5=Array(5,5,3,2,2,1);
fila6=Array(4,1,4,3,1,3);

filacolor1=Array("blue","yellow","pink","red","yellow","blue");
filacolor2=Array("blue","white","pink","red","yellow","blue");
filacolor3=Array("blue","yellow","blue","red","red","pink");
filacolor4=Array("pink","white","pink","red","green","red");
filacolor5=Array("green","white","green","green","white","yellow");
filacolor6=Array("green","white","pink","white","green","yellow");

filaycolor1 = Array();
filaycolor2 = Array();
filaycolor3 = Array();
filaycolor4 = Array();
filaycolor5 = Array();
filaycolor6 = Array();

var suma1 = 0;
var suma2 = 0;
var suma3 = 0;
var suma4 = 0;
var suma5 = 0;
var suma6 = 0;


//Zona de funciones

//Funcion iniciar el tablero

function iniciartablero(fila1,fila2,fila3,fila4,fila5,fila6,filacolor1,filacolor2,filacolor3,filacolor4,filacolor5,filacolor6) {

    for (let i = 0; i < fila1.length; i++) {
        suma1 = fila1[i] + filacolor1[i]
        filaycolor1.push(suma1)

    }
    for (let i = 0; i < fila2.length; i++) {
        suma2 = fila2[i] + filacolor2[i]
        filaycolor2.push(suma2)
    }
    for (let i = 0; i < fila3.length; i++) {
        suma3 = fila3[i] + filacolor3[i]
        filaycolor3.push(suma3)
    }
    for (let i = 0; i < fila4.length; i++) {
        suma4 = fila4[i] + filacolor4[i]
        filaycolor4.push(suma4)

    }
    for (let i = 0; i < fila5.length; i++) {
        suma5 = fila5[i] + filacolor5[i]
        filaycolor5.push(suma5)
    }
    for (let i = 0; i < fila6.length; i++) {
        suma6 = fila6[i] + filacolor6[i]
        filaycolor6.push(suma6)
    }
    
}


//Funcion comprobar el tablero

function compruebaTablero(filaycolor1, filaycolor2, filaycolor3, filaycolor4, filaycolor5, filaycolor6) {

    console.log(filaycolor1);
    console.log(filaycolor2);
    console.log(filaycolor3);
    console.log(filaycolor4);
    console.log(filaycolor5);
    console.log(filaycolor6);
  

}


//Inicamos las funciones para iniciar el tablero y comprobarlo

iniciartablero(fila1, fila2, fila3, fila4, fila5, fila6, filacolor1, filacolor2, filacolor3, filacolor4, filacolor5, filacolor6)
compruebaTablero(filaycolor1, filaycolor2, filaycolor3, filaycolor4, filaycolor5, filaycolor6)  

var posInicial=[0,0];
var posFinal=[0,0];

var posicionnicial = 0;
var posicionfinal = 0;

var filalength = fila1.length;
var filalength2 = fila2.length;


//Generar las casillas aleatorias 

casillaAleatoria(posInicial, posFinal);

function casillaAleatoria(posInicial, posFinal){

    posInicial.splice(0, 2);
    posFinal.splice(0, 2);
    
    for (let i = 0; i < 2; i++) {
        posicionnicial = Math.floor(Math.random(0)*(filalength));
        posInicial.push(posicionnicial);
        
    }

    for (let i = 0; i < 2; i++) {
        posicionfinal = Math.floor(Math.random(0)*(filalength2));
        posFinal.push(posicionfinal)
    }

    for (let i = 0; i < 2; i++) {

        if (posInicial[i] != posFinal[i]) {
            console.log(posInicial);
            console.log(posFinal);
            return(posInicial,posFinal)
            break;
        }else{
             
            return casillaAleatoria(posInicial, posFinal)
            
        }
         
    
}
}


//Funcion para pintar el tablero

function pintartablero(fila1,fila2,fila3,fila4,fila5,fila6,filacolor1,filacolor2,filacolor3,filacolor4,filacolor5,filacolor6,posInicial,posFinal) {

   document.write("<table>");
   document.write("<tr>");
   for (let i = 0; i < fila1.length; i++) { 

    document.write(`<td id=0${i} class=${filacolor1[i]}>`+ fila1[i]+"</td>") 
     
     
}
document.write("</tr>");
document.write("<tr>");

for (let i = 0; i < fila1.length; i++) { 
    document.write(`<td id=${i +10} class=${filacolor2[i]}>`+ fila2[i] +"</td>") 
     
     
}
document.write("</tr>");
document.write("<tr>");
for (let i = 0; i < fila1.length; i++) {   
    document.write(`<td id=${i +20} class=${filacolor3[i]}>`+ fila3[i] +"</td>") 
     
     
}
document.write("</tr>");
document.write("<tr>");
for (let i = 0; i < fila1.length; i++) {   
    document.write(`<td id=${i +30} class=${filacolor4[i]}>`+ fila4[i] +"</td>") 
     
     
}
document.write("</tr>");
document.write("<tr>");
for (let i = 0; i < fila1.length; i++) {   
    document.write(`<td id=${i +40} class=${filacolor5[i]}>`+ fila5[i] +"</td>") 
     
     
}
document.write("</tr>");
document.write("<tr>");
for (let i = 0; i < fila1.length; i++) {   
    document.write(`<td id=${i+50} class=${filacolor6[i]}>`+ fila6[i] +"</td>") 
     
     
}
document.write("</tr>");



document.getElementById(`${posInicial[0]}`+`${posInicial[1]}`).classList.add("posrandomIni");
document.getElementById(`${posFinal[0]}`+`${posFinal[1]}`).classList.add("posrandomFin")
    

 
    document.write("</table>");

    console.log(`Posicion Inicial ${posInicial}`)
    console.log(`Posicion Final ${posFinal}`)
  

}

var posFFila = posFinal[0];
var posFCol = posFinal[1];


pintartablero(fila1,fila2,fila3,fila4,fila5,fila6,filacolor1,filacolor2,filacolor3,filacolor4,filacolor5,filacolor6,posInicial,posFinal) 


//Funcion para ejecutar los movimientos

var cnt = 0;

function comprobarMovimiento (fila1,fila2,fila3,fila4,fila5,fila6,filacolor1,filacolor2,filacolor3,filacolor4,filacolor5,filacolor6,posInicial,posFinal) {
   
    var fila = document.getElementById("sig").value;
    var columna = document.getElementById("sig2").value;

    if (((fila>=0)&&(fila<=5)&&(columna>=0)&&(columna<=5))) {
        
        var e = (`(${fila}, ${columna})`);
        var r = document.getElementById("mov").value = e;

        cnt = parseInt(cnt)+parseInt(1);
        var nummov = document.getElementById("showCount").value = cnt;

        if ((fila==posFFila)&&(columna==posFCol)) {

            alert("¡Has ganado! ¡Enhorabuena!")
            
        }

    }else {
        if((0>fila)||(fila>5)){
        alert("Fila invalida. Introduzca un valor entre 0 y 5.");
        
        }
        if((0>columna)||(columna>5)){
        alert("Columna invalida. Introduzca un valor entre 0 y 5.");

        }else {
            alert("Valor invalido, no introduzca letras.")
        }
    }
}

comprobarMovimiento (fila1,fila2,fila3,fila4,fila5,fila6,filacolor1,filacolor2,filacolor3,filacolor4,filacolor5,filacolor6,posInicial,posFinal)

