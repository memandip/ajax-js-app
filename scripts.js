$('#searchtxt').focus();

$('#searchtxt').keyup(function(){

 	var results;
 	var output = "";

 	var searchtxt = $('#searchtxt').val();

 	// i means case insensitive regular expression
 	var myExp = new RegExp(searchtxt,'i');

	$.getJSON('data.json',function(data){
		
		var output = "";
		
		$.each(data,function(key,val){

			// -1 means it didn't find that letter or word
			
			/* 
				search function search through the string provided and returns the position of 
				string that is being searched if found
			*/
			if((val.name.search(myExp) != -1)  ){
				results = true;
				output += "<div class='results'>";
				output += "<h1>"+val.name+"</h1>";
				output += "<div class='image'><img src='images/"+val.short_name+".jpg'></div>";
				output += "<div class='bio'><p>"+val.bio+"</p></div>";
				output += "</div>";
			}
			
		});

		if(results != true){
			output += "<h3>No results Found</h3>";
		}

		$('#content').html(output);

		$("div.image").hover(function(){
		 	$(this).next().slideToggle();
		 });

	});

});

  //.on('keyup',function) same as below

 // $(document).ajaxStart(function(){
 // 	console.log("Ajax Started.");
 // });

 // $(document).ajaxSend(function(){
 // 	console.log("Ajax Request Sent.");
 // });

 // $(document).ajaxComplete(function(){
 // 	console.log("Ajax Request Completed.");
 // });

 // $(document).ajaxStop(function(){
 // 	console.log("Ajax Request Stopped.");
 // });

 // $(document).ajaxSuccess(function(){
 // 	console.log("Ajax Request Succeeded.");
 // });

 // $(document).ajaxError(function(event,jqXHR,setting,err){
 // 	console.log("Ajax Request Error.");
 // });

 // $.ajax({
 // 	"url":"get.php",
 // 	"type":"POST",
 // 	"data":{text:text}
 // 	"success":function(){
 // 		$('#content').val("");
 // 	}
 // });
