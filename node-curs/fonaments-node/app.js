const { sumaFinsA, esParell,getMinim,getMaxim,getMitjana } =
  require("./utils");
console.log(sumaFinsA(100));
console.log(esParell(7));

const args= process.argv;
console.log("Mínim: "+ getMinim(args.slice(2))+" Màxim: "+getMaxim(args.slice(2))+" Mitjana: "+getMitjana(args.slice(2)));