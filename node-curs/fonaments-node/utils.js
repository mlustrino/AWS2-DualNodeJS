function sumaFinsA(n) {
  let suma = 0;
  for (let i = 1; i <= n; i++) suma += i;
  return suma;
}
function esParell(n) {
  return n % 2 === 0;
}
function getMinim(args){
    let minim = args[0];
    for (let i = 0; i <= args.length; i++){
       if (Number(minim)>Number(args[i])) minim=args[i]; 
    } 
    return minim;
}
function getMaxim(args){
    let max = args[0];
    for (let i = 0; i <= args.length; i++){
       if (Number(max)<Number(args[i])) max=args[i]; 
    } 
    return max;
}

function getMitjana(args){
    let suma = 0;
    for (let i = 0; i < args.length; i++) suma += parseInt(args[i]);
    return suma/args.length;
}


module.exports = { sumaFinsA, esParell,getMinim,getMaxim,getMitjana };
