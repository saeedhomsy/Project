var loginName = "";
var carts = [];

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
function validate(arr,isForRegis,userName,redirectURL){
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

	if (!isThereEmpty) {
		if (isForRegis) {
			users.push(makeUser($('#inputFname1').val(),$('#input_email').val(),$('#inputFname1').val(),$('#mobile').val(),$('#inputPassword1').val(),$('#country').val(),$('#city').val()));	
			loginName = $('#inputFname1').val();
		}else{	
			loginName = userName;
		}
		window.location = redirectURL
	} 
}

function getUserName(){
	$('#setUserName').val(users[0].fullName);
}

if(window.localStorage.length===0){
	for (var i = 0; i < users.length; i++) {
		window.localStorage['userName' + i] = users[i].fullName + '|' + users[i].email + '|' + users[i].username + '|' + users[i].phone + '|' + users[i].password + '|' + users[i].country + '|' + users[i].city;
	}
}

function addToCart(id,q){
	var obj = {}
	var arr = carts.filter(function(elem,i){
		return elem.id===id;
	});
	if(arr.length>0){
		var arr1 = carts.filter(function(elem,i){
			return elem.id===id && elem.Qty === q;
		});
		if (arr1.length>0) {
			alert('you added befor')
		}else{
			carts.filter(function(elem,i){
				return elem.id===id;
			})[0].Qty = q;
		}
		
	}else{
		obj['Qty'] = q;
		obj.id = id;
		carts.push(obj)
	}
}