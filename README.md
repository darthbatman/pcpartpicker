# pcpartpicker
Node.js API to retrieve parts from PCPartPicker

# install

```
npm install pcpartpicker
```

# example

```js
var billboard = require("billboard-top-100");

billboard(function(songs){
	console.log(songs); //prints array of top 100 songs
	console.log(songs[3]); //prints song with rank: 4
	console.log(songs[0].title); //prints title of top song
	console.log(songs[0].artist); //prints artist of top songs
	console.log(songs[0].rank) //prints rank of top song (1)
});
```
# api

### songs

Type: `array`

Song objects.

### songObject.rank

Type: `number`

Rank of song on charts.

### songObject.title

Type: `string`

Title of song.

### songObject.artist

Type: `string`

Name of artist of song.

# license

MIT © [Rishi Masand](https://github.com/darthbatman)
