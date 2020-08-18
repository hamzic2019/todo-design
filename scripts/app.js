let tasks = document.querySelector('.tasks');
let input = document.querySelector('#add');
let icon  = document.querySelector('.task-icon');
let taskH = document.querySelector('.task');
let search = document.querySelector('#search');

let todos = []
let id = 0;

input.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        addNewTodo(e.target.value);
        e.target.value = '';
    };
});

tasks.addEventListener('click', (e) => {
    removeTodo(e.target.id);
});

search.addEventListener('keyup', (e) => {
    if(e.target.value === ''){
        updateDisplay(undefined);
    }else {
        updateDisplay(e.target.value);
    }
})

function addNewTodo(value) {
    if(value.length > 0) {
        todos.push({task: value, id: id});
        id++
        updateDisplay();
    }
}

function updateDisplay(term) {
    if (term == undefined) {
    tasks.innerHTML = '';
        todos.forEach((todo, index) => {
            tasks.innerHTML += `
                <div class = "task" >
                    <p class = "task-title" > ${todo.task} </p> 
                    <i class = "fa fa-trash-o task-icon" id="${todo.id}" > </i> 
                </div>`;
        });
    }else {
        
        let which = todos.filter((todo) => {
            return todo.task.includes(term);
        });

        tasks.innerHTML = '';
        
        which.forEach((task, i)=> {
            tasks.innerHTML += `
                <div class = "task" >
                    <p class = "task-title" > ${task.task} </p> 
                    <i class = "fa fa-trash-o task-icon" id="${task.id}" > </i> 
                </div>`;
        });
        
        
    }

};

function removeTodo(index) {
    
    todos.forEach((todo, i) => {

        if(todo.id == index) {
            todos.splice(i, 1);
        }
    });

    search.value = '';

    tasks.innerHTML = '';
    todos.forEach((todo, index) => {
        tasks.innerHTML += `
            <div class = "task" >
                <p class = "task-title" > ${todo.task} </p> 
                <i class = "fa fa-trash-o task-icon" id="${todo.id}" > </i> 
            </div>`;
    });
};
    
