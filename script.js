(function(){
    "use strict";

        let convertType = 'miles';
		const heading = document.querySelector('h1');
		const intro = document.querySelector('p');
		const answerDiv = document.getElementById('answer');
		const form = document.getElementById('convert');


		document.addEventListener('keydown', function(event){
			const key = event.code 
			
			if(key === 'KeyK'){
				//change the value of the convertType variable
				convertType = 'kilometers'; 
				//change the heading
				heading.innerHTML = "Kilometers to Miles Converter";
				//change the intro paragraph
				intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles";
			}else if(key === 'KeyM'){
				//change the value of the convertType variable
				convertType = 'miles'; 
				//change the heading
				heading.innerHTML = "Miles to Kilometer Converter";
				//change the intro paragraph
				intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers";
			}
		});

		form.addEventListener('submit', function(event){
			event.preventDefault();

			const distance = parseFloat(document.getElementById('distance').value);

			if(distance){
				//convert Miles to Kilometers
				if(convertType == 'miles'){
					const converted = (distance * 1.609344).toFixed(3);
					answerDiv.innerHTML = `<h2> ${distance} miles converts to ${converted} kilometers </h2>`;
				}else{
				//convert Kilometers to Miles
					const converted = (distance * 0.621371192).toFixed(3);
					answerDiv.innerHTML = `<h2> ${distance} kilometers converts to ${converted} miles </h2>`;
				}

			}else{
				//send error message
				answerDiv.innerHTML = "<h2> Please provide a number </h2>";
			}
		});
})();