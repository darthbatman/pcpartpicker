var pcpartpicker = require("./pcpartpicker");

pcpartpicker.getCPUs(function(CPUs){
	console.log(CPUs);
});

pcpartpicker.getCoolers(function(coolers){
	console.log(coolers);
});