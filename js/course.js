var request = new XMLHttpRequest();
request.open('GET','http://www.sfu.ca/bin/wcm/course-outlines');
request.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);
	for (var i = 0; i < data.length; i++) {
		console.log(data[i].text);
	}
}
request.send();