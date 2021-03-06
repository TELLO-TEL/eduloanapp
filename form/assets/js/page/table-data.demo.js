/*
Template Name: Infinite Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.7 & Bootstrap 4
Version: 1.3.0
Author: Sean Ngu
Website: http://www.seantheme.com/infinite-admin/admin/html/
*/

var data = [
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "salary":     "$3,120",
        "start_date": "2011/04/25",
        "office":     "Edinburgh",
        "extn":       "5421"
    },
    {
        "name":       "Garrett Winters",
        "position":   "Director",
        "salary":     "$5,300",
        "start_date": "2011/07/25",
        "office":     "Edinburgh",
        "extn":       "8422"
    }
];

var t;

var handleRenderTableData=function() {
    var e=$(window).width()>767;
    t=$("#datatables-default").DataTable( {
    	data: data,
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
    t.on("order.dt search.dt", function() {
        t.column(0, {
            search: "applied", order: "applied"
        }
        ).nodes().each(function(e, t) {
            e.innerHTML=t+1+"."
        }
        )
    }
    ).draw()
}

,
TableData=function() {
    "use strict";
    return {
        init:function() {
            handleRenderTableData()
        }
    }
}

();