$(document).ready(function(){

	console.log('Mailer Templastes');
	$('#summernote').summernote({
		  height: 300,                 // set editor height
		  minHeight: null,             // set minimum height of editor
		  maxHeight: null,
		  toolbar: [
		    // [groupName, [list of button]]
		    ['style', ['bold', 'italic', 'underline', 'strikethrough', 'clear']],
		    ['color', ['color']],
		    ['style', ['style']],
		    ['fontsize', ['fontsize']],
		    ['para', ['ul', 'ol', 'paragraph']],
		    ['height', ['height']]
		  ] 
	});

	window.saveTemp = function(e){
		e.preventDefault();
		var markup = $('#summernote').summernote('code');
	 	console.log(markup);
	};
	 



	var temp = {

	};

	var greeting = template("Hello {name}, you have {count} unread messages", {
    name: "Robert",
    count: 12
	});
	
	console.log(greeting);
});