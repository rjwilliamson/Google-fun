function animateGoogle(name){
    
	const body = document.querySelector('body');
	body.classList.add(name);

	let intervals = setInterval(function(){
    
    body.classList.remove(name);
    clearInterval(intervals);
    

	},1000);


}


function element(event,element,callback){
	document.querySelector(element).addEventListener(event,callback);

}


element('click','#swing',function(){

animateGoogle('swing');

});

element('click','#bounce',function(){

animateGoogle('bounce');

});


element('click','#flash',function(){

animateGoogle('flash');

});


element('mouseover','ul',function(){

swal('STOP!!!','This site is not actually google stay away','warning');

})

element('click','#kill',function(){

document.querySelector('body').style.display = 'none';

})
