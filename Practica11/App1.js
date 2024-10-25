class Persona {
    constructor(nombre,apellido){
        this._nombre = nombre 
        this._apellido = apellido


        //Metodo get para obtener el nombre comple
    }
    //Metodo get para obtener el nombre completo
    get nombreCompleto(){
            return `${this._nombre} ${this._apellido}`
    }

   
}

const persona = new Persona ("Misael","Juárez")


console.log(`Nombre completo: ${persona.nombreCompleto}`)