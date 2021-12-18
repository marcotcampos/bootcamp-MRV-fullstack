const FORM = document.getElementById('task-form');
const TASKLIST = document.getElementById('tasks');

FORM.onsubmit = function (e) {
    e.preventDefault();
    const inputField = document.getElementById('task-input'); // obtendo o valor digitado pelo usuário e atribuindo à variável 'inputField'
    addTask(inputField.value); // chamando a função 'addTask' que está logo abaixo e passando o conteúdo da variável 'inputField' que é o valor digitado pelo usuário
    FORM.reset(); // reseta o valor digitado para formulário ficar vazio
};

function addTask(description) { // função 'addTask' recebe como parâmetro 'description', que por sua vez é o valor digitado pelo usuário
    const taskContainer = document.createElement('div'); // cria uma div
    const newTask = document.createElement('input'); // cria um input
    const taskLabel = document.createElement('label'); // cria uma label
    const taskDescriptionNode = document.createTextNode(description); // imprime o valor digitado pelo usuário que está armazenado na variável 'description' parâmetro da função

    newTask.setAttribute('type', 'checkbox'); // constante 'newTask' vai ser do tipo checkbox
    newTask.setAttribute('name', description);
    newTask.setAttribute('id', description);

    taskLabel.setAttribute('for', description);
    taskLabel.appendChild(taskDescriptionNode); // constante 'taskLabel' recebe o conteúdo da variável 'taskDescriptionNode' que é o conteúdo digitado pelo usuário

    taskContainer.classList.add('task-item');
    taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	TASKLIST.appendChild(taskContainer);
}