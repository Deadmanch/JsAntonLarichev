const users = [
	{
		name: 'Вася',
		surName: 'Пупкин',
		age: 30,
		skills: ['Разработка', 'DevOps']
	},
	{
		name: 'Данил',
		surName: 'Степанов',
		age: 26,
		skills: ['SEO']
	},
];


const userData = users.map((users) =>{
	return {
		fullName: `${users.name} ${users.surName}`,
		skillsNum: users.skills.length,
}
})

console.log(userData);