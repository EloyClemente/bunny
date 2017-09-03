document.addEventListener('DOMContentLoaded', function(){






var bunny  = document.querySelector('#bunny');



function bunny_far()
{
	bunny.className = 'bunny-far';

	setTimeout(function(){
		bunny_middle()
	}, 7000);
}
bunny_far();



function bunny_middle()
{	
	bunny.className = 'bunny-middle';

	setTimeout(function(){
		bunny_near()
	}, 5000);
}



function bunny_near()
{
	bunny.className = 'bunny-near';

	setTimeout(function(){
		bunny_near_plus()
	}, 5000);
}



function bunny_near_plus()
{
	bunny.className = 'bunny-near-plus';

	setTimeout(function(){
		bunny_near_back()
	}, 5000);
}



function bunny_near_back()
{
	bunny.className = 'bunny-near';

	setTimeout(function(){
		bunny_middle_back()
	}, 5000);
}



function bunny_middle_back()
{
	bunny.className = 'bunny-middle';

	setTimeout(function(){
		bunny_far()
	}, 5000);
}





});
























