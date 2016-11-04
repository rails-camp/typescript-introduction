console.log(fullName('Jordan', 'Hudgens'));
// console.log(otherFullName('Jordan', 'Hudgens'));
// console.log(thirdFullName('Jordan', 'Hudgens'));

// Function declaration
function fullName(first : string, last : string) : string {
	return first + " " + last;
}


// Function expression
var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last : string) {
	return first + " " + last;	
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
	return first + " " + last;	
}