class Clima{
    constructor(celcius){
        this._celcius = celcius
    }

    get fahrenheit(){
        return(this._celcius * 9) /5 +32
    }

    set fahrenheit(fahrenheit){
        this._celcius = ((fahrenheit -32) * 5) / 9
    }

    get celcius(){
        return this._celcius
    }

    set celcius (celcius){
        this._celcius = celcius 
    }
}

const clima = new Clima (25)

console.log(`Clima en grados farenheit: ${clima.fahrenheit}°F`)


clima.fahrenheit = 77
console.log(`Clima en grados farenheit: ${clima.celcius}°C`)