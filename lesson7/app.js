const tasks = ['Задача 1'];

const addNewTask = (task) => {
	return tasks.push(task);
}

addNewTask('Задача 2');
addNewTask('Задача 3');

const deleteTaskArr = (task) => {
	const myIndex = tasks.indexOf(task);
	if(myIndex !== -1) {
		tasks.splice(myIndex, 1);
	}
	return tasks;
}

deleteTaskArr('Задача 3');

const prioritizeTask = (task) => {
	const myIndex = tasks.indexOf(task);
	
	if(myIndex !== -1) {
		const oldTask = tasks[myIndex];
		tasks.splice(myIndex, 1);
		tasks.unshift(oldTask);
	}
	return tasks;
}
prioritizeTask('Задача 2')
console.log(tasks)

