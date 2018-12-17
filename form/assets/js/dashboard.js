$(document).ready(function(){


	var account = sessionStorage.getItem("username");
	console.log(account);

	if(account == null || account == undefined){
		window.location.replace('/public/login.html');
	}else {

		$('#admin-username').text(account);
		
		console.log(sessionStorage.getItem("username"));

		render();
	    handleChart();
	}
	
});

function logout(){
	
	sessionStorage.removeItem("username");
	window.location.replace('/public/login.html');

};

function getTime() {
	var dt = new Date();
	var hours = dt.getHours();
	var minutes = dt.getMinutes();
	var ampm = hours >= 12 ? 'PM' : 'AM';
  	hours = hours % 12;
  	hours = hours ? hours : 12;
  	minutes = minutes < 10 ? '0'+minutes : minutes;
  	var strTime = hours + ':' + minutes + ampm;
  	return strTime;
	
};

function getDate() {
	var dt = new Date();
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var month = months[dt.getMonth()];
	var year = dt.getFullYear();
	var date = month + ', ' + year;
	console.log(date);
	return date;
};

function render(){
	var source   = document.getElementById("dashboard-template").innerHTML;
	var template = Handlebars.compile(source);
	var output = document.getElementById('content');

	var context = { 
		stats: {
			time: getTime(),
			sf: {
				num: 10
			},
			fp: {
				num: 8
			},
			af: {
				num: 2
			},
			se: {
				num: 12
			}

		},
		mld: {
			date: getDate()
		}
	};
	var html    = template(context);

	output.innerHTML = html;
};


function handleChart(){
	Chart.defaults.global.defaultFontFamily='-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.global.defaultFontColor="#222";
    Chart.defaults.global.tooltips.xPadding=8;
    Chart.defaults.global.tooltips.yPadding=8;
    Chart.defaults.global.tooltips.multiKeyBackground="transparent";
    var ctx = document.getElementById("page-view-chart");

    var myChart = new Chart(ctx, {
	  type: 'bar',
	  data: {
	  	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  		datasets: [

  		 {
  		 	color: '#007AFF', 
            backgroundColor: 'rgba(0, 122, 255, 0.7)', 
            borderWidth: 0,
		    label: 'Submitted Applications',
		    data: [20, 32, 18, 25, 10, 20, 19, 30, 19, 16, 14, 8]
		    
		  },
		  {
		  	color: '#4CD964', 
            backgroundColor: 'rgba(76, 217, 100, 0.7)', 
            borderWidth: 0,
		    label: 'Approved Applications',
		    data: [18, 17, 9, 20, 3, 11, 14, 20,8, 8, 4, 7]
		    
		  },
		  {
		  	color: '#FF2D55', 
            backgroundColor: "rgba(255, 45, 85, 0.7)", 
            borderWidth: 0,
		    label: 'Denied Applications',
		    data: [14, 15, 9, 5, 7, 9, 5, 10, 11, 8, 10, 1]
		  }

  		]
	  },
	  options: {
	  	scales: {
		    xAxes: [{ stacked: true }],
		    yAxes: [{ stacked: true }]
		  },
		  legend: {
                display: false
            }
	  }
	});


};

