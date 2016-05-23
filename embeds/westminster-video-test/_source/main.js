var WestminsterVideoSrc = document.getElementById("westminster__video--loader");

function isScrolledIntoView(element) {
    var elementTop    = element.getBoundingClientRect().top,
        elementBottom = element.getBoundingClientRect().bottom;

    return elementTop < window.innerHeight && elementBottom >= 0;
}

var WestminsterVideo = function(){
	if (isScrolledIntoView(document.getElementById("westminster__video--loader"))) {
		WestminsterVideoSrc.play(0);
	} else {
		WestminsterVideoSrc.pause(0);
	}
}

window.onscroll = function() {
    WestminsterVideo();
};
