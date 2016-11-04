// Function expression
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Jordan', 'Hudgens'));
// Immediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})('Tiffany', 'Hudgens');
//# sourceMappingURL=018_5_immediatel_invoked_arguments.js.map