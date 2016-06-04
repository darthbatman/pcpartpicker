var pcpartpicker = require("./pcpartpicker");

// pcpartpicker.getCPUs(function(CPUs){
// 	console.log(CPUs);
// });

// pcpartpicker.getCoolers(function(coolers){
// 	console.log(coolers);
// });

// pcpartpicker.getMotherboards(function(mobos){
// 	console.log(mobos);
// });

// var memorySortOptions = {
// 	"size": ["16GB (2x8GB)"],
// 	"speed": ["DDR4-3200"],
// 	"rating": [3, 4, 5]
// };

// pcpartpicker.getMemory(memorySortOptions, function(ram){
// 	console.log(ram);
// });

pcpartpicker.getStorage(function(storage){
	console.log(storage);
});