window.onload=populateSelect();

function populateSelect(){
	var request=new XMLHttpRequest();
	request.open('GET','http://www.sfu.ca/bin/wcm/course-outlines');

	request.onreadystatechange=function(){
		if(request.readyState===XMLHttpRequest.DONE && request.status===200){
			var data =JSON.parse(request.responseText);
			var ele=document.getElementById('sel');
			var year= 
			for(var i=0; i<year.length, i++){

			}
		}
	}
	
}
// var request = new XMLHttpRequest();
// request.open('GET', 'http://www.sfu.ca/bin/wcm/course-outlines');
// request.onload = function () {
// 	// begin accessing JSON data here
// 	var data = JSON.parse(this.response);


// 		var dropdown= document.getElementById('dropdown');
// 		for (var i = 0; i < data.length; i++) {
// 			console.log(data[i].text);
// 			// dropdown.innerHTML=dropdown.innerHTML+'<option value="'+data[i].text+'</option>';
// 		}
// 	}


// request.send();