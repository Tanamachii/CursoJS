function Clientes(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

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

//Instanciarlo
const pedro2 = new Clientes('Pedro',20000)

pedro2.retiraSaldo(1000)
console.log(pedro2.nombreCliente())


