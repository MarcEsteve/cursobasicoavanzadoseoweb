// Condicional SWITCH
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
var dia=new Date().getDay();
var mes=new Date().getMonth();
var fecha=new Date();
var numdia=dia;
switch (dia) {
    case 0:
        dia = "Domingo"; 
    break;
    case 1:
        dia = "Lunes"; 
    break;
    case 2:
        dia = "Martes"; 
    break;
    case 3:
        dia = "Miércoles"; 
    break;
    case 4:
        dia = "Jueves"; 
    break;
    case 5:
        dia = "Viernes"; 
    break;
    case 6:
        dia = "Sábado";
}
document.getElementById("texto").innerHTML = "Hoy es " + dia + ", el valor del dia 'case' es " + numdia + "<br>Muestra la fecha: " + fecha + mes;