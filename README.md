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
	console.log(CPUs[0].price); // prints price of first listed CPU
	console.log(CPUs[0].speed); // prints speed of first listed CPU
	console.log(CPUs[0].tdp); // prints TDP of first listed CPU
	console.log(CPUs[0].cores); // prints cores of first listed CPU
});
```

### coolers

```js
pcpartpicker.getCoolers(function(coolers){
	console.log(coolers); // prints all coolers
	console.log(coolers[0]); // prints first listed cooler
	console.log(coolers[0].name); // prints name of first listed cooler
	console.log(coolers[0].price); // prints price of first listed cooler
	console.log(coolers[0].noise); // prints noise of first listed cooler
	console.log(coolers[0].rpm); // prints rpm of first listed cooler
});
```

# api

## getCPUs

Type: `function`

Returns array of CPU objects.

### cpuObject.name

Type: `string`

Name of CPU.

### cpuObject.price

Type: `number`

Price of CPU in USD.

### cpuObject.speed

Type: `number`

Speed of CPU in GHz.

### cpuObject.tdp

Type: `number`

TDP of CPU in W.

### cpuObject.cores

Type: `number`

Number of cores of CPU.

## getCoolers

Type: `function`

Returns array of cooler objects.

### coolerObject.name

Type: `string`

Name of cooler.

### coolerObject.price

Type: `number`

Price of cooler in USD.

### coolerObject.noise

Type: `number`

Noise of cooler in dB.

### coolerObject.rpm

Type: `number`

RPM of cooler.

# license

MIT © [Rishi Masand](https://github.com/darthbatman)
