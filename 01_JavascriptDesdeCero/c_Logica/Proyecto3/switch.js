let expre = 'Papayas'
switch(expre) {
  case 'Uvas' : 
    console.log('Costo de las uvas son 20') 
    break;
  case 'Manzanas' : 
    console.log('Costo de las Manzanas son 100') 
    break;  
  case 'Fresas' : 
    console.log('Costo de las fresas son 35') 
    break;  
  case 'Banana' : 
    console.log('Costo de las Banana son 43') 
    break;
  case 'Mangos':
  case 'Papayas':
    console.log('25K')
    break;
  default :
    console.log('Producto no encontrado ' + expre) 

}