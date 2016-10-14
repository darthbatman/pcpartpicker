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
```

### memory

```js
pcpartpicker.getMemory(function(ram){
	console.log(ram); // prints all memory
	console.log(ram[0]); // prints first listed memory
	console.log(ram[0].name); // prints name of first listed memory
	console.log(ram[0].price); // prints price of first listed memory
	console.log(ram[0].type); // prints type of first listed memory
	console.log(ram[0].speed); // prints speed of first listed memory
	console.log(ram[0].cas); // prints cas of first listed memory
	console.log(ram[0].size); // prints size of first listed memory
	console.log(ram[0].modules); // prints modules of first listed memory
	console.log(ram[0].ppg); // prints price per GB of first listed memory
});
```

### storage

```js
pcpartpicker.getStorage(function(storage){
	console.log(storage); // prints all storage
	console.log(storage[0]); // prints first listed storage
	console.log(storage[0].name); // prints name of first listed storage
	console.log(storage[0].price); // prints price of first listed storage
	console.log(storage[0].series); // prints series of first listed storage
	console.log(storage[0].form); // prints form of first listed storage
	console.log(storage[0].type); // prints type of first listed storage
	console.log(storage[0].capacity); // prints capacity of first listed storage
	console.log(storage[0].cache); // prints cache of first listed storage
	console.log(storage[0].ppg); // prints price per GB of first listed storage
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

## getMotherboards

Type: `function`

Returns array of motherboard objects.

### motherboardObject.name

Type: `string`

Name of motherboard.

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

## getMemory

Type: `function`

Returns array of memory objects.

### memoryObject.name

Type: `string`

Name of memory.

### memoryObject.price

Type: `number`

Price of memory in USD.

### memoryObject.speed

Type: `number`

Speed of memory.

### memoryObject.type

Type: `string`

Type of memory.

### memoryObject.cas

Type: `number`

CAS of memory.

### memoryObject.modules

Type: `number`

Number of modules of memory.

### memoryObject.size

Type: `number`

Size of memory.

### memoryObject.ppg

Type: `number`

Price per GB of memory.

## getStorage

Type: `function`

Returns array of storage objects.

### storageObject.name

Type: `string`

Name of storage.

### storageObject.price

Type: `number`

Price of storage in USD.

### storageObject.series

Type: `number`

Series of storage.

### storageObject.form

Type: `string`

Form of storage.

### storageObject.type

Type: `number`

Type of storage.

### storageObject.capacity

Type: `number`

Capacity of storage.

### storageObject.cache

Type: `number`

Cache of storage.

### storageObject.ppg

Type: `number`

Price per GB of storage.

# license

MIT © [Rishi Masand](https://github.com/darthbatman)
