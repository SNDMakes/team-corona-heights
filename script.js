$( document ).ready(function() {


    $('#submit').on('click',function(){
    	var input = $('#search-box').val();
    	var base_url = 'http://clips.gifs.is/?q=';

    	location.href = base_url + input;
    	console.log(input);
    });

 //    $("#search-box").onkeydown = function(event){
 //    	if(event.keyCode == 13){
 //        	var input = $('#search-box').val();
	//     	var base_url = 'http://clips.gifs.is/?q=';

	//     	location.href = base_url + input;
	//     	console.log(input);
 //    	}
	// };

});