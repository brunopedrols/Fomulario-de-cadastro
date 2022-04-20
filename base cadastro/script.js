
function dice (){
    var name = validation.name.value;
    var email = validation.email.value;
    var password = validation.password.value;

    if(name == "") {
        alert("Preencha o campo nome.");
        validation.name.focus();
        return false;
    }

    if(email == "") {
        alert("Preencha o campo Email.");
        validation.email.focus();
        return false;
    }

    if(password == "" || password.length <= 8) {
        alert("Preencha o campo Senha com 8 caracteres.");
        validation.password.focus();
        return false;
    }
}