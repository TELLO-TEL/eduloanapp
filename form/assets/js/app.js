/*
Template Name: Infinite Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.7 & Bootstrap 4
Version: 1.3.0
Author: Sean Ngu
Website: http://www.seantheme.com/infinite-admin/admin/html/
*/
var floatSubMenuTimeout, targetFloatMenu, MUTED_COLOR = "#8A8A8F",
    MUTED_TRANSPARENT_1_COLOR = "rgba(138, 138, 143, 0.1)",
    MUTED_TRANSPARENT_2_COLOR = "rgba(138, 138, 143, 0.2)",
    MUTED_TRANSPARENT_3_COLOR = "rgba(138, 138, 143, 0.3)",
    MUTED_TRANSPARENT_4_COLOR = "rgba(138, 138, 143, 0.4)",
    MUTED_TRANSPARENT_5_COLOR = "rgba(138, 138, 143, 0.5)",
    MUTED_TRANSPARENT_6_COLOR = "rgba(138, 138, 143, 0.6)",
    MUTED_TRANSPARENT_7_COLOR = "rgba(138, 138, 143, 0.7)",
    MUTED_TRANSPARENT_8_COLOR = "rgba(138, 138, 143, 0.8)",
    MUTED_TRANSPARENT_9_COLOR = "rgba(138, 138, 143, 0.9)",
    PRIMARY_COLOR = "#007AFF",
    PRIMARY_TRANSPARENT_1_COLOR = "rgba(0, 122, 255, 0.1)",
    PRIMARY_TRANSPARENT_2_COLOR = "rgba(0, 122, 255, 0.2)",
    PRIMARY_TRANSPARENT_3_COLOR = "rgba(0, 122, 255, 0.3)",
    PRIMARY_TRANSPARENT_4_COLOR = "rgba(0, 122, 255, 0.4)",
    PRIMARY_TRANSPARENT_5_COLOR = "rgba(0, 122, 255, 0.5)",
    PRIMARY_TRANSPARENT_6_COLOR = "rgba(0, 122, 255, 0.6)",
    PRIMARY_TRANSPARENT_7_COLOR = "rgba(0, 122, 255, 0.7)",
    PRIMARY_TRANSPARENT_8_COLOR = "rgba(0, 122, 255, 0.8)",
    PRIMARY_TRANSPARENT_9_COLOR = "rgba(0, 122, 255, 0.9)",
    SUCCESS_COLOR = "#4CD964",
    SUCCESS_TRANSPARENT_1_COLOR = "rgba(76, 217, 100, 0.1)",
    SUCCESS_TRANSPARENT_2_COLOR = "rgba(76, 217, 100, 0.2)",
    SUCCESS_TRANSPARENT_3_COLOR = "rgba(76, 217, 100, 0.3)",
    SUCCESS_TRANSPARENT_4_COLOR = "rgba(76, 217, 100, 0.4)",
    SUCCESS_TRANSPARENT_5_COLOR = "rgba(76, 217, 100, 0.5)",
    SUCCESS_TRANSPARENT_6_COLOR = "rgba(76, 217, 100, 0.6)",
    SUCCESS_TRANSPARENT_7_COLOR = "rgba(76, 217, 100, 0.7)",
    SUCCESS_TRANSPARENT_8_COLOR = "rgba(76, 217, 100, 0.8)",
    SUCCESS_TRANSPARENT_9_COLOR = "rgba(76, 217, 100, 0.9)",
    INFO_COLOR = "#5AC8FA",
    INFO_TRANSPARENT_1_COLOR = "rgba(90, 200, 250, 0.1)",
    INFO_TRANSPARENT_2_COLOR = "rgba(90, 200, 250, 0.2)",
    INFO_TRANSPARENT_3_COLOR = "rgba(90, 200, 250, 0.3)",
    INFO_TRANSPARENT_4_COLOR = "rgba(90, 200, 250, 0.4)",
    INFO_TRANSPARENT_5_COLOR = "rgba(90, 200, 250, 0.5)",
    INFO_TRANSPARENT_6_COLOR = "rgba(90, 200, 250, 0.6)",
    INFO_TRANSPARENT_7_COLOR = "rgba(90, 200, 250, 0.7)",
    INFO_TRANSPARENT_8_COLOR = "rgba(90, 200, 250, 0.8)",
    INFO_TRANSPARENT_9_COLOR = "rgba(90, 200, 250, 0.9)",
    WARNING_COLOR = "#FF9500",
    WARNING_TRANSPARENT_1_COLOR = "rgba(255, 149, 0, 0.1)",
    WARNING_TRANSPARENT_2_COLOR = "rgba(255, 149, 0, 0.2)",
    WARNING_TRANSPARENT_3_COLOR = "rgba(255, 149, 0, 0.3)",
    WARNING_TRANSPARENT_4_COLOR = "rgba(255, 149, 0, 0.4)",
    WARNING_TRANSPARENT_5_COLOR = "rgba(255, 149, 0, 0.5)",
    WARNING_TRANSPARENT_6_COLOR = "rgba(255, 149, 0, 0.6)",
    WARNING_TRANSPARENT_7_COLOR = "rgba(255, 149, 0, 0.7)",
    WARNING_TRANSPARENT_8_COLOR = "rgba(255, 149, 0, 0.8)",
    WARNING_TRANSPARENT_9_COLOR = "rgba(255, 149, 0, 0.9)",
    DANGER_COLOR = "#FF3B30",
    DANGER_TRANSPARENT_1_COLOR = "rgba(255, 59, 48, 0.1)",
    DANGER_TRANSPARENT_2_COLOR = "rgba(255, 59, 48, 0.2)",
    DANGER_TRANSPARENT_3_COLOR = "rgba(255, 59, 48, 0.3)",
    DANGER_TRANSPARENT_4_COLOR = "rgba(255, 59, 48, 0.4)",
    DANGER_TRANSPARENT_5_COLOR = "rgba(255, 59, 48, 0.5)",
    DANGER_TRANSPARENT_6_COLOR = "rgba(255, 59, 48, 0.6)",
    DANGER_TRANSPARENT_7_COLOR = "rgba(255, 59, 48, 0.7)",
    DANGER_TRANSPARENT_8_COLOR = "rgba(255, 59, 48, 0.8)",
    DANGER_TRANSPARENT_9_COLOR = "rgba(255, 59, 48, 0.9)",
    PINK_COLOR = "#FF2D55",
    PINK_TRANSPARENT_1_COLOR = "rgba(255, 45, 85, 0.1)",
    PINK_TRANSPARENT_2_COLOR = "rgba(255, 45, 85, 0.2)",
    PINK_TRANSPARENT_3_COLOR = "rgba(255, 45, 85, 0.3)",
    PINK_TRANSPARENT_4_COLOR = "rgba(255, 45, 85, 0.4)",
    PINK_TRANSPARENT_5_COLOR = "rgba(255, 45, 85, 0.5)",
    PINK_TRANSPARENT_6_COLOR = "rgba(255, 45, 85, 0.6)",
    PINK_TRANSPARENT_7_COLOR = "rgba(255, 45, 85, 0.7)",
    PINK_TRANSPARENT_8_COLOR = "rgba(255, 45, 85, 0.8)",
    PINK_TRANSPARENT_9_COLOR = "rgba(255, 45, 85, 0.9)",
    PURPLE_COLOR = "#5856D6",
    PURPLE_TRANSPARENT_1_COLOR = "rgba(88, 86, 214, 0.1)",
    PURPLE_TRANSPARENT_2_COLOR = "rgba(88, 86, 214, 0.2)",
    PURPLE_TRANSPARENT_3_COLOR = "rgba(88, 86, 214, 0.3)",
    PURPLE_TRANSPARENT_4_COLOR = "rgba(88, 86, 214, 0.4)",
    PURPLE_TRANSPARENT_5_COLOR = "rgba(88, 86, 214, 0.5)",
    PURPLE_TRANSPARENT_6_COLOR = "rgba(88, 86, 214, 0.6)",
    PURPLE_TRANSPARENT_7_COLOR = "rgba(88, 86, 214, 0.7)",
    PURPLE_TRANSPARENT_8_COLOR = "rgba(88, 86, 214, 0.8)",
    PURPLE_TRANSPARENT_9_COLOR = "rgba(88, 86, 214, 0.9)",
    YELLOW_COLOR = "#FFCC00",
    YELLOW_TRANSPARENT_1_COLOR = "rgba(255, 204, 0, 0.1)",
    YELLOW_TRANSPARENT_2_COLOR = "rgba(255, 204, 0, 0.2)",
    YELLOW_TRANSPARENT_3_COLOR = "rgba(255, 204, 0, 0.3)",
    YELLOW_TRANSPARENT_4_COLOR = "rgba(255, 204, 0, 0.4)",
    YELLOW_TRANSPARENT_5_COLOR = "rgba(255, 204, 0, 0.5)",
    YELLOW_TRANSPARENT_6_COLOR = "rgba(255, 204, 0, 0.6)",
    YELLOW_TRANSPARENT_7_COLOR = "rgba(255, 204, 0, 0.7)",
    YELLOW_TRANSPARENT_8_COLOR = "rgba(255, 204, 0, 0.8)",
    YELLOW_TRANSPARENT_9_COLOR = "rgba(255, 204, 0, 0.9)",
    INVERSE_COLOR = "#000000",
    INVERSE_TRANSPARENT_1_COLOR = "rgba(0, 0, 0, 0.1)",
    INVERSE_TRANSPARENT_2_COLOR = "rgba(0, 0, 0, 0.2)",
    INVERSE_TRANSPARENT_3_COLOR = "rgba(0, 0, 0, 0.3)",
    INVERSE_TRANSPARENT_4_COLOR = "rgba(0, 0, 0, 0.4)",
    INVERSE_TRANSPARENT_5_COLOR = "rgba(0, 0, 0, 0.5)",
    INVERSE_TRANSPARENT_6_COLOR = "rgba(0, 0, 0, 0.6)",
    INVERSE_TRANSPARENT_7_COLOR = "rgba(0, 0, 0, 0.7)",
    INVERSE_TRANSPARENT_8_COLOR = "rgba(0, 0, 0, 0.8)",
    INVERSE_TRANSPARENT_9_COLOR = "rgba(0, 0, 0, 0.9)",
    WHITE_COLOR = "#FFFFFF",
    WHITE_TRANSPARENT_1_COLOR = "rgba(255, 255, 255, 0.1)",
    WHITE_TRANSPARENT_2_COLOR = "rgba(255, 255, 255, 0.2)",
    WHITE_TRANSPARENT_3_COLOR = "rgba(255, 255, 255, 0.3)",
    WHITE_TRANSPARENT_4_COLOR = "rgba(255, 255, 255, 0.4)",
    WHITE_TRANSPARENT_5_COLOR = "rgba(255, 255, 255, 0.5)",
    WHITE_TRANSPARENT_6_COLOR = "rgba(255, 255, 255, 0.6)",
    WHITE_TRANSPARENT_7_COLOR = "rgba(255, 255, 255, 0.7)",
    WHITE_TRANSPARENT_8_COLOR = "rgba(255, 255, 255, 0.8)",
    WHITE_TRANSPARENT_9_COLOR = "rgba(255, 255, 255, 0.9)",
    handleSlimScroll = function() {
        "use strict";
        $("[data-scrollbar=true]").each(function() {
            generateSlimScroll($(this))
        })
    },
    generateSlimScroll = function(e) {
        if (!$(e).attr("data-init")) {
            var a = $(e).attr("data-height"),
                t = {
                    height: a = a || $(e).height(),
                    alwaysVisible: !1
                };
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? ($(e).css("height", a), $(e).css("overflow-x", "scroll")) : ($(e).slimScroll(t), $(e).closest(".slimScrollDiv").find(".slimScrollBar").hide()), $(e).attr("data-init", !0)
        }
    },
    handleHeaderSearchBar = function() {
        $(document).on("click", '[data-toggle="search-bar"]', function(e) {
            e.preventDefault(), $(".header-search-bar").addClass("active"), $("body").append('<a href="javascript:;" data-dismiss="search-bar" id="search-bar-backdrop" class="search-bar-backdrop"></a>'), $("#search-bar-backdrop").fadeIn(200), setTimeout(function() {
                $("#header-search").focus()
            }, 200)
        }), $(document).on("click", '[data-dismiss="search-bar"]', function(e) {
            e.preventDefault(), $(".header-search-bar").addClass("inactive"), setTimeout(function() {
                $(".header-search-bar").removeClass("active inactive")
            }, 200), $("#search-bar-backdrop").fadeOut(function() {
                $(this).remove()
            })
        });
        $("#header-search").autocomplete({
            source: ["Report", "Analytic", "Product", "Project", "Sales", "Mobile App Development", "Build Website", "Helper", "Profile", "Setting"],
            minLength: 0
        }).on("focus", function() {
            $(this).autocomplete("search")
        }), $("#header-search").autocomplete("widget").addClass("search-bar-autocomplete animated fadeIn")
    },
    handleSidebarMenu = function() {
        "use strict";
        $(".sidebar .nav > .has-sub > a").click(function() {
            var e = $(this).next(".sub-menu");
            0 === $(".page-sidebar-minified").length && ($(".sidebar .nav > li.has-sub > .sub-menu").not(e).slideUp(250, function() {
                $(this).closest("li").removeClass("expand")
            }), $(e).slideToggle(250, function() {
                var e = $(this).closest("li");
                $(e).hasClass("expand") ? $(e).removeClass("expand") : $(e).addClass("expand")
            }))
        }), $(".sidebar .nav > .has-sub .sub-menu li.has-sub > a").click(function() {
            if (0 === $(".page-sidebar-minified").length) {
                var e = $(this).next(".sub-menu");
                $(e).slideToggle(250)
            }
        }), $(document).on("click", '[data-click="sidebar-toggled"]', function(e) {
            e.preventDefault();
            var a = "#page-container",
                t = "page-sidebar-toggled";
            $(a).hasClass(t) ? ($(a).removeClass(t), $(this).removeClass("active")) : ($(a).addClass(t), $(this).addClass("active"))
        })
    },
    handleSidebarMinify = function() {
        $('[data-click="sidebar-minify"]').click(function(e) {
            e.preventDefault();
            var a = "#page-container",
                t = "page-sidebar-minified";
            $(a).hasClass(t) ? $(a).removeClass(t) : $(a).addClass(t)
        })
    },
    handleSidebarScrollMemory = function() {
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $('.sidebar [data-scrollbar="true"]').slimScroll().bind("slimscrolling", function(e, a) {
                localStorage.setItem("sidebarScrollPosition", a + "px")
            });
            var e = localStorage.getItem("sidebarScrollPosition");
            e && $('.sidebar [data-scrollbar="true"]').slimScroll({
                scrollTo: e
            })
        }
    },
    handleMouseoverFloatSubMenu = function(e) {
        clearTimeout(floatSubMenuTimeout)
    },
    handleMouseoutFloatSubMenu = function(e) {
        floatSubMenuTimeout = setTimeout(function() {
            $(".float-sub-menu").remove()
        }, 250)
    },
    handleSidebarMinifyFloatMenu = function() {
        $(document).on("click", ".float-sub-menu li.has-sub > a", function() {
            var e = $(this).next(".sub-menu");
            $(e).slideToggle(250, function() {
                var e = $(".float-sub-menu"),
                    a = $(e).height() + 20,
                    t = ($(e).offset(), $(e).attr("data-offset-top"));
                a < $(window).height() - t ? $(".float-sub-menu").css({
                    top: t,
                    bottom: "auto",
                    overflow: "initial"
                }) : $(".float-sub-menu").css({
                    bottom: 0,
                    overflow: "scroll"
                })
            })
        }), $(".sidebar .nav > li.has-sub > a").hover(function() {
            if ($("#page-container").hasClass("page-sidebar-minified")) {
                clearTimeout(floatSubMenuTimeout);
                var e = $(this).closest("li").find(".sub-menu").first();
                if (targetFloatMenu == this) return !1;
                targetFloatMenu = this;
                var a = $(e).html();
                if (a) {
                    var t = $(e).height() + 20,
                        i = $(this).offset().top - $(window).scrollTop(),
                        o = $("#page-container").hasClass("page-sidebar-right") ? "auto" : 60,
                        n = $("#page-container").hasClass("page-sidebar-right") ? 60 : "auto",
                        r = $(window).height();
                    0 == $(".float-sub-menu").length ? (a = '<ul class="float-sub-menu" data-offset-top="' + i + '" onmouseover="handleMouseoverFloatSubMenu(this)" onmouseout="handleMouseoutFloatSubMenu(this)">' + a + "</ul>", $("body").append(a)) : $(".float-sub-menu").html(a), t < r - i ? $(".float-sub-menu").css({
                        top: i,
                        left: o,
                        bottom: "auto",
                        right: n
                    }) : $(".float-sub-menu").css({
                        bottom: 0,
                        top: "auto",
                        left: o,
                        right: n
                    })
                } else $(".float-sub-menu").remove(), targetFloatMenu = ""
            }
        }, function() {
            floatSubMenuTimeout = setTimeout(function() {
                $(".float-sub-menu").remove(), targetFloatMenu = ""
            }, 250)
        })
    },
    handleDropdownClose = function() {
        $(document).on("click", '[data-dropdown-close="false"]', function(e) {
            e.stopPropagation()
        })
    },
    handleAppNotification = function() {
        $.extend({
            notification: function(e) {
                var a = e.title ? e.title : "",
                    t = e.content ? e.content : "",
                    i = e.icon ? e.icon : "",
                    o = e.iconClass ? e.iconClass : "",
                    n = e.img ? e.img : "",
                    r = e.imgClass ? e.imgClass : "",
                    s = e.closeBtn ? e.closeBtn : "",
                    l = (e.closeBtnText && e.closeBtnText, e.btn ? e.btn : ""),
                    c = e.btnText ? e.btnText : "",
                    d = e.btnAttr ? e.btnAttr : "",
                    R = e.btnUrl ? e.btnUrl : "#",
                    _ = e.autoclose ? e.autoclose : "",
                    h = e.autocloseTime ? e.autocloseTime : 5e3,
                    g = a ? '<h4 class="notification-title">' + a + "</h4>" : "",
                    T = t ? '<p class="notification-desc">' + t + "</p>" : "",
                    N = i ? '<div class="notification-media"><i class="' + i + " " + o + '"></i></div>' : "",
                    b = l && c ? '<a href="' + R + '" ' + d + ">" + c + "</a>" : "",
                    A = s && "disabled" == s ? "" : '<a href="#" data-dismiss="notification">Close</a>',
                    u = '<div class="page-notification ' + (e.class ? e.class : "") + " bounceInRight animated " + (e.inverseMode ? "page-notification-inverse" : "") + '">' + (N = n ? '<div class="notification-media"><img src="' + n + '" class="' + r + '"></i></div>' : N) + (g || T ? '<div class="notification-info">' + g + T + "</div>" : "") + ('<div class="notification-btn ' + (!b && A || b && !A ? "single-btn" : "") + '">' + b + A + "</div>") + "</div>";
                if (0 === $("#page-notification-container").length && $("body").append('<div id="page-notification-container" class="page-notification-container"></div>'), $("#page-notification-container").append(u), _) {
                    var O = $("#page-notification-container").find(".page-notification").last();
                    setTimeout(function() {
                        $(O).fadeOut(function() {
                            $(this).remove()
                        })
                    }, h)
                }
            }
        }), $(document).on("click", '[data-toggle="notification"]', function(e) {
            e.preventDefault();
            var a = {
                title: $(this).attr("data-title") ? $(this).attr("data-title") : "",
                content: $(this).attr("data-content") ? $(this).attr("data-content") : "",
                icon: $(this).attr("data-icon") ? $(this).attr("data-icon") : "",
                iconClass: $(this).attr("data-icon-class") ? $(this).attr("data-icon-class") : "",
                img: $(this).attr("data-img") ? $(this).attr("data-img") : "",
                imgClass: $(this).attr("data-img-class") ? $(this).attr("data-img-class") : "",
                btn: $(this).attr("data-btn") ? $(this).attr("data-btn") : "",
                btnText: $(this).attr("data-btn-text") ? $(this).attr("data-btn-text") : "",
                btnAttr: $(this).attr("data-btn-attr") ? $(this).attr("data-btn-attr") : "",
                btnUrl: $(this).attr("data-btn-url") ? $(this).attr("data-btn-url") : "",
                autoclose: $(this).attr("data-autoclose") ? $(this).attr("data-autoclose") : "",
                autocloseTime: $(this).attr("data-autoclose-time") ? $(this).attr("data-autoclose-time") : "",
                customClass: $(this).attr("data-class") ? $(this).attr("data-class") : "",
                inverseMode: $(this).attr("data-inverse-mode") ? $(this).attr("data-inverse-mode") : ""
            };
            $.notification(a)
        }), $(document).on("click", '[data-dismiss="notification"]', function(e) {
            e.preventDefault(), $(this).closest(".page-notification").fadeOut(function() {
                $(this).remove()
            })
        })
    },
    handleThemePanelExpand = function() {
        $('[data-click="theme-panel-expand"]').click(function(e) {
            e.preventDefault();
            var a = ".theme-panel",
                t = "active";
            $(a).hasClass(t) ? $(a).removeClass(t) : $(a).addClass(t)
        })
    },
    handleThemePanelReset = function() {
        $('[data-click="reset-theme-setting"]').click(function(e) {
            e.preventDefault(), Cookies.remove("theme"), window.location.href = document.URL
        })
    },
    handleSetThemeCookie = function(e, a) {
        var t = Cookies.getJSON("theme") ? Cookies.getJSON("theme") : {};
        t[e] = a, Cookies.set("theme", t)
    },
    handelThemePanelColorSelector = function() {
        $('[data-click="theme-selector"]').click(function(e) {
            e.preventDefault();
            var a = $(this).attr("data-theme-file"),
                t = $(this).attr("data-theme");
            $("#theme").attr("href", a), $('[data-click="theme-selector"]').not(this).closest("li").removeClass("active"), $(this).closest("li").addClass("active"), handleSetThemeCookie("color", t)
        })
    },
    handleThemePanelCookie = function() {
        $(".theme-panel #sidebar_fixed").change(function(e) {
            var a = $(this).is(":checked") ? "fixed" : "";
            a ? ($("#page-container").addClass("page-sidebar-fixed"), $(".theme-panel #header_fixed").is(":checked") || ($(".theme-panel #header_fixed").prop("checked", !0), $(".theme-panel #header_fixed").trigger("change"))) : $("#page-container").removeClass("page-sidebar-fixed"), handleSetThemeCookie("sidebarPosition", a)
        }), $(".theme-panel #sidebar_light").change(function(e) {
            var a = $(this).is(":checked") ? "light" : "";
            a ? $("#sidebar").removeClass("sidebar-inverse") : $("#sidebar").addClass("sidebar-inverse"), handleSetThemeCookie("sidebarColor", a)
        }), $(".theme-panel #header_fixed").change(function(e) {
            var a = $(this).is(":checked") ? "fixed" : "";
            a ? $("#page-container").addClass("page-header-fixed") : ($("#page-container").removeClass("page-header-fixed"), $(".theme-panel #sidebar_fixed").is(":checked") && ($(".theme-panel #sidebar_fixed").prop("checked", !1), $(".theme-panel #sidebar_fixed").trigger("change"))), handleSetThemeCookie("headerPosition", a)
        }), $(".theme-panel #header_dark").change(function(e) {
            var a = $(this).is(":checked") ? "dark" : "";
            a ? $("#header").addClass("navbar-inverse").removeClass("navbar-default") : $("#header").addClass("navbar-default").removeClass("navbar-inverse"), handleSetThemeCookie("headerColor", a)
        }), Cookies.getJSON("theme") ? (cookie = Cookies.getJSON("theme"), cookie.color && $('[data-theme="' + cookie.color + '"]').trigger("click"), cookie.headerColor && "dark" == cookie.headerColor && $(".theme-panel #header_dark").prop("checked", !0).trigger("change"), cookie.headerFixed && "fixed" == cookie.headerFixed && $(".theme-panel #header_fixed").prop("checked", !0).trigger("change"), cookie.sidebarColor && "light" == cookie.sidebarColor && $(".theme-panel #sidebar_light").prop("checked", !0).trigger("change"), cookie.sidebarFixed && "fixed" == cookie.sidebarFixed && $(".theme-panel #sidebar_fixed").prop("checked", !0).trigger("change")) : $(".theme-panel").addClass("active")
    },
    panelActionRunning = !1,
    handlePanelAction = function() {
        "use strict";
        if (panelActionRunning) return !1;
        panelActionRunning = !0, $(document).on("hover", "[data-toggle=panel-remove]", function(e) {
            $(this).attr("data-init") || ($(this).tooltip({
                title: "Remove",
                placement: "bottom",
                trigger: "hover",
                container: "body"
            }), $(this).tooltip("show"), $(this).attr("data-init", !0))
        }), $(document).on("click", "[data-toggle=panel-remove]", function(e) {
            e.preventDefault(), $(this).tooltip("destroy"), $(this).closest(".panel").remove()
        }), $(document).on("hover", "[data-toggle=panel-collapse]", function(e) {
            $(this).attr("data-init") || ($(this).tooltip({
                title: "Collapse / Expand",
                placement: "bottom",
                trigger: "hover",
                container: "body"
            }), $(this).tooltip("show"), $(this).attr("data-init", !0))
        }), $(document).on("click", "[data-toggle=panel-collapse]", function(e) {
            e.preventDefault(), $(this).closest(".panel").find(".panel-body").slideToggle()
        }), $(document).on("hover", "[data-toggle=panel-reload]", function(e) {
            $(this).attr("data-init") || ($(this).tooltip({
                title: "Reload",
                placement: "bottom",
                trigger: "hover",
                container: "body"
            }), $(this).tooltip("show"), $(this).attr("data-init", !0))
        }), $(document).on("click", "[data-toggle=panel-reload]", function(e) {
            e.preventDefault();
            var a = $(this).closest(".panel");
            if (!$(a).hasClass("panel-loading")) {
                var t = $(a).find(".panel-body");
                $(a).addClass("panel-loading"), $(t).prepend('<div class="panel-loading"><div class="spinner"></div></div>'), setTimeout(function() {
                    $(a).removeClass("panel-loading"), $(a).find(".panel-loading").remove()
                }, 2e3)
            }
        }), $(document).on("hover", "[data-toggle=panel-expand]", function(e) {
            $(this).attr("data-init") || ($(this).tooltip({
                title: "Expand / Compress",
                placement: "bottom",
                trigger: "hover",
                container: "body"
            }), $(this).tooltip("show"), $(this).attr("data-init", !0))
        }), $(document).on("click", "[data-toggle=panel-expand]", function(e) {
            e.preventDefault();
            var a = $(this).closest(".panel"),
                t = $(a).find(".panel-body"),
                i = 40;
            if (0 !== $(t).length) {
                var o = $(a).offset().top;
                i = $(t).offset().top - o
            }
            if ($("body").hasClass("panel-expand") && $(a).hasClass("panel-expand")) $("body, .panel").removeClass("panel-expand"), $(".panel").removeAttr("style"), $(t).removeAttr("style");
            else if ($("body").addClass("panel-expand"), $(this).closest(".panel").addClass("panel-expand"), 0 !== $(t).length && 40 != i) {
                var n = 40;
                $(a).find(" > *").each(function() {
                    var e = $(this).attr("class");
                    "panel-heading" != e && "panel-body" != e && (n += $(this).height() + 30)
                }), 40 != n && $(t).css("top", n + "px")
            }
            $(window).trigger("resize")
        })
    },
    handelTooltipPopoverActivation = function() {
        "use strict";
        0 !== $('[data-toggle="tooltip"]').length && $("[data-toggle=tooltip]").tooltip(), 0 !== $('[data-toggle="popover"]').length && $("[data-toggle=popover]").popover()
    },
    handleScrollToTopButton = function() {
        "use strict";
        $(document).scroll(function() {
            200 <= $(document).scrollTop() ? $("[data-click=scroll-top]").addClass("in") : $("[data-click=scroll-top]").removeClass("in")
        }), $(".content").scroll(function() {
            200 <= $(".content").scrollTop() ? $("[data-click=scroll-top]").addClass("in") : $("[data-click=scroll-top]").removeClass("in")
        }), $("[data-click=scroll-top]").click(function(e) {
            e.preventDefault(), $("html, body, .content").animate({
                scrollTop: $("body").offset().top
            }, 500)
        })
    },
    handlePageLoadFadeIn = function() {
        $("#page-container").addClass("in")
    },
    App = function() {
        "use strict";
        return {
            init: function() {
                this.initSidebar(), this.initHeader(), this.initComponent(), this.initThemePanel(), this.initPage()
            },
            initPage: function() {
                handlePageLoadFadeIn()
            },
            initSidebar: function() {
                handleSidebarMinifyFloatMenu(), handleSidebarMenu(), handleSidebarMinify(), handleSidebarScrollMemory()
            },
            initHeader: function() {
                handleHeaderSearchBar()
            },
            initComponent: function() {
                handleSlimScroll(), handlePanelAction(), handelTooltipPopoverActivation(), handleScrollToTopButton(), handleDropdownClose(), handleAppNotification()
            },
            initThemePanel: function() {
                handleThemePanelExpand(), handleThemePanelReset(), handelThemePanelColorSelector(), handleThemePanelCookie()
            },
            scrollTop: function() {
                $("html, body, .content").animate({
                    scrollTop: $("body").offset().top
                }, 0)
            }
        }
    }();