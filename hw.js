const hw = require ('./hw.json');

//console.log(hw.length);
console.log("<<<<<<FROM JASON FILE>>>>>>>");

console.log(' ');
console.log("   <<<All topping types>>>");
console.log(toppingTypes());


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
