/*
Template Name: Infinite Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.7 & Bootstrap 4
Version: 1.3.0
Author: Sean Ngu
Website: http://www.seantheme.com/infinite-admin/admin/html/
*/

var handleRenderDatepicker=function() {
    $("#datepicker-default").datepicker( {
        autoclose: !0
    }
    ),
    $("#datepicker-component").datepicker( {
        autoclose: !0
    }
    ),
    $("#datepicker-range").datepicker( {
        autoclose: !0
    }
    ),
    $("#datepicker-inline").datepicker( {
        autoclose: !0
    }
    )
}

,
handleRenderTimepicker=function() {
    $("#timepicker-default").timepicker(),
    $("#timepicker-seconds").timepicker( {
        minuteStep: 1, appendWidgetTo: "body", showSeconds: !0, showMeridian: !1, defaultTime: !1, template: !1
    }
    )
}

,
handleRenderColorpicker=function() {
    $("#colorpicker-default").colorpicker(),
    $("#colorpicker-component").colorpicker(),
    $("#colorpicker-alias").colorpicker( {
        colorSelectors: {
            black: "#000000", white: "#ffffff", default: "#8A8A8F", primary: "#007aff", success: "#4CD964", info: "#5AC8FA", warning: "#FF9500", danger: "#FF3B30"
        }
    }
    )
}

,
handleRenderTypeahead=function() {
    $("#typeahead-default").typeahead( {
        source:[ {
            id: "1", name: "ActionScript"
        }
        , {
            id: "2", name: "AppleScript"
        }
        , {
            id: "3", name: "Asp"
        }
        , {
            id: "4", name: "BASIC"
        }
        , {
            id: "5", name: "C"
        }
        , {
            id: "6", name: "C++"
        }
        , {
            id: "7", name: "Clojure"
        }
        , {
            id: "8", name: "COBOL"
        }
        , {
            id: "9", name: "ColdFusion"
        }
        , {
            id: "10", name: "Erlang"
        }
        , {
            id: "11", name: "Fortran"
        }
        , {
            id: "12", name: "Groovy"
        }
        , {
            id: "13", name: "Haskell"
        }
        , {
            id: "14", name: "Java"
        }
        , {
            id: "15", name: "JavaScript"
        }
        , {
            id: "16", name: "Lisp"
        }
        , {
            id: "17", name: "Perl"
        }
        , {
            id: "18", name: "PHP"
        }
        , {
            id: "19", name: "Python"
        }
        , {
            id: "20", name: "Ruby"
        }
        , {
            id: "21", name: "Scala"
        }
        , {
            id: "22", name: "Scheme"
        }
        ], autoSelect:!0
    }
    )
}

,
handleRenderTagsInput=function() {
    var e=[ {
        value: 1, text: "Amsterdam", continent: "Europe"
    }
    ,
    {
        value: 2, text: "London", continent: "Europe"
    }
    ,
    {
        value: 3, text: "Paris", continent: "Europe"
    }
    ,
    {
        value: 4, text: "Washington", continent: "America"
    }
    ,
    {
        value: 5, text: "Mexico City", continent: "America"
    }
    ,
    {
        value: 6, text: "Buenos Aires", continent: "America"
    }
    ,
    {
        value: 7, text: "Sydney", continent: "Australia"
    }
    ,
    {
        value: 8, text: "Wellington", continent: "Australia"
    }
    ,
    {
        value: 9, text: "Canberra", continent: "Australia"
    }
    ,
    {
        value: 10, text: "Beijing", continent: "Asia"
    }
    ,
    {
        value: 11, text: "New Delhi", continent: "Asia"
    }
    ,
    {
        value: 12, text: "Kathmandu", continent: "Asia"
    }
    ,
    {
        value: 13, text: "Cairo", continent: "Africa"
    }
    ,
    {
        value: 14, text: "Cape Town", continent: "Africa"
    }
    ,
    {
        value: 15, text: "Kinshasa", continent: "Africa"
    }
    ],
    t="#tagsinput-category";
    $(t).tagsinput( {
        tagClass:function(e) {
            switch(e.continent) {
                case"Europe": return"label label-primary";
                case"America": return"label label-purple";
                case"Australia": return"label label-inverse";
                case"Africa": return"label label-info";
                case"Asia": return"label label-pink"
            }
        }
        , itemValue:"value", itemText:"text", typeahead: {
            afterSelect:function(e) {
                this.$element.val("")
            }
            , source:e
        }
    }
    ),
    $(t).tagsinput("add", {
        value: 1, text: "Amsterdam", continent: "Europe"
    }
    ),
    $(t).tagsinput("add", {
        value: 4, text: "Washington", continent: "America"
    }
    ),
    $(t).tagsinput("add", {
        value: 7, text: "Sydney", continent: "Australia"
    }
    ),
    $(t).tagsinput("add", {
        value: 10, text: "Beijing", continent: "Asia"
    }
    ),
    $(t).tagsinput("add", {
        value: 13, text: "Cairo", continent: "Africa"
    }
    )
}

,
handleRenderBootstrapSlider=function() {
    $("#slider-default").bootstrapSlider(),
    $("#slider-range").bootstrapSlider(),
    $("#slider-tooltip").bootstrapSlider( {
        tooltip: "always"
    }
    ),
    $("#slider-vertical").bootstrapSlider( {
        reversed: !0
    }
    ),
    $("#slider-disabled").bootstrapSlider()
}

,
handleRenderMaskedInput=function() {
    $("#masked-input-date").mask("99/99/9999"),
    $("#masked-input-phone").mask("(999) 999-9999")
}

,
handleRenderPasswordStrength=function() {
    var e= {}
    ;
    e.ui= {
        container:"#pwdstrength-container",
        showVerdictsInsideProgressBar:!0,
        viewports: {
            progress: ".pwstrength_viewport_progress"
        }
        ,
        progressExtraCssClasses:"progress-sm"
    }
    ,
    e.common= {
        debug:!0,
        onLoad:function() {
            $("#messages").text("Start typing password")
        }
    }
    ,
    $("#pwstrength-default").pwstrength(e)
}

,
FormPlugins=function() {
    "use strict";
    return {
        init:function() {
            handleRenderDatepicker(),
            handleRenderTimepicker(),
            handleRenderColorpicker(),
            handleRenderTypeahead(),
            handleRenderTagsInput(),
            handleRenderBootstrapSlider(),
            handleRenderMaskedInput(),
            handleRenderPasswordStrength()
        }
    }
}

();