'use strict';

var pcpartpicker = require("./pcpartpicker.js");

var cpuSortOptions = {
  "socket": ["AM4"]
};

pcpartpicker.getCPUs(cpuSortOptions, function(CPUs){
  console.log("CPUs", CPUs);
});

// pcpartpicker.getCoolers(function(coolers){
//   console.log(coolers);
// });

var moboSortOptions = {
  "socket": ["AM4"]
};

pcpartpicker.getMotherboards(moboSortOptions, function(mobos){
  console.log("Motherboards", mobos);
});

var memorySortOptions = {
  "size": ["16GB (2x8GB)"],
  "speed": ["DDR4-3733"],
};

pcpartpicker.getMemory(memorySortOptions, function(ram){
  console.log("RAM", ram);
});

// pcpartpicker.getStorage(function(storage){
//   console.log(storage);
// });

// pcpartpicker.getGPUs(function(GPUs){
//   console.log(GPUs);
// });

// pcpartpicker.getPSUs(function(PSUs){
//   console.log(PSUs);
// });

// pcpartpicker.getCases(function(cases){
//   console.log(cases);
// });