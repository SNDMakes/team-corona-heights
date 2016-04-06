$( document ).ready(function() {


    $('#submit').on('click',function(){
    	var input = $('#search-box').val();
    	var base_url = 'http://clips.gifs.is/?q=';

    	location.href = base_url + input;
    	console.log(input);
    });

	$.ajax({
	  dataType: "json",
	  url: 'clips.json',
	  success: function(data){
	  	// console.log(data);

	  	buildHome(data);
	  }

	});

	function buildHome(data){
		for (i = 0; i < data.length; i++) { 
    		console.log(data[i].title);


    		$('#discover .row').append('<div class="col-md-3"><img class="thumb" src="'+data[i].thumbnailImage+'"><div class="info"><p class="title">' + data[i].title + '</p><p class="org">'+data[i].organization+'</p><p class="name">'+data[i].designers+'</p></div></div>');
		}
	}

	// function append(){
		
	// }

 //    $("#search-box").onkeydown = function(event){
 //    	if(event.keyCode == 13){
 //        	var input = $('#search-box').val();
	//     	var base_url = 'http://clips.gifs.is/?q=';

	//     	location.href = base_url + input;
	//     	console.log(input);
 //    	}
	// };

});