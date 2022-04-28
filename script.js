const HEIGHT_NUM = 500;
const btn = document.getElementById('scroll-top');

btn.addEventListener('click', function(){
    window.scrollTo({top:0,behavior: 'smooth'});
});

function visible(){
	if(window.pageYOffset >= HEIGHT_NUM){
		btn.classList.add('visible');
	}else{
		btn.classList.remove('visible');
	}
}

window.onscroll = visible;