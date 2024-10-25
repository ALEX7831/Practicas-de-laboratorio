class Usuario{
    constructor(username){
        this._username = username
    }

    get username(){
        return this._username
    }

    set username(username){
        if (username.lenght >= 3){
            this._username = username 
        }else{
            console.log(`El nombrede usuario ${username} debe tener al menos 3 caracteres`)
        }
    }
}

const usuario = new Usuario (`Luz`)
console.log(`Nombre valido: ${usuario.username}`)
usuario.username = `Lu`
