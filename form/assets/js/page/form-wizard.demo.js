/*
Template Name: Infinite Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.7 & Bootstrap 4
Version: 1.3.0
Author: Sean Ngu
Website: http://www.seantheme.com/infinite-admin/admin/html/
*/

var handleRenderFormWizards=function() {
    $("#rootwizard").bootstrapWizard( {
        nextSelector: ".wizard-next-btn", previousSelector: ".wizard-prev-btn"
    }
    )
}

,
FormWizards=function() {
    "use strict";
    return {
        init:function() {
            handleRenderFormWizards()
        }
    }
}

();