@detailedLog('billing')
class AccountsPayable {
	constructor() {}
}

@detailedLog('warehouse')
class ProductManager {
	constructor() {}
}

function detailedLog(dashboard : string) {
	if(dashboard == 'billing') {
		console.log('Working in the billing department');
		return function (target : Object) {};
	} else {
		return function (target : Object) {};
	}
}

var post = new AccountsPayable;
var pm = new ProductManager;

