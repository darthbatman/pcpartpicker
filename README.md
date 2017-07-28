# pcpartpicker
Node.js API to retrieve parts from PCPartPicker

## Future Plans
Integrate this project with AngularJS
https://angularjs.org/

# examples

### usage

```js
var pcpartpicker = require("pcpartpicker.js");
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

### GPUs

```js
pcpartpicker.getGPUs(function(GPUs){
	console.log(GPUs); // prints all GPUs
	console.log(GPUs[0]); // prints first listed GPU
	console.log(GPUs[0].name); // prints name of first listed GPU
	console.log(GPUs[0].price); // prints price of first listed GPU
	console.log(GPUs[0].series); // prints series of first listed GPU
	console.log(GPUs[0].memory); // prints memory of first listed GPU
	console.log(GPUs[0].chipset); // prints chipset of first listed GPU
	console.log(GPUs[0].cc); // prints core clock speed of first listed GPU
});
```

### PSUs

```js
pcpartpicker.getPSUs(function(PSUs){
	console.log(PSUs); // prints all PSUs
	console.log(PSUs[0]); // prints first listed PSU
	console.log(PSUs[0].name); // prints name of first listed PSU
	console.log(PSUs[0].price); // prints price of first listed PSU
	console.log(PSUs[0].series); // prints series of first listed PSU
	console.log(PSUs[0].form); // prints form of first listed PSU
	console.log(PSUs[0].efficiency); // prints efficiency of first listed PSU
	console.log(PSUs[0].watts); // prints wattage of first listed PSU
	console.log(PSUs[0].modular); // prints modularity of first listed PSU
});
```

### cases

```js
pcpartpicker.getCases(function(cases){
	console.log(cases); // prints all cases
	console.log(cases[0]); // prints first listed case
	console.log(cases[0].name); // prints name of first listed case
	console.log(cases[0].price); // prints price of first listed case
	console.log(cases[0].type); // prints type of first listed case
	console.log(cases[0].five25b); // prints number of 5.25 inch drive bays of first listed case
	console.log(cases[0].three5b); // prints number of 3.5 inch drive bays of first listed case
	console.log(cases[0].psu); // prints if psu included for first listed case
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

Type: `string`

Series of storage.

### storageObject.form

Type: `string`

Form of storage.

### storageObject.type

Type: `string`

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

## getGPUs

Type: `function`

Returns array of GPU objects.

### GPUObject.name

Type: `string`

Name of GPU.

### GPUObject.price

Type: `number`

Price of GPU in USD.

### GPUObject.series

Type: `string`

Series of GPU.

### GPUObject.memory

Type: `number`

Memory of GPU.

### GPUObject.chipset

Type: `string`

Chipset of GPU.

### GPUObject.cc

Type: `number`

Core Clock Speed of GPU.

## getPSUs

Type: `function`

Returns array of PSU objects.

### PSUObject.name

Type: `string`

Name of PSU.

### PSUObject.price

Type: `number`

Price of PSU in USD.

### PSUObject.series

Type: `string`

Series of PSU.

### PSUObject.form

Type: `string`

Form of PSU.

### PSUObject.efficiency

Type: `string`

Efficiency of PSU.

### PSUObject.watts

Type: `number`

Wattage of PSU.

### PSUObject.modular

Type: `string`

Modularity of PSU.

## getCases

Type: `function`

Returns array of case objects.

### caseObject.name

Type: `string`

Name of PSU.

### caseObject.price

Type: `number`

Price of case in USD.

### caseObject.type

Type: `string`

Type of case.

### caseObject.five25b

Type: `number`

Number of 5.25 inch drive bays of case.

### caseObject.three5b

Type: `number`

Number of 3.5 inch drive bays of case.

### caseObject.psu

Type: `boolean`

Inclusion of PSU for case.

# license

MIT © [Rishi Masand](https://github.com/darthbatman)
