var resources = {
	Minerals : {amount: 0, income: 0},
	Water : {amount: 0, income: 0},
	Light: {amount: 0, income: 0},
	Starch : {amount: 100, income: 0},
}
var grow = {
	Leaves : 0,
	Wood : 0,
	Roots : 0,
	Blossoms : 0,
	Fruits : 0,
}
var settings = {
	tickspeed : 600000,
	autosavespeed : 30000,
	autosaveId : '',
}
window.onload = function(){
	load();
	settings.autosaveId = setInterval(function(){
		save();
	}, settings.autosavespeed);
	setInterval(function(){update()},settings.tickspeed);
}

function load(){
	var savegame = JSON.parse(localStorage.getItem("save"));
	console.log(localStorage.getItem("save"));
	console.log(JSON.parse(localStorage.getItem("save")));
	if(savegame != undefined){
		for(var variable in savegame){
			for(var res in savegame[variable]){
				variable[res] = savegame[variable][res];
			}
		}
		updateResources();
	}
	else{
		start();
	}
}
function save(){
	var save = {
   		resources: resources,
		grow:grow,
		settings: settings,
    }
	localStorage.setItem("save",JSON.stringify(save));
}
function deleteSave(){
	localStorage.removeItem('save');
	location.reload();
}

function start(){
	document.getElementById("promptHolder").style.display = "inline";
	var show = document.getElementById("promptText");
	show.innerHTML = "I am Tree! No eyes, no see! I am Fruit! Make me grow!";
}
function update(){
	updateResources();
}
function updateResources(){
	console.log(resources);
	for(var res in resources){
		resources[res].amount += resources[res].income;
		var div = document.getElementById(res);
		console.log(res);
		div.innerHTML = res + " : " + resources[res].amount;
		if(resources[res].income >= 0){
			div.innerHTML += " + " + resources[res].income;
		}
		else{
			div.innerHTML += " - " + resources[res].income;
		}
	}
}
function growMe(id){
	
}
function isGrowable(id){
	
}