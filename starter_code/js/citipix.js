$(document).ready(function(){

$('#submit-btn').click(changeBackground);

function changeBackground(){
	event.preventDefault();
	var city = $('#city-type').val();
	var trimCity = city.trim();		//bonus

	if (trimCity == "New York" || trimCity == "New York City" || trimCity == "NYC"){
		$('body').css({'background-image':'url(images/nyc.jpg)'});
	}

	else if (trimCity == "San Francisco" || trimCity == "SF" || trimCity == "Bay Area"){
		$('body').css({'background-image':'url(images/sf.jpg)'});
	}

	else if (trimCity == "Los Angeles" || trimCity == "LA" || trimCity == "LAX"){
		$('body').css({'background-image':'url(images/la.jpg)'});
	}

	else if (trimCity == "Austin" || trimCity == "ATX"){
		$('body').css({'background-image':'url(images/austin.jpg)'});
	}

	else if (trimCity == "Sydney" || trimCity == "SYD"){
		$('body').css({'background-image':'url(images/sydney.jpg)'});
	}

	else{
		$('body').css({'background-image':'url(images/citipix_skyline.jpg)'});
	}

	$('#city-type').val('');	//bonus

};		//end changeBackground
});		// end ready

//Pseudocode
//1. Get user input and store it in a variable city
//2. Remove all leading and trailing white spaces
//3. Compare user input with the 5 cities	
//4. If the user input matches one of the cities - change the background image to that city
//5. Else keep the background image the same
//6. Reset user input field after it is submitted