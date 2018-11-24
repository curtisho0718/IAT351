var request = new XMLHttpRequest();
request.open('GET', 'http://www.sfu.ca/bin/wcm/course-outlines');
request.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);

	if (this.readyState == 4 && this.status == 200) {
		var dropdown= document.getElementById('dropdown');
		for (var i = 0; i < data.length; i++) {
			console.log(data[i].text);
			dropdown.innerHTML=dropdown.innerHTML+'<option value="'+data[i].text+'</option>';
		}
	}
}

request.send();