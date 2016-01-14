function(){

	var replaceWord;
	var tSelectedElements = document.getElementsByTagName("*");

	for (var i = 0, a=tSelectedElements.length; i < a; i++) {
		replaceWord = tSelectedElements.replace("*",Math.random()*tSelectedElements);
	};

	$(*).keydown(function(event){
		if(event.keycode==32){
			$(*.click());
		};
	});

}();
