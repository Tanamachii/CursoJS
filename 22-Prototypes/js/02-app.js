function Humano2 (altura,peso,edad,nombre){
    this.altura = altura;
    this.peso =peso;
    this.edad = edad;
    this.nombre = nombre;
}

const humano = new Humano2(1.85,'85kg',21,'Pedro Tanamachi');

function imprimirinfo(humano){
    const {altura,peso,edad,nombre} = humano
    return `El humano ${nombre} con una edad de ${edad} y un peso de ${peso} tiene una altura de ${altura}`
}

console.log(imprimirinfo(humano))

function Empresa(nombre,saldo,categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria
}

const EP = new Empresa('Tanamachi',45000,'Tecnología')

function formatearEmpresa(empresa){
    const{nombre,saldo,categoria} = empresa
    return `La empresa ${nombre} con un saldo de ${saldo} y una categoria de ${categoria}`
}

console.log(formatearEmpresa(EP))