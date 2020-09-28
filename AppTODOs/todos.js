var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer Café',
    'Etudar Javascript',
    'Aessar comunidade da Rocketseat'
];

function renderTodos() {
    listElement.innerHTML = ''; //Remover todo o conteúdo que existir dentro da lista

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText); //Função para adicionar um novo valor no final do array
    inputElement.value = '';

    renderTodos();
}

buttonElement.onclick = addTodo;