class Persona{

    static contadorObjPersona = 0;

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

let persona1 = new Persona('Daniel','Hernandez');
console.log(persona1);

let persona2 = new Persona('Jonathan','Godoy');
console.log(persona2);

console.log(persona1.nombreCompleto());
Persona.saludar();//Saludos desde static

Persona.saludar2(persona1); //Daniel


console.log(persona1.contadorObjPersona);//NO SE PUEDE, SOLO CON LA CLASE
console.log(Persona.contadorObjPersona);