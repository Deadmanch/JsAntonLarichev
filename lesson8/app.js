const url = 'https://purpleschool.ru/course/javascript'

function getUrlPath(url) {
	const [protocol, _, host, ...path] = url.split('/');
	if(protocol === 'https:' || protocol === 'http:') {
		if(!host.includes('.')) {
			return;
		}
		console.log(protocol, host, path);
		console.log(`Протокол: ${protocol.split(':')[0]}`);
		console.log(`Доменное имя: ${host}`);
		console.log(`Путь внутри сайта: /${path.join('/')}`);
	}
}

getUrlPath(url);