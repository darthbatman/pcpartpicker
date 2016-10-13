# pcpartpicker
Node.js API to retrieve parts from PCPartPicker

# install

```
npm install pcpartpicker
```

# examples

### usage

```js
var pcpartpicker = require("pcpartpicker");
```

### CPUs

```js
pcpartpicker.getCPUs(function(CPUs){
	console.log(CPUs); // prints all CPUs
	console.log(CPUs[0]); // prints first listed CPU
	console.log(CPUs[0].name); // prints name of first listed CPU
	console.log(CPUs[0].price); // prints name of first listed CPU
	console.log(CPUs[0].speed); // prints name of first listed CPU
	console.log(CPUs[0].tdp); // prints name of first listed CPU
	console.log(CPUs[0].cores); // prints name of first listed CPU
});
```

# api

### getCPUs

Type: `function`

Returns array of CPU objects.

### cpuObject.name

Type: `string`

Name of CPU.

### cpuObject.price

Type: `number`

Price of CPU.

### cpuObject.speed

Type: `number`

Speed of CPU.

### cpuObject.tdp

Type: `number`

TDP of CPU.

### cpuObject.cores

Type: `number`

Number of cores of CPU.

### songObject.artist

Type: `string`

Name of artist of song.

# license

MIT © [Rishi Masand](https://github.com/darthbatman)
