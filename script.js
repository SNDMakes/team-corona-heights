$( document ).ready(function() {


    $('#submit').on('click',function(){
    	var input = $('#search-box').val();
    	// var input_parse = input.split(" ");

    	var base_url = 'http://clips.gifs.is/?q=';

    	location.href = base_url + input;

    });

});