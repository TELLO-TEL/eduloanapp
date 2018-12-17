$(document).ready(function(){


	//Handlebars Helper
	Handlebars.registerHelper('ifvalue', function (conditional) {

		console.log(conditional)
		if(conditional == "IVP"){
			return "<span class='email-time email-tag bg-gradient-green'></span>";
		}
		if(conditional == "IVF"){
			return "<span class='email-time email-tag bg-gradient-yellow'></span>";
		}
		if(conditional == "LD"){
			return "<span class='email-time email-tag bg-gradient-red'></span>";
		}
	  
	});

	var mailbox = [{

		template: "IVP",
		toName: "Tatenda Mbuwayesango",
		toEmail: "tate@hotmail.com",
		mailSubject: "Initial Verification Pass",
		mailBody: "lorem ipsum",
		attachment: "file23.pdf"

	},
	{

		template: "IVF",
		toName: "Shingi Teneva",
		toEmail: "teneva@hotmail.com",
		mailSubject: "Initial Verification Pass",
		mailBody: "lorem ipsum",
		attachment: "file24.pdf"

	},
	{

		template: "LD",
		toName: "Levi Mwanawasa",
		toEmail: "mwana@hotmail.com",
		mailSubject: "Loan Application Denied",
		mailBody: "lorem ipsum",
		attachment: "file24.pdf"

	}];

	_render(mailbox);
	_init();

});

var mailbox = [{

		template: "IVP",
		toName: "Tatenda Mbuwayesango",
		toEmail: "tate@hotmail.com",
		mailSubject: "Initial Verification Pass",
		mailBody: "lorem ipsum",
		attachment: "file23.pdf"

	},
	{

		template: "IVF",
		toName: "Shingi Teneva",
		toEmail: "teneva@hotmail.com",
		mailSubject: "Initial Verification Pass",
		mailBody: "lorem ipsum",
		attachment: "file24.pdf"

	},
	{

		template: "LD",
		toName: "Levi Mwanawasa",
		toEmail: "mwana@hotmail.com",
		mailSubject: "Loan Application Denied",
		mailBody: "lorem ipsum",
		attachment: "file24.pdf"

	}];

function getData(){
  console.log(axios);
};

function _render(mailbox){

	var source   = document.getElementById("outbox-template").innerHTML;
	var template = Handlebars.compile(source);
	var output = document.getElementById('content');

	var context = { emails : mailbox};
	var html    = template(context);

	output.innerHTML = html;
};

function ren(temp){

	var source   = document.getElementById(temp).innerHTML;
	var template = Handlebars.compile(source);
	var output = document.getElementById('content');

	var context = { emails : [ ]};
	var html    = template(context);

	output.innerHTML = html;

}



function _init(){

	console.log("Outbox");
	$('#batch-email-item').click(function(e){
		e.preventDefault();
		console.log(e);
	});

};


function render(num){
switch(num){
	case 1:
        _render(mailbox);
        break;
    case 2:
        ren("responses-template");
        break;
    case 3:
        ren("failed-template");
        break;
    case 4:
       ren("manual-template");
        break;
    case 5:
       ren("queue-template");
        break;
    default:
         _render(mailbox);
        break;
}	
	

};