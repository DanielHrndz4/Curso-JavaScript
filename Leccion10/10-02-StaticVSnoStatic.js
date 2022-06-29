class Persona{

    static contadorObjPersona = 0;//ATRIBUTO DE NUESTRA CLASE
    email = 'danielhrndz38@gmail.com';//ATRIBUTO DE NUESTROS OBJETOS

    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido =apellido;
        Persona.contadorObjPersona++;
        console.log("Se incrementa contador a " + Persona.contadorObjPersona);
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){ 
        return this._nombre +" "+ this._apellido;
    }
    toString(){
        return this.nombreCompleto();
    }
    static saludar(){
        console.log("saludos desde static");
    }
    static saludar2(persona){
        console.log(persona.nombre);
    }
}

let persona1 = new Persona;
console.log(persona1.email);