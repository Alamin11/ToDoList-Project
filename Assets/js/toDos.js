// alert(" js ok");
//Checking off on a list 
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Deleting a to-do list
$("ul").on("click", "span", function(event){
	//alert("ok");
	$(this).parent().fadeOut(500, function(){
		this.remove();
	});
	event.stopPropagation();
});

$("input[type = text]").keypress(function(event){
	//console.log("okk");
	if(event.which === 13){
		//Grabbing the input text
		var toDotext = $(this).val();
		$(this).val("");

		//Creating a new li and add it to ul 
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDotext + "</li>")

	}
});

$(".fa-plus").on("click", function(){
	// alert("ok");
	$("input[type = text]").fadeToggle(500);
});