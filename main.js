function checkPass(str){
	if(str.trim()===""){
		return "insert pass";
	}

	var conditionVal = 0;
	if (str.length>=8) {
		conditionVal+=1;
	}
	if (/[A-Z]/.test(str)) {
		conditionVal+=1;
	}
	if (/[0-9]/.test(str)) {
		conditionVal+=1;
	}
	if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(str)) {
		conditionVal+=1;
	}

	if(conditionVal===0){
		return "try again";
	}else if(conditionVal===1){
		return "Password is week";
	}else if(conditionVal===2){
		return "Password is meduiem";
	}else if(conditionVal===3){
		return "Password is strong";
	}else{
		return "Password is very strong";
	}
}


//Jquery
$('img').attr('src', 'http://i.imgur.com/nWGCwiE.gif')
 
$('h1').text('hello')
$('#notification').html('<div class="alert">Hold on! <b>an error</b> has occured!</p>')
$('.container').append("<p>What's the difference between <i>.append()</i> and .html()?</p>")

$('h1').css({'color':'blue','background-color':'red'})
$('#everything').css('font-size','20px')
$('.holder').css('border','1px solid black')
$('li').css('font-weight','bold')
$('h1 + p').css('color','green')
$('#everything').hide('slow');
$('#everything').show('slow');
