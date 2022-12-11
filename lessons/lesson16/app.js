const num1 = '89103235356',
	    num2 = '+79103235356',
			num3 = '+7(910) 323-53-56',
			num4 = '+7(910)3235356',
			num5 = '    +7(910) 323-53-56    ';

const num1Error = '3231231233',
			num2Error = '+79d103d23-53-56',
			num3Error = '9+7103235356',
			num4Error = '89103g35356';

function isPhoneNumber(num) {
	let onlyNumber = true;
	num = num.trim();
	num = num.replace('+7', '8');
	if(!num.startsWith('8')) {
		return false;
	}
	num = num.replaceAll('(', '');
	num = num.replaceAll(')', '');
	num = num.replaceAll(' ', '');
	num = num.replaceAll('-', '');
	if(num.length !== 11 ) {
		return false;
	}
	for(const char of num) {
		if(isNaN(Number(char))) {
			onlyNumber = false;
			break;
		}
	}
	return onlyNumber;
}

console.log(isPhoneNumber(num1));
console.log(isPhoneNumber(num2));
console.log(isPhoneNumber(num3));
console.log(isPhoneNumber(num4));
console.log(isPhoneNumber(num5));
console.log(isPhoneNumber(num1Error));
console.log(isPhoneNumber(num2Error));
console.log(isPhoneNumber(num3Error));
console.log(isPhoneNumber(num4Error));

