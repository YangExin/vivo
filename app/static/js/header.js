$('.nav-left').mouseenter(function () {
    $('.curtain').stop(true,true).animate({'top':0,'opacity':.9})
})
$('.nav-left').mouseleave(function () {
    $('.curtain').stop(true,true).animate({'top':-195,'opacity':0})
})