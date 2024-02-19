const tasks = ['Задача 1'];

function addTask(task) {
    tasks.push(task);
    return tasks;
}
addTask('Задача 2')
addTask('Задача 3')
addTask('Задача 4')

function  deletTask(task) {
    const index = tasks.indexOf(task);
    if(tasks.includes(task)) {
      return tasks.splice(index, 1);
    } else {
        console.log('Такой задачи не найдено');
    }
}


function reoladTask(task) {
    const result = deletTask(task);
    if(!result) {
      return  
    }
    tasks.unshift(result[0]);
    return tasks;
}
console.log(reoladTask('Задача 4'))