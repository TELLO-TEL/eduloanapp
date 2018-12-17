$(document).ready(function(){

	console.log('forms page');
	

	//Checkbox Helper Function
	Handlebars.registerHelper('checked', function(currentValue, checkValue) {

		if(currentValue == checkValue){
			return 'checked="checked"';
		} else {
			return '';
		}
    	
	});


	//Get all Forms 
	getAllForms();

	renderBase("forms-list", {});




});


//Magnific Popup
function setupPopUps () {

	$('.test-popup-link').magnificPopup({
	  type: 'image'
	  // other options
	});

};

function renderBase(temp, form){
   if(temp == "form-verification"){

    console.log(form);

  var source   = document.getElementById("form-verification-template").innerHTML;
	var template = Handlebars.compile(source);
	var output = document.getElementById('content');

	var context = {};
	var html    = template(context);

	output.innerHTML = html;
	renderForm(form);
	renderAttachments();



   }
   if(temp == "forms-list"){
   	renderFormsTable()
   }
	

	
};

function renderForm(form){

	var source   = document.getElementById("client-form-template").innerHTML;
	var template = Handlebars.compile(source);
	var output = document.getElementById('form-output');

	var context = {data: form};
	var html    = template(context);

	output.innerHTML = html;

  console.log(form);

  /*var xmlDoc = $.parseXML(form.signature);
  var xml = $( xmlDoc )
  var svg = xml.find("svg");

  var rect = svg.children('g').children('rect');
  console.log(rect);
  $('#sig-wrapper').append(svg);

  var wrapper = document.getElementById('sig-wrapper').childNodes;
  console.log(wrapper);
  var svgHW = wrapper[0];
  svgHW.setAttribute("height", "100px");
  svgHW.setAttribute("width", "200px");
  var svgOuter = wrapper[0].childNodes;
  var svg = svgOuter[1];
  console.log(svg);
  svg.setAttribute("transform", "scale(0.25)");
  svg.setAttribute("fill", "none");*/

};


var attachments = [
{
	fileName: "id-sample.png",
	fileSrc: "../assets/img/id-sample.png"

},
{
	fileName: "birth-sample.jpg",
	fileSrc: "../assets/img/birth-sample.jpg"

}
];

function renderAttachments(){

	var source   = document.getElementById("client-attachments-template").innerHTML;
	var template = Handlebars.compile(source);
	var output = document.getElementById('attachments-output');

	var context = { attachments: attachments};
	var html    = template(context);

	output.innerHTML = html;

	setupPopUps();
	//renderFormsTable();

};



// All Forms & rawForms Array
var forms = [ ];
var rawForms = [ ];
// Table Variable
var table;

function renderFormsTable(){

	var source   = document.getElementById("form-table-template").innerHTML;
	var template = Handlebars.compile(source);
	var output = document.getElementById('content');

	var context = { forms: forms };
	var html    = template(context);

	output.innerHTML = html;
	tableInit();

};

function tableInit() {
	var e=$(window).width()>767;
	table = $('#table_id').DataTable(
		{
    	data: forms,
        dom:"<'row'<'col-sm-3'l><'col-sm-9 text-right'<'m-l-10 pull-right'B>f>>rt<'pull-left'i>p", lengthMenu:[20, 40, 60, 80, 100], colReorder:!0 
        ,keys:!0, responsive:!0, rowReorder:e, buttons:[ {
            extend: "copy", className: "btn btn-default btn-sm"
        }
        , {
            extend: "print", className: "btn btn-default btn-sm"
        }
        , {
            extend: "excel", className: "btn btn-default btn-sm"
        }
        , {
            extend: "pdf", className: "btn btn-default btn-sm"
        }
        ], columnDefs:[ {
            targets: "no-sort", orderable: !1, order: []
        }
        ], order:[[1, "asc"]]
        
    }
    );

    table.on("order.dt search.dt", function() {
        table.column(0, {
            search: "applied", order: "applied"
        }
        ).nodes().each(function(e, table) {
            e.innerHTML=table+1+"."
        }
        )
    }
    ).draw()
};


function backToForms() {
	renderFormsTable();
};

var ff = [];

//Axios call to api to get all client forms
function getAllForms(){

	axios.get('http://localhost:3000/allforms')
    .then(function (res) {
      
      rawForms= res.data;
      console.log(rawForms);


      function formStatus(a,r,e){
          if(e){
            var v = "Verified"
            return v;
          }
          else {
            return "Un-Verified";
          }
        };

      rawForms.forEach(function(form, index){
        console.log(index);
        
        var f = {

          clientName: form.cdSurname + ' ' + form.cdName,
          email: form.cdEmail,
          formType: "Primary",
          attachments: 0,
          subDate: form.date,
          formStatus: formStatus(form.approved, form.rejected, form.edited),
          verified: form.edited

        };

        forms.push(f);



      });

      console.log(forms);
      renderFormsTable();
      TableData.init();
      tableEvents();

    })
    .catch(function (error) {
      console.log(error);
    }); 

};


function tableEvents(){

};

var currentForm= {};

function viewForm(event) {

     console.log("viewForm");
     console.log($(event.target));
     if($(event.target).is("i")){
      console.log("i:")
       console.log($(event.target).parent().parent().parent());
       var r = $(event.target).parent().parent().parent();
     }
     else if($(event.target).is("a")){
      console.log("a:")
       console.log($(event.target).parent().parent());
       var r = $(event.target).parent().parent();
     }
    
     //var r = $(event.target).parent().parent().parent();
     var clientEmail = r.children('#email').html();

     console.log("from onclick: " + clientEmail);

     rawForms.forEach(function(form){
      if(form.cdEmail == clientEmail){
        console.log(form);
        currentForm = form;

      }
     })

     renderBase("form-verification", currentForm);



};


function verifyForm(event) {
  event.preventDefault();
  var approveUrl = "http://localhost:3000/approved/" + currentForm._id;
  console.log(approveUrl);
  axios.post(approveUrl, {
    edited: true
  })
  .then(function(res){
    console.log(res);
    $('#default-modal').modal('hide');
    forms = [];
    rawForms = [];
    getAllForms();
    renderBase("forms-list", {});

  })
  .catch(function(err){
    console.log(err);
  })

}







