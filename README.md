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

### motherboards

```js
pcpartpicker.getMotherboards(function(motherboards){
	console.log(motherboards); // prints all motherboards
	console.log(motherboards[0]); // prints first listed motherboards
	console.log(motherboards[0].name); // prints name of first listed motherboards
	console.log(motherboards[0].price); // prints price of first listed motherboards
	console.log(motherboards[0].socket); // prints socket of first listed motherboards
	console.log(motherboards[0].formFactor); // prints formFactor of first listed motherboards
	console.log(motherboards[0].ramSlots); // prints ramSlots of first listed motherboards
	console.log(motherboards[0].maxRAM); // prints maxRAM of first listed motherboards
});

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

## getMotherboards

Type: `function`

Returns array of motherboard objects.

### motherboardObject.name

Type: `string`

Name of cooler.

### motherboardObject.price

Type: `number`

Price of motherboard in USD.

### motherboardObject.socket

Type: `string`

Socket of motherboard.

### motherboardObject.formFactor

Type: `string`

Form Factor of motherboard.

### motherboardObject.ramSlots

Type: `number`

Number of RAM slots of motherboard.

### motherboardObject.maxRAM

Type: `number`

Maximum RAM of motherboard.

# license

MIT © [Rishi Masand](https://github.com/darthbatman)
