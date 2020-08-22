$(function (window) {
	$("#navbarToggle").blur(function (event) {
		var screenWidth = window.innerWidth;
		console.log(window.innerWidth);
		if(screenWidth < 768){
			document.getElementById("#collapsable-nav").collapse('hide');
		}
	});
});