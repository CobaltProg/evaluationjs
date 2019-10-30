var wm = document.getElementById("world-map");
wm.addEventListener("load", function() {
	
	var caption = document.querySelector("#map-caption"); 
    var selectedCountries = document.getElementsByClassName("country");
    
	for (var i = 0, length = selectedCountries.length; i < length; i++) {
		
		// add mouseover event listener on all selected countries
		selectedCountries[i].addEventListener("mouseover", function() {			
			var elemId = this.id; // stores current id
			elemId = elemId.split('_').join(' '); // remove the default "_" separator from country names
            caption.innerHTML = elemId; //get the id to write the name of the country
            this.style.fill = "blue"; //add background color on over the country
		});		
		
		// add mouseout event listener on all selected countries
		selectedCountries[i].addEventListener("mouseout", function() {
            caption.innerHTML = "elemId"; //remove the country name
            this.style.fill = "red"; //remove background color
        });	

        
    }

    for (var j = 0, length = selectedCountries.length; j < length; j++) {
        // add click event listener on all selected countries
		selectedCountries[i].addEventListener("click", function() {
            var elemId = this.id; // stores current id
			elemId = elemId.split('_').join(' '); // remove the default "_" separator from country names
            caption.innerHTML = elemId; //get the id to write the name of the country
            this.style.fill = "#ff452f"; //add background color
        });	
	}	

}, false);