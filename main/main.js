const person = {
    first_name: 'Monica',
    last_name: 'Geller',
    phone: '915-996-9739',
    email: 'monica37@gmail.com',
    address: {
        street: {
            street_num: '495',
            street_name: 'Grove Street',
        },
        city: 'New York',
        country: 'USA',
    },
};


for (let key in person){
	if(person [key] instanceof Object){
		for(let address in person[key]){
			if(person [key] [address] instanceof Object){
				for(let street in person [key] [address]){
					document.write(`${street} ==> ${person[key] [address] [street]} <br>`);
				}
			}
			else{
				document.write(`${address} ==> ${person[key] [address]} <br>`);
			}
		}
	}
	else{
		document.write(`${key} ==> ${person[key]} <br>`);
	}
}