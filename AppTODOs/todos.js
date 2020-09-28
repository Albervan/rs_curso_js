var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
//Para garantir que uma váriavel terá um valor default válido podemos utilizar o operador OR(||) e passar o valor default

function renderTodos() {
    listElement.innerHTML = ''; //Remover todo o conteúdo que existir dentro da lista

    for (todo of todos) {
        //Criar elemento para item da lista
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        //Criar elemento link
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        //Adicionando as referencias dos lementos
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText); //Função para adicionar um novo valor no final do array
    inputElement.value = '';

    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1); //Remove uma quantidade de elementos do array a partir de uma posição;
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    //Para gravar no localStorage é necessário ter uma estrutura em string contendo chave e valor, por tanto não é possível gravar objetos, arrays, vetores diretamente. Nesse projeto vamos utilizar o JSON (JavaScript Objetc Notation)

    localStorage.setItem('list_todos', JSON.stringify(todos));
}