// console.log("loaded");

// function lcfc_Video() { 
//     document.getElementById("mp4_src").src = "@@assetPath@@/leicestercity-celebration-cut.mp4";
//     document.getElementById("leicesters-journey__videoLoader").load();
// }

var lcfcVideoSrc = document.getElementById("leicester__video--loader");

function isScrolledIntoView(element) {
    var elementTop    = element.getBoundingClientRect().top,
        elementBottom = element.getBoundingClientRect().bottom;

    return elementTop < window.innerHeight && elementBottom >= 0;
}

var lcfcVideo = function(){
	if (isScrolledIntoView(document.getElementById("leicester__video--loader"))) {
		lcfcVideoSrc.play(0);
	} else {
		lcfcVideoSrc.pause(0);
	}
}

window.onscroll = function() {
    lcfcVideo();
};