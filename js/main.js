document.addEventListener('DOMContentLoaded', function(){
	let menuVertical = document.getElementById('menuVertical');
	menuVertical.addEventListener('click', function(e){
		let actived = menuVertical.querySelector('.contact_active');
		if (actived) actived.classList.remove('contact_active');
		let target = e.target;
		while (!target.classList.contains('contact')) {
			target = target.parentNode;
		};
		target.classList.add('contact_active');
	});
}, false);