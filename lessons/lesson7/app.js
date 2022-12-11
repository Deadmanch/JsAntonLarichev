const tasks = ['Задача 1'];

const addNewTask = (task) => {
	return tasks.push(task);
}

addNewTask('Задача 2');
addNewTask('Задача 3');

const deleteTaskArr = (task) => {
	const myIndex = tasks.indexOf(task);
	if(myIndex === -1) {
		return;
	}
	return tasks.splice(myIndex, 1);
}

deleteTaskArr('Задача 3');

const prioritizeTask = (task) => {
	const result = deleteTaskArr(task);
	if (!result) {
		return;
	}
	tasks.unshift(result[0]);
}
prioritizeTask('Задача ew')
console.log(tasks)

