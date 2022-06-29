class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Nombre: ${this.nombre} | Sueldo: ${this.sueldo}`;
    }
}
class Gerente extends Empleado{
    static contadorEmpleados = 0; 
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo);
        this.departamento = departamento;
        this.idEmpleado = ++Gerente.contadorEmpleados; 
    }
    obtenerDetalles(){
        return `ID: ${this.idEmpleado} | Departamento: ${this.departamento} | ${super.obtenerDetalles()}`;
    }
}

function imprimir(tipo) {
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){//INSTANCEOF = INSTANCIA DE
        console.log("Es un objeto de tipo gerente...")
    }
    else if(tipo instanceof Empleado){
        console.log("Es un objeto de tipo empleado...")
    }
    else{
        console.log("No es un objeto de tipo empleado ni gerente...")
    }
}

let gerente = new Gerente('Daniel Hernandez',500,'Programacion');
let gerente01 = new Gerente('Daniel Godoy',5000,'Programacion');
let gerente02 = new Gerente('Jonathan Hernandez',365,'Programacion');
let empleado = new Empleado('Katherine Lissette', 500)

imprimir(gerente);
imprimir(gerente01);
imprimir(gerente02);
imprimir(empleado);