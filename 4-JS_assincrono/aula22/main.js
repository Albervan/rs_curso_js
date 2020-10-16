var minhaPromise = function() {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/albervan');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                //Verificar o código de sucesso conforme o que identificamos no log Network
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

minhaPromise()
    //Se a Promise obtiver sucesso a função "resolve" implementada vai chamar a função "then"
    .then(function(response) {
        console.log(response);
    })
    //Se a Promise não teve sucesso a função "reject" implementada vai chamar a função "catch"
    .catch(function(error) {
        console.warn(error);
    });