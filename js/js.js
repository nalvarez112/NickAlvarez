
// Home Screen 
var homeScreen = document.querySelector('.home-screen');
var header = document.querySelector('header');

// Work Screen
var workScreen = document.querySelector('.work-screen');
var work = document.querySelector('.work');

// Projects Screen
var projectsScreen = document.querySelector('.projects-screen');
var projects = document.querySelector('.projects')

// About Screen
var aboutScreen = document.querySelector('.about-screen');
var about = document.querySelector('.about');




// Header Functions
// ---------------------

header.addEventListener('click', clickHome);

function clickHome () {
	showScreen('homeScreen');
	console.log('home screen');

}

// Work LI Function
// --------------------

work.addEventListener('click', clickWork);

function clickWork () {
	showScreen('workScreen');
	console.log('work screen');
}


// Projects LI Function 
// ----------------------

projects.addEventListener('click', clickProjects);

function clickProjects (){
	showScreen('projectsScreen');
	console.log('projectsScreen');
}


// About LI Funtion
// ----------------------

about.addEventListener('click', clickAbout);

function clickAbout (){
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
	} else if (screen == 'workScreen') {
		workScreen.classList.remove('hide');
	} else if (screen == 'projectsScreen') {
		projectsScreen.classList.remove('hide');
	}else if (screen == 'aboutScreen'){
		aboutScreen.classList.remove('hide');
	} 
};

showScreen('homeScreen');