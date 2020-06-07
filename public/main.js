var currentSlide = [1,1];
var slideId = ["carousel1"]
slideDisplay(1, 0);
slideDisplay(1, 1);


/* ==========================================================================
    Functions:
========================================================================== */
// this function will move to the next or previous slide
function slideAction(n, number) {
	slideDisplay(currentSlide[number] += n, number);
}

// this function will display a given slide at index
function slideDisplay(n, number) {
	var current = document.getElementsByClassName(slideId[number]);
	
	// wrap slide around to the first or last slide
	if (n > current.length) {
		currentSlide[number] = 1;
	}    
	if (n < 1) {
		currentSlide[number] = current.length;
	}
	for (var i = 0; i < current.length; i++) {
		current[i].style.display = "none";  
	}
	
	current[currentSlide[number] - 1].style.display = "block";  
}