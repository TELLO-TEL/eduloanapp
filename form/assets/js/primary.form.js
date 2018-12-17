var formData = {
	
		    cdSurname: "",
		    cdName: "",
		    cdIdNumber: "",
		    cdHomeTelephone: "",
		    cdPhysicalAddress: "",
		    cdPhysicalAddress2: "",
		    cdPostalAddress: "",
		    cdPostalAddress2: "",
		    cdEmployer: "",
		    cdOccupation: "",
		    cdEmployeeNumber: "",
		    cdWorkTelephone: "",
		   	cdEmail: "",
		    cdCell: "",
		    sdSurname: "",
		    sdFirstNames: "",
		    sdIdNumber: "",
		    sdStudentNumber: "",
		    sdWorkTelephone: "",
		    sdEmail: "",
		    sdMobileTelephone: "",
		    sdCourse: "",
		    sdYearOfStudy: "",
		    sdInstitution: "",
		    sdApplyingFor: "",
		    sdGender: "",
		    sdMaritalStatus: "",
		    sdNumberOfDependants: "",
		    idGrossSalary: "",
		    idNetSalary: "",
		    idNetSalaryComment: "",
		    idOtherIncome: "",
		    idOtherIncomeComment: "",
		    idMonthlyIncome: "",
		    idMonthlyIncomeComment: "",
		    idMonthlyExpenses: "",
		    idMonthlyExpensesComment: "",
		    idMonthlyDisposableIncome: "",
		    idMonthlyDisposableIncomeComment: "",
		    cdPhysicalAddressCode: "",
		    cdPostalAddressCode: "",
		    qLoanAmount: "",
		    qInterest: "",
		    qInterestRate: "",
		    qMonthlyServiceFees: "",
		    qAmountRepayable: "",
		    qNumberOfInstalments: "",
		    qMonthlyInstalment: "",
		    qAnnualEffectiveRate: "",
		    qLoanType: "",
		    qCommissionAgentCode: "",
		    qAgentName: "",
		    qAgentId: "",
		    daBank: "",
		    daBranchCode: "",
		    daAccountNumber: "",
		    daDeductionDay: "",
		    daDeductionDate: "",
		    marketingOptions1: "",
		    marketingOptions2: "",
		    marketingOptions3: "",
		    cdServiceProvider: "",
		    sdHomeTelephone: "",
		    sdCourseLength: "",
		    daAccountType: ""
  
};
var sig;
var formNotFilled = true;

$(document).ready(function(){
	console.log('Form Loaded');

	//Checkbox Helper Function
	Handlebars.registerHelper('checked', function(currentValue, checkValue) {

		
		if(currentValue == checkValue){
			return 'checked="checked"';
		} else {
			return '';
		}
    	
	});


	//Form Next Btn
	//Render form template before submission 
	$('#form-next').click(function(e){

		console.log($('#tab7').hasClass('show'));
		var lastTab = $('#tab7').hasClass('show');
		if(lastTab){
			
			    e.preventDefault();
				extractFormFields();
			}
			
			
		
	});
	//Date Picker Setup
	$("#primary-dev-deduction-date").datepicker({
        autoclose: !0 
    });
	//Signature Pad Setup
	$(function() {

		sig = $('#sig').signature();
		sig.signature({thickness: 4});
		$('#clears').click(function(e) {
			e.preventDefault();
			sig.signature('clear');
		});
		
			
	});

	
});



//Generate PDF
function generatePDF(e){
	e.preventDefault();
	var doc = document.getElementById('doc');
	var opt = {
	  margin:       1,
	  filename:     'file.pdf',
	  image:        { type: 'jpeg', quality: 0.8 },
	  html2canvas:  { scale: 2 },
	  jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait'  }
	};


	doc.classList.add("smallest");
	html2pdf(doc, opt);

	var ajaxForm = formData;
	console.log(ajaxForm);
	console.log(JSON.stringify(ajaxForm));

	console.log(ajaxForm);
	axios.post('http://localhost:3000/data', ajaxForm)
	.then(function(res){
		console.log(res.data);
		_renderDone();
	})
	.catch(function(error){
		console.log(error);
	});	

	_renderDone();
	$('.submit-btn').addClass('disabled');
	_ssbCheck();
};

//Form Validation Check 
function formFilled(e){
	var missingEntries = [];


	for(i = 0; i <= e.length - 1 ; i++){
		var keypair = e[i];
		if(keypair[1] == "" || keypair[1] == undefined){
			
			missingEntries.push(keypair[0])
		}	
	}


	if(missingEntries.length == 0){
		return true;
	}else{
		return false;
		console.log("val val validate...!")
	}

}

//Form Validation 
function validateForm(e){
	var missingEntries = [];
	for(i = 0; i <= e.length - 1 ; i++){
		var keypair = e[i];
		if(keypair[1] == "" || keypair[1] == undefined){
			console.log("Missing : ", keypair[0])
			missingEntries.push(keypair[0])
		}	
	}
	var listTable = $('#missed-fields')
	var missingEntryNames = []
	for(i = 0; i <= missingEntries.length - 1 ; i++){

		switch(missingEntries[i]){
			//Tab 1 -------------------------------------------
			case "cdSurname":
				listTable.append("<tr class=''><td>"+ "Customer Surname" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-surname').parent().addClass('has-error')
				break;
			case "cdName":
				listTable.append("<tr class=''><td>"+ "Customer Name" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-first-names').parent().addClass('has-error')
				break;
			case "cdIdNumber":
				listTable.append("<tr class=''><td>"+ "Customer ID Number" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-id').parent().addClass('has-error');
				break;
			case "cdHomeTelephone":
				listTable.append("<tr class=''><td>"+ "Customer Home Telephone" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-home-telephone').parent().addClass('has-error');
				break;
			case "cdCell":
				listTable.append("<tr class=''><td>"+ "Customer Cellphone" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-cell').parent().addClass('has-error');
				break;	
			case "cdPhysicalAddress":
				listTable.append("<tr class=''><td>"+ "Customer Physical Address" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-address-1').parent().addClass('has-error');
				break;
			case "cdPostalAddress":
				listTable.append("<tr class=''><td>"+ "Customer Postal Address" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-postal-1').parent().addClass('has-error');
				break;
			case "cdEmployer":
				listTable.append("<tr class=''><td>"+ "Customer Employer" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-employer').parent().addClass('has-error');
				break;
			case "cdOccupation":
				listTable.append("<tr class=''><td>"+ "Customer Occupation" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-occupation').parent().addClass('has-error');
				break;
			case "cdServiceProvider":
				listTable.append("<tr class=''><td>"+ "Customer Service Provider" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-service').parent().addClass('has-error');
				break;
			case "cdEmployeeNumber":
				listTable.append("<tr class=''><td>"+ "Customer Employee Number" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-employee-number').parent().addClass('has-error');
				break;
			case "cdWorkTelephone":
				listTable.append("<tr class=''><td>"+ "Customer Work Number" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-work-number').parent().addClass('has-error');
				break;
			case "cdEmail":
				listTable.append("<tr class=''><td>"+ "Customer Email" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-email').parent().addClass('has-error');
				break;
			case "cdPhysicalAddressCode":
				listTable.append("<tr class=''><td>"+ "Customer Address Code/Number" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-address-3').parent().addClass('has-error');
				break;
			case "cdPostalAddressCode":
				listTable.append("<tr class=''><td>"+ "Customer Postal Code" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-postal-3').parent().addClass('has-error');
				break;
				//Tab 2	-------------------------------------------
			case "sdSurname":
				listTable.append("<tr class=''><td>"+ "Student Surname" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-student-surname').parent().addClass('has-error');
				break;
			case "sdFirstNames":
				listTable.append("<tr class=''><td>"+ "Student Name" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-student-first-names').parent().addClass('has-error');
				break;
				case "sdIdNumber":
				listTable.append("<tr class=''><td>"+ "Student ID Number" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-student-id').parent().addClass('has-error');
				break;
			case "sdStudentNumber":
				listTable.append("<tr class=''><td>"+ "Student Number" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-student-number').parent().addClass('has-error');
				break;
			case "sdWorkTelephone":
				listTable.append("<tr class=''><td>"+ "Student Work Number" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-student-work-number').parent().addClass('has-error');
				break;
			case "sdEmail":
				listTable.append("<tr class=''><td>"+ "Student Email" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-student-email').parent().addClass('has-error');
				break;
			case "sdMobileTelephone":
				listTable.append("<tr class=''><td>"+ "Student Mobile Number" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-student-cell').parent().addClass('has-error');
				break;
			case "sdCourse":
				listTable.append("<tr class=''><td>"+ "Student Course" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-student-course').parent().addClass('has-error');
				break;
			case "sd":
				listTable.append("<tr class=''><td>"+ "" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-student').parent().addClass('has-error');
				break;
			case "sdYearOfStudy":
				listTable.append("<tr class=''><td>"+ "Student Years of Study" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-student-years-study').parent().addClass('has-error');
				break;
			case "sdInstitution":
				listTable.append("<tr class=''><td>"+ "Student Instituion" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-student-institution').parent().addClass('has-error');
				break;
			case "sdCourseLength":
				listTable.append("<tr class=''><td>"+ "Student Course Length" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-student-course-length').parent().addClass('has-error');
				break;
			case "sdHomeTelephone":
				listTable.append("<tr class=''><td>"+ "Student Home Number" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-student-home-number').parent().addClass('has-error');
				break;
			case "sd":
				listTable.append("<tr class=''><td>"+ "" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-student').parent().addClass('has-error');
				break;
			case "sdApplyingFor":
				listTable.append("<tr class=''><td>"+ "Student Applying For" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-student-certificate').parent().parent().addClass('has-error');
				break;
			case "sdNumberOfDependants":
				listTable.append("<tr class=''><td>"+ "Number Of Dependants" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-student-dependents').parent().addClass('has-error');
				break;
			case "sdGender":
				listTable.append("<tr class=''><td>"+ "Student Gender" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-student-male').parent().parent().addClass('has-error');
				break;
			case "sdMaritalStatus":
				listTable.append("<tr class=''><td>"+ "Student Marital Status" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-student-married').parent().parent().addClass('has-error');
				break;	
				//Tab 3 --------------------------------------------
			case "idGrossSalary":
				listTable.append("<tr class=''><td>"+ "Gross Salary" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-gross-salary').parent().addClass('has-error');
				break;
			case "idNetSalary":
				listTable.append("<tr class=''><td>"+ "Net Salary" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-net-salary').parent().addClass('has-error');
				break;
			case "idOtherIncome":
				listTable.append("<tr class=''><td>"+ "Other Income" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-other-income').parent().addClass('has-error');
				break;
			case "idMonthlyIncome":
				listTable.append("<tr class=''><td>"+ "Monthly Income" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-total-monthly-income').parent().addClass('has-error');
				break;
			case "idMonthlyExpenses":
				listTable.append("<tr class=''><td>"+ "Monthly Expenses" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-total-monthly-expenses').parent().addClass('has-error');
				break;
			case "idMonthlyDisposableIncome":
				listTable.append("<tr class=''><td>"+ "Monthly Disposable Income" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-total-monthly-disposable-income').parent().addClass('has-error');
				break;
				//Tab 4 -------------------------------------------
			case "qLoanAmount":
				listTable.append("<tr class=''><td>"+ "Loan Amount" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-loan-amount').parent().addClass('has-error');
				break;
			case "qInterest":
				listTable.append("<tr class=''><td>"+ "Interest" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-loan-interest').parent().addClass('has-error');
				break;
			case "qInterestRate":
				listTable.append("<tr class=''><td>"+ "Interest Rate" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-loan-fixed-rate').parent().addClass('has-error');
				break;
			case "qMonthlyServiceFees":
				listTable.append("<tr class=''><td>"+ "Service Fees" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-loan-monthly-fees').parent().addClass('has-error');
				break;
			case "qAmountRepayable":
				listTable.append("<tr class=''><td>"+ "Amount Repayable" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-loan-repayable').parent().addClass('has-error');
				break;
			case "qNumberOfInstalments":
				listTable.append("<tr class=''><td>"+ "Number of Instalments" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-loan-instalments').parent().addClass('has-error');
				break;
			case "qMonthlyInstalment":
				listTable.append("<tr class=''><td>"+ "Instalment" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-loan-monthly-instalment').parent().addClass('has-error');
				break;
			case "qAnnualEffectiveRate":
				listTable.append("<tr class=''><td>"+ "Effective Rate" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-loan-annual-rate').parent().addClass('has-error');
				break;
			case "qLoanType":
				listTable.append("<tr class=''><td>"+ "Loan Type" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-study-loan').parent().parent().addClass('has-error');
				break;
				//Tab 5 --------------------------------------------	
			case "daBank":
				listTable.append("<tr class=''><td>"+ "Bank Name" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-dev-bank-name').parent().addClass('has-error');
				break;
			case "daBranchCode":
				listTable.append("<tr class=''><td>"+ "Branch Code" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-dev-branch-code').parent().addClass('has-error');
				break;
			case "daAccountNumber":
				listTable.append("<tr class=''><td>"+ "Account Number" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-dev-account-number').parent().addClass('has-error');
				break;
				
			case "daDeductionDay":
				listTable.append("<tr class=''><td>"+ "Deduction Day" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-dev-deduction-day').parent().addClass('has-error');
				break;
			case "daDeductionDate":
				listTable.append("<tr class=''><td>"+ "Deduction Date" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-dev-deduction-date').parent().addClass('has-error');
				break;
			case "daAccountType":
				listTable.append("<tr class=''><td>"+ "Account Type" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-dev-account-type').parent().addClass('has-error');
				break;
			case "daAccountHolder":
				listTable.append("<tr class=''><td>"+ "Account Holder" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-dev-account-holder').parent().addClass('has-error');
				break;
				//Tab 6 -----------------------------------------
			case "marketingOptions1":
				listTable.append("<tr class=''><td>"+ "Marketing Options" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-marketing-1-yes').parent().parent().addClass('has-error');
				break;	
			case "marketingOptions2":
				listTable.append("<tr class=''><td>"+ "Marketing Options" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-marketing-2-yes').parent().parent().addClass('has-error');
				break;
			case "marketingOptions3":
				listTable.append("<tr class=''><td>"+ "Marketing Options" + "</td><td data-col='value' class='text-right'>Empty</td></tr>");
				$('#primary-marketing-3-yes').parent().parent().addClass('has-error');
				break;																																																				
			default:
				console.log("Object key not recognized...");	
		}	
	}

	$('#validation-modal').modal('show')

}

function _ssbCheck(){

	var timeout = setTimeout(function() {
		var con = $("#ssb-container");
		//con.removeClass('text-danger');
		//con.addClass('text-success');
		var obj = {
			employeeNumber : formData.cdEmployeeNumber,
			loanAmount: formData.qLoanAmount
		};
		console.log("formObject: ", formData);
		console.log("ssbObject: ", obj);

	}, 5000);

};

function _render(fd){

	var source   = document.getElementById("primary-template").innerHTML;
	var template = Handlebars.compile(source);
	var output = document.getElementById('tab8');

	
	var context = { data: fd };
	var html    = template(context);

	output.innerHTML = html;
};

function _renderDone(fd){

	var source   = document.getElementById("done-template").innerHTML;
	var template = Handlebars.compile(source);
	var output = document.getElementById('tab8');

	var context = {};
	var html    = template(context);

	output.innerHTML = html;
};

function addSubmitBtn() {
	$('.btn-position').replaceWith("<button onclick='generatePDF(event)' class='btn btn-success btn-rounded submit-btn'> Submit Form </button>");
};

function extractForm(){


 		var string = sig.signature('toSVG');
		console.log(string);

		var xmlDoc = $.parseXML(string);
		var xml = $( xmlDoc )
		var svg = xml.find("svg");
		formData.signature = sig.signature('toSVG');  

		
		_render(formData);

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
		svg.setAttribute("fill", "none");

		$('#sig-wrapper').clone().appendTo('#sig-wrapper2');


	
};

function extractFormFields(){
	console.log('Extratcting Data from Form');

	formData.cdSurname = $('#primary-surname').val();
	formData.cdName = $('#primary-first-names').val();
	formData.cdIdNumber = $('#primary-id').val();
	formData.cdHomeTelephone = $('#primary-home-telephone').val();
	formData.cdCell = $('#primary-cell').val();
	formData.cdPhysicalAddress = $('#primary-address-1').val();
	formData.cdPhysicalAddress2 = $('#primary-address-2').val();
	formData.cdPostalAddress = $('#primary-postal-1').val();
	formData.cdPostalAddress2 = $('#primary-postal-2').val();
	formData.cdEmployer = $('#primary-employer').val();
	formData.cdOccupation = $('#primary-occupation').val();
	formData.cdServiceProvider = $('#primary-service').val();
	formData.cdEmployeeNumber = $('#primary-employee-number').val();
	formData.cdWorkTelephone = $('#primary-work-number').val();
	formData.cdEmail = $('#primary-email').val();
	formData.cdPhysicalAddressCode = $('#primary-address-3').val();
    formData.cdPostalAddressCode = $('#primary-postal-3').val();


	formData.sdSurname = $('#primary-student-surname').val();
    formData.sdFirstNames = $('#primary-student-first-names').val();
    formData.sdIdNumber = $('#primary-student-id').val();
    formData.sdStudentNumber = $('#primary-student-number').val();
    formData.sdWorkTelephone = $('#primary-student-work-number').val();
    formData.sdEmail = $('#primary-student-email').val();
    formData.sdMobileTelephone = $('#primary-student-cell').val();
    formData.sdCourse = $('#primary-student-course').val();
    formData.sdYearOfStudy = $('#primary-student-years-study').val();
    formData.sdInstitution = $('#primary-student-institution').val();
    formData.sdCourseLength = $('#primary-student-course-length').val();
    formData.sdHomeTelephone = $('#primary-student-home-number').val();
	formData.sdApplyingFor = $('input[name=applying-for]:checked').val();
    formData.sdNumberOfDependants = $('#primary-student-dependents').val();
    formData.sdGender = $('input[name=sd-gender]:checked').val();
    formData.sdMaritalStatus = $('input[name=sd-marital-status]:checked').val();


    formData.idGrossSalary = $('#primary-gross-salary').val();
    formData.idNetSalary = $('#primary-net-salary').val();
    formData.idNetSalaryComment = $('#primary-net-salary-comment').val();
    formData.idOtherIncome = $('#primary-other-income').val();
    formData.idOtherIncomeComment = $('#primary-other-income-comment').val();
    formData.idMonthlyIncome = $('#primary-total-monthly-income').val();
    formData.idMonthlyIncomeComment = $('#primary-total-monthly-income-comment').val();
    formData.idMonthlyExpenses = $('#primary-total-monthly-expenses').val();
    formData.idMonthlyExpensesComment = $('#primary-total-monthly-expenses-comment').val();
    formData.idMonthlyDisposableIncome = $('#primary-total-monthly-disposable-income').val();
    formData.idMonthlyDisposableIncomeComment = $('#primary-total-monthly-disposable-income-comment').val();

    formData.qLoanAmount = $('#primary-loan-amount').val();
    formData.qInterest = $('#primary-loan-interest').val();
    formData.qInterestRate = $('#primary-loan-fixed-rate').val();
    formData.qMonthlyServiceFees = $('#primary-loan-monthly-fees').val();
    formData.qAmountRepayable = $('#primary-loan-repayable').val();
    formData.qNumberOfInstalments = $('#primary-loan-instalments').val();
    formData.qMonthlyInstalment = $('#primary-loan-monthly-instalment').val();
    formData.qAnnualEffectiveRate = $('#primary-loan-annual-rate').val();
    formData.qLoanType = $('input[name=loan-type]:checked').val();
    formData.qCommissionAgentCode = $('#primary-loan-agent-code').val();
    formData.qAgentName = $('#primary-loan-agent-name').val();
    formData.qAgentId = $('#primary-loan-agent-id').val();

    
    formData.daBank = $('#primary-dev-bank-name').val();
    formData.daBranchCode = $('#primary-dev-branch-code').val();
    formData.daAccountNumber = $('#primary-dev-account-number').val();
    formData.daDeductionDay = $('#primary-dev-deduction-day').val();
    formData.daDeductionDate = $('#primary-dev-deduction-date').val();
    formData.daAccountType = $('#primary-dev-account-type').val();
    formData.daAccountHolder = $('#primary-dev-account-holder').val();

    formData.marketingOptions1 = $('input[name=marketing-opt-1]:checked').val();
    formData.marketingOptions2 = $('input[name=marketing-opt-2]:checked').val();
    formData.marketingOptions3 = $('input[name=marketing-opt-3]:checked').val();

    // Validation Step
    var entries = Object.entries(formData);

 	console.log(entries);

 	if(formFilled(entries)){

 		extractForm()
 		addSubmitBtn()

 	}else {

 		validateForm(entries)

 	}

}



/*function extractForm2(){
	console.log('Extratcting');
	formData.email = $('#primary-email').val();
	var string = sig.signature('toSVG');
	console.log(string);

	var xmlDoc = $.parseXML(string);
	var xml = $( xmlDoc )
	var svg = xml.find("svg");
	formData.signature = sig.signature('toSVG');

	_render(formData);
	var rect = svg.children('g').children('rect');
	//rect.setAttribute("transform", "scale(1.5)");
	console.log(rect);
	$('.sig-output').append(svg);

	var wrapper = document.getElementById('sig-wrapper').childNodes;
	console.log(wrapper);
	var svgHW = wrapper[0];
	svgHW.setAttribute("height", "100px");
	svgHW.setAttribute("width", "200px");
	var svgOuter = wrapper[0].childNodes;
	var svg = svgOuter[1];
	console.log(svg);
	svg.setAttribute("transform", "scale(0.25)");
	svg.setAttribute("fill", "none");
	//svg.setAttribute("x", "0");
	//svg.setAttribute("y", "0");

	//var element = document.getElementById('primary-pdf');
	//html2pdf(element);
};*/
