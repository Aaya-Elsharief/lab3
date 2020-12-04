const hw = require ('./hw.json');

//console.log(hw.length);
console.log("<<<<<<FROM JASON FILE>>>>>>>");

console.log(' ');
console.log("   <<<All topping types>>>");
console.log(toppingTypes());


console.log(' ');
console.log("   <<<All batter types>>>");
console.log(batterTypes());



console.log(' ');
console.log("   <<<Ppu Sum>>>");
console.log(ppuSum());

function toppingTypes() {
	var toppingTypes = [];
	var index = 0;
	for (let i=0 ; i< hw.length ; i++){
	    for (let j=0 ; j<hw[i].topping.length ; j++){
			toppingTypes[index++]=hw[i].topping[j].type;
	}	 
	}
	return toppingTypes;
}

function batterTypes() {
	var batterTypes = [];
	var index = 0;
	for (let i=0 ; i< hw.length ; i++){
	    for (let j=0 ; j<hw[i].batters.batter.length ; j++){
			batterTypes[index++]=hw[i].batters.batter[j].type;		
	}	 
	}
		return batterTypes;
}


function ppuSum() {
	var ppuSum = 0;
	for (let i=0 ; i< hw.length ; i++){
			ppuSum+=hw[i].ppu;	 
	}
	return ppuSum;
}