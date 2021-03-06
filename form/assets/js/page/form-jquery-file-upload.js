/*
Template Name: Infinite Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.7 & Bootstrap 4
Version: 1.3.0
Author: Sean Ngu
Website: http://www.seantheme.com/infinite-admin/admin/html/
*/
var handleRenderjQueryFileUpload = function() {

        $("#fileupload").fileupload({
            url: "http://jquery-file-upload.appspot.com/",
            disableImageResize: /Android(?!.*Chrome)|Opera/.test(window.navigator.userAgent),
            maxFileSize: 999e3,
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png|pdf|txt|doc|docx)$/i
        }), $("#fileupload").bind("fileuploadchange", function(e, l) {
            $("#fileupload .empty-row").hide()
        }), $("#fileupload").bind("fileuploadfail", function(e, l) {
            "abort" === l.errorThrown && 1 == $("#fileupload .files tr").not(".empty-row").length && $("#fileupload .empty-row").show()
        }), $.support.cors && $.ajax({
            url: "http://jquery-file-upload.appspot.com/",
            type: "HEAD"
        }).fail(function() {
            var e = '<div class="alert alert-danger m-b-0 m-t-15">Upload server currently unavailable - ' + new Date + "</div>";
            $("#fileupload #error-msg").html(e)
        })
    },
    jQueryFileUpload = function() {
        "use strict";
        return {
            init: function() {
                handleRenderjQueryFileUpload()
            }
        }
    }();