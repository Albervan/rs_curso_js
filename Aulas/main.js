//Essa classe que permite acessar o AJAX para recuperar informações do servidor
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/albervan');
xhr.send(null);

//Como o AJAX é Assíncrono, suas respostas não seguem o fluxo de execução do javascript
//Para isso é necessário utilizar funções e métodos para aguardar e recuperar as respostas
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}