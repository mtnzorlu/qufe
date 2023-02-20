const theme = localStorage.getItem('theme');

const userPrefers = getComputedStyle(document.documentElement).getPropertyValue('content');

if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
} else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');
} else if (userPrefers === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	window.localStorage.setItem('theme', 'dark');
} else {
	document.documentElement.setAttribute('data-theme', 'light');
	window.localStorage.setItem('theme', 'light');
}

function modeSwitcher() {
	const currentMode = document.documentElement.getAttribute('data-theme');
	if (currentMode === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		window.localStorage.setItem('theme', 'light');
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		window.localStorage.setItem('theme', 'dark');
	}
}
