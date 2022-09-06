window.addEventListener("load", ()=> {
    const form = document.querySelector(".form__cont")
    const nombre = document.getElementById("nombre")
    const email = document.getElementById("email")
    const msj = document.getElementById("msj")

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        validaCampos()
    })

    
    const validaCampos = ()=> {
        // capturar los valores ingresados por el usuario
        const nombreValor = nombre.value.trim()
        const emailValor = email.value.trim()
        const msjValor = msj.value.trim();
        
        // validando campo nombre
        // (!nombreValor) ? console.log("CAMPO VACIO") : console.log(nombreValor)  operador ternario
        // if(nombreValor === "")
        if(!nombreValor) {
            console.log("CAMPO VACIO");
            validaFalla(nombre, "Campo vacío")
        } else {
            console.log(nombreValor);
            validaOk(nombre)
        }

        if(!emailValor) {
            validaFalla(email, "Campo vacío")
        } else if(!validaEmail(emailValor)) {
            validaFalla(email, "El e-mail no es válido")
        } else {
            validaOk(email)
        }

        if(!msjValor) {
            validaFalla(msj, "Campo vacío")
        } else {
            validaOk(msj)
        }

    }

    const validaFalla = (input, msje)  => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector("p")
        aviso.innerText = msje
        
        formControl.className = "form-control falla"
    }
    const validaOk = (input, msje)  => {
        const formControl = input.parentElement
        formControl.className = "form-control ok"
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
})
