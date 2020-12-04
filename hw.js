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


console.log(' ');
console.log("   <<<Ppu Average>>>");
console.log(ppuAverage());


console.log(' ');
console.log("   <<<All IDs regardless to the type>>>");
console.log(allIDs());

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

function ppuAverage() {
	var ppuAverage = ppuSum()/hw.length ;
	
	return ppuAverage;
}


function allIDs() {
	var allIDs = [];
	var index = 0;
	for (let i=0 ; i< hw.length ; i++){
		allIDs[index++]=hw[i].id;
	    for (let j=0 ; j<hw[i].topping.length ; j++){
			allIDs[index++]=hw[i].topping[j].id;
	}	
		  for (let k=0 ; k<hw[i].batters.batter.length  ; k++){
			allIDs[index++]=hw[i].batters.batter[k].id;
	}	
		
	}
	//console.log(allIDs.length);
	return allIDs;
}