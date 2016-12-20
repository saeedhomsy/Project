function makeUser(fullName,email,username,phone,password,country,city) {
	return {
		fullName:fullName,
		email:email,
		username:username,
		phone:phone,
		password:password,
		country:country,
		city:city
	}
}
function validate(arr,typearr){
	// var x = document.getElementById(contID);
	var isThereEmpty=false
	for (var i = 0; i < arr.length; i++) {
		var x = $('#'+arr[i])
		if(x.val() === ''){
			$(x).css('border','1px solid red')
			isThereEmpty = true;	
		}else{
			$(x).css('border','1px solid black')
		}
	}
	return isThereEmpty
}