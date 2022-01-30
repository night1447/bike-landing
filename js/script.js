var MenuButton = document.querySelector('.jsMenuButton');
var Menu = document.querySelector('.main-menu');


	MenuButton.addEventListener('click', () => {
		Menu.classList.toggle('jsVisually-hidden');
		MenuButton.classList.toggle('rotate-button');
	});