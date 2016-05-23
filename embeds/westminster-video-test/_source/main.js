
function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

var WestminsterVideoSrc = document.getElementById("westminster__video--loader");


function isScrolledIntoView(element) {
      var elementTop = element.getBoundingClientRect().top,
        elementBottom = element.getBoundingClientRect().bottom;

    return elementTop < window.innerHeight && elementBottom >= 0;
}

var WestminsterVideo = function(){
	if (isScrolledIntoView(document.getElementById("westminster__video--loader"))) {
      loadJSON("http://interactive.guim.co.uk/docsdata-test/1g-nqRQPtxr70cnfyttZSrPJiSkiSgVNam9J53drsZ2g.json", function(data) {
        WestminsterVideoSrc.innerHTML = data.sheets.Sheet1[0].Content;
        WestminsterVideoSrc.play(0);
      })
	} else {
		    WestminsterVideoSrc.pause(0);
	     }
  }

window.onscroll = function() {
    WestminsterVideo();
};
