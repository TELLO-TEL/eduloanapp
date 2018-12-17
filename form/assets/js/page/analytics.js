/*
Template Name: Infinite Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.7 & Bootstrap 4
Version: 1.3.0
Author: Sean Ngu
Website: http://www.seantheme.com/infinite-admin/admin/html/
*/

var lineChart,
map,
chartData,
mapData,
hanldePageViewChart=function() {
    Chart.defaults.global.defaultFontFamily='-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
    Chart.defaults.global.defaultFontColor="#222",
    Chart.defaults.global.tooltips.xPadding=8,
    Chart.defaults.global.tooltips.yPadding=8,
    Chart.defaults.global.tooltips.multiKeyBackground="transparent";
    var a=document.getElementById("page-view-chart");
    chartData=[2,
    10,
    4,
    2,
    4,
    5,
    6,
    2,
    5,
    8,
    5,
    3,
    9,
    10,
    9,
    6,
    4,
    0,
    2,
    5,
    1,
    2,
    5,
    6,
    8,
    9,
    1,
    10,
    17,
    3,
    2,
    10,
    4,
    2,
    4,
    5,
    6,
    2,
    5,
    8,
    5,
    3,
    9,
    10,
    9,
    6,
    4,
    0,
    2,
    5,
    1,
    2,
    5,
    6,
    8,
    9,
    1,
    10,
    17];
    lineChart=new Chart(a, {
        type:"bar", data: {
            labels:["-30 min", "", "-29 min", "", "-28 min", "", "-27 min", "", "-26 min", "", "-25 min", "", "-24 min", "", "-23 min", "", "-22 min", "", "-21 min", "", "-20 min", "", "-19 min", "", "-18 min", "", "-17 min", "", "-16 min", "", "-15 min", "", "-14 min", "", "-13 min", "", "-12 min", "", "-11 min", "", "-10 min", "", "-9 min", "", "-28 min", "", "-7 min", "", "-6 min", "", "-5 min", "", "-4 min", "", "-3 min", "", "-2 min", "", "-1 min"], 
            datasets:[ {
                color: PRIMARY_COLOR, 
                backgroundColor: PRIMARY_TRANSPARENT_7_COLOR, 
                borderWidth: 0, 
                label: "Total Page Views", 
                data: chartData
            }
            ]
        }
        , options: {
            maintainAspectRatio:!1, 
            elements: {
                line: {
                    tension: 0
                }
            }
            , legend: {
                display: !1
            }
            , scales: {
                xAxes:[ {
                    ticks: {
                        maxTicksLimit: 8, maxRotation: 0
                    }
                    , gridLines: {
                        display: !0
                    }
                }
                ], yAxes:[ {
                    ticks: {
                        beginAtZero: !1, maxTicksLimit: 4
                    }
                }
                ]
            }
        }
    }
    )
}

,
handleLocationMap=function() {
    mapData=[6,
    9,
    2,
    2,
    9,
    3,
    7,
    8,
    4,
    3,
    12,
    9,
    2,
    4,
    7],
    mapMarkers=[ {
        latLng: [35.88, 14.5], name: "Malta"
    }
    ,
    {
        latLng: [12.05, -61.75], name: "Grenada"
    }
    ,
    {
        latLng: [13.16, -61.23], name: "Saint Vincent and the Grenadines"
    }
    ,
    {
        latLng: [13.16, -59.55], name: "Barbados"
    }
    ,
    {
        latLng: [17.11, -61.85], name: "Antigua and Barbuda"
    }
    ,
    {
        latLng: [-4.61, 55.45], name: "Seychelles"
    }
    ,
    {
        latLng: [7.35, 134.46], name: "Palau"
    }
    ,
    {
        latLng: [42.5, 1.51], name: "Andorra"
    }
    ,
    {
        latLng: [14.01, -60.98], name: "Saint Lucia"
    }
    ,
    {
        latLng: [6.91, 158.18], name: "Federated States of Micronesia"
    }
    ,
    {
        latLng: [1.3, 103.8], name: "Singapore"
    }
    ,
    {
        latLng: [1.46, 173.03], name: "Kiribati"
    }
    ,
    {
        latLng: [-21.13, -175.2], name: "Tonga"
    }
    ,
    {
        latLng: [15.3, -61.38], name: "Dominica"
    }
    ,
    {
        latLng: [-20.2, 57.5], name: "Mauritius"
    }
    ],
    map=$("#world-map").vectorMap( {
        map:"world_mill_en", normalizeFunction:"polynomial", hoverOpacity:.75, hoverColor:!1, panOnDrag:!1, zoomButtons:!1, zoomOnScroll:!1, backgroundColor:MUTED_TRANSPARENT_1_COLOR, markerStyle: {
            initial: {
                fill: WARNING_COLOR
            }
        }
        , focusOn: {
            x: .5, y: .5, scale: 1.5
        }
        , regionStyle: {
            initial: {
                fill: MUTED_TRANSPARENT_8_COLOR, "fill-opacity": 1, stroke: "none", "stroke-width": 0, "stroke-opacity": 0
            }
            , hover: {
                "fill-opacity": .5
            }
        }
        , series: {
            markers:[ {
                attribute: "r", scale: [5, 15], values: mapData
            }
            ]
        }
        , markers:mapMarkers, onMarkerTipShow:function(a, t, n) {
            t.html('<div style="margin-bottom: -2px;"><b>'+$(t).text()+'</b></div><div class="f-s-11">Active Users: '+mapData[n]+"</div>")
        }
    }
    )
}

,
handleUpdatePageData=function() {
    setInterval(function() {
        var a=Math.round(10*Math.random()+5), t=Math.round(10*Math.random()+50), n=Math.round(10*Math.random()+20), e=100-t-n;
        $('[data-id="active-user"]').html(a), $('[data-id="desktop-user"]').html(t+"%").css("width", t+"%"), $('[data-id="mobile-user"]').html(n+"%").css("width", n+"%"), $('[data-id="tablet-user"]').html(e+"%").css("width", e+"%");
        var i=Math.round(10*Math.random()+5);
        chartData.splice(0, 1), chartData.push(i), lineChart.update(), $(".table tbody").each(function() {
            var a=$(this).closest(".table"), t=Math.round(Math.random()*$(this).find("tr").length)-1, n=$(this).find("tr").eq(t), e=Math.round(20*Math.random()), i=parseInt($(n).find('[data-col="value"]').html()), o="warning", l="table-td-bg-animate";
            i<e&&(o="success"), $(a).addClass(l), $(n).addClass(o), $(n).find('[data-col="value"]').html(e), setTimeout(function() {
                $(n).removeClass(o), $(a).removeClass(l)
            }
            , 800)
        }
        ), map=$("#world-map").vectorMap("get", "mapObject");
        var o=10*Math.random()/10, l=10*Math.random()/10, r=Math.round(3*Math.random());
        map.setFocus( {
            x: o, y: l, scale: r
        }
        )
    }
    , 3e3)
}

,
handleNotification=function() {
    $.notification( {
        title: "New Message", content: "You have 30+ new message this morning", icon: "ti-twitter-alt", iconClass: "bg-gradient-blue", inverseMode: !1
    }
    )
}

,
Analytics=function() {
    "use strict";
    return {
        init:function() {
            hanldePageViewChart(),
            handleLocationMap(),
            handleUpdatePageData(),
            handleNotification()
        }
    }
}

();