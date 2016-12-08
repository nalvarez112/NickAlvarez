
var screen = document.querySelector('.screen');

// Home Screen 
var homeScreen = document.querySelector('.home-screen');
var header = document.querySelector('header');
var home = document.querySelector('.home');

// Work Screen
var workScreen = document.querySelector('.work-screen');
var workPort = document.querySelector('.work-port')
var work = document.querySelector('.work');

// Projects Screen
var projectsScreen = document.querySelector('.projects-screen');
var projectsPort = document.querySelector('.projects-port');
var projects = document.querySelector('.projects');

// About Screen
var aboutScreen = document.querySelector('.about-screen');
var aboutPort = document.querySelector('.about-port');
var about = document.querySelector('.about');

var city = document.querySelector('.city');
var menu = document.querySelector('.menu')


// Header Functions
// ---------------------

home.addEventListener('click', clickHome);

function clickHome (e) {
	var target = e.target;
	if (target.tagName != 'LI'){
		target = target.closest("li");  
	}
	showScreen('homeScreen');
	console.log('home screen');

}

// Work LI Function
// --------------------

workPort.addEventListener('click', clickWork);
work.addEventListener('click', clickWork);


function clickWork (e) {

	var target = e.target;
	if (target.tagName != 'LI'){
		target = target.closest("li");  
	}

	showScreen('workScreen');
	console.log('work screen');
}


// Projects LI Function 
// ----------------------
projectsPort.addEventListener('click', clickProjects);
projects.addEventListener('click', clickProjects);

function clickProjects (e){

	var target = e.target;
	if (target.tagName != 'LI'){
		target = target.closest("li");  
	}

	showScreen('projectsScreen');
	console.log('projectsScreen');
}


// About LI Funtion
// ----------------------
aboutPort.addEventListener('click', clickAbout);
about.addEventListener('click', clickAbout);

function clickAbout (e){

	var target = e.target;
	if (target.tagName != 'LI'){
		target = target.closest("li");  
	}

	showScreen('aboutScreen');
	console.log('aboutScreen')
}




// SWITCH SCREENS
function showScreen(screen) {
	homeScreen.classList.add('hide');
	workScreen.classList.add('hide');
	projectsScreen.classList.add('hide');
	aboutScreen.classList.add('hide');

	if (screen == 'homeScreen') {
		homeScreen.classList.remove('hide');
		city.classList.remove('hide');
		menu.classList.add('hide');

	} else if (screen == 'workScreen') {
		workScreen.classList.remove('hide');
		city.classList.add('hide');
		menu.classList.remove('hide');

	} else if (screen == 'projectsScreen') {
		projectsScreen.classList.remove('hide');
		city.classList.add('hide');
		menu.classList.remove('hide');
	}else if (screen == 'aboutScreen'){
		aboutScreen.classList.remove('hide');
		city.classList.add('hide');
		menu.classList.remove('hide');
	} 
};

showScreen('homeScreen');