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

var memorySortOptions = {
	"rating": 4,
	"speed": "ddr3-2400",
	"size": "4GB (1x4GB)"
};

pcpartpicker.getMemory(memorySortOptions, function(ram){
	console.log(ram);
});