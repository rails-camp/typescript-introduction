// var x : number = 0;

// while (x < 10) {
// 	console.log(x);
// 	x++;
// }

let players : number[] = [3, 10, 4, 5, 1];

// for in
console.log("For/In");
for (let player in players) {
	console.log(player);
}

// for of
console.log("For/Of");
for (let player of players) {
	console.log(player);
}