"use strict";
const company = {
	name: 'ООО Агро',
	employees: [
		{
			name: 'Лена, Наташа, Алена',
			getName: function () {
				return this.name;
			}
		}
	],
	ceo: {
		name: 'Данил',
		getName: function () {
			return `Владелец компании -  ${this.name}`;
		}
	},
	getName: function () {
		return `Название компании ${this.name}`;
	}
}
console.log(company.getName());
console.log(company.ceo.getName());
console.log(company.employees.map(employee => employee.getName()));
