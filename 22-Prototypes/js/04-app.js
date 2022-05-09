function Clientes(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}
function Persona(nombre, saldo, telefono){
    //Heredar de la clase Clientes las propiedades de nombre y saldo
    Clientes.call(this,nombre,saldo)
    this.telefono = telefono
}
//Asignar las funciones del prototype de Clientes al prototype de Persona a su vez que el constructor
Persona.prototype = Object.create(Clientes.prototype);
Persona.prototype.constructor = Clientes;

Clientes.prototype.tipoCliente = function(){
    let tipo
    if(this.saldo > 10000){
        tipo = ' Gold'
    }else if(this.saldo > 5000){
        tipo = 'Platinum'
    }else{
        tipo = 'Normal'
    }
    return tipo
}

Clientes.prototype.nombreCliente = function(){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo: ${this.tipoCliente()}`
}

Clientes.prototype.retiraSaldo = function(retira){
    this.saldo -= retira
}

Persona.prototype.numeroDeTelefono = function(){
    return `El número de telefono: ${this.telefono}`
}
const pedro = new Persona('Pedro',9999,662352233)
console.log(pedro)
console.log(pedro.numeroDeTelefono())
console.log(pedro.nombreCliente())
