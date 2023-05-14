const menu = document.getElementById('M');
const side = document.getElementsByClassName('bar')[0];

menu.addEventListener('click', function(){
	side.classList.toggle('hide');

})
