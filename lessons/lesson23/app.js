"use strict";

function removePassword(reset) {
	if(reset) {
		this.password = undefined;
	} else {
		this.password = '1';
	}
}

const user = {
	login: 'Danil',
	password: '22',
	id: 1
};

const userRemovePassword = removePassword.bind(user, true);

userRemovePassword(user);
console.log(user);
userRemovePassword(user);
console.log(user);
