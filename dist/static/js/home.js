"use strict";var nex_active=function(){setTimeout(function(){$(".ver_nex").animate({top:0,opacity:1})},1200),setTimeout(function(){$(".ai_nex").animate({top:50,opacity:1})},1e3),setTimeout(function(){$(".cpu_nex").animate({top:100,opacity:1})},800),setTimeout(function(){$(".phone_left").animate({top:0,opacity:1},"slow")},300),setTimeout(function(){$(".phone_right").animate({bottom:0,opacity:1},"slow")},300)};nex_active();var nex_reset=function(){$(".ver_nex").css({top:-10,opacity:0}),$(".ai_nex").css({top:40,opacity:0}),$(".cpu_nex").css({top:90,opacity:0}),$(".phone_left").css({top:-80,opacity:0}),$(".phone_right").css({bottom:-80,opacity:0})},z3_active=function(){setTimeout(function(){$(".z3").animate({top:0,opacity:1})},1200),setTimeout(function(){$(".performance").animate({top:50,opacity:1})},1e3),setTimeout(function(){$(".cpu_z3").animate({top:100,opacity:1})},800)},z3_reset=function(){$(".z3").css({top:-10,opacity:0}),$(".performance").css({top:40,opacity:0}),$(".cpu_z3").css({top:90,opacity:0})},x23_active=function(){setTimeout(function(){$(".x23_adver").animate({top:0,opacity:1})},1200),setTimeout(function(){$(".x23").animate({top:50,opacity:1})},1e3),setTimeout(function(){$(".x23_special").animate({top:100,opacity:1})},800)},x23_reset=function(){$(".x23_adver").css({top:-10,opacity:0}),$(".x23").css({top:40,opacity:0}),$(".x23_special").css({top:90,opacity:0})},dbnex_active=function(){setTimeout(function(){$(".nex_BIG_LOGO").animate({top:0,opacity:1})},1200),setTimeout(function(){$(".dobule_screen").animate({top:50,opacity:1})},1e3),setTimeout(function(){$(".db_specila").animate({top:100,opacity:1})},800)},dbnex_reset=function(){$(".nex_BIG_LOGO").css({top:-10,opacity:0}),$(".dobule_screen").css({top:57,opacity:0}),$(".db_specila").css({top:90,opacity:0})};$(function(){var t=-1;function e(){$(".banner .btn_list li").removeClass("choose"),$(".img_list").stop().animate({opacity:0,"z-index":1}),$(".banner .btn_list li").eq(t).addClass("choose"),$(".img_list").eq(t).stop().animate({opacity:1,"z-index":2}),0==t?(nex_active(),z3_reset(),x23_reset(),dbnex_reset()):1==t?(z3_active(),nex_reset(),x23_reset(),dbnex_reset()):2==t?(x23_active(),nex_reset(),z3_reset(),dbnex_reset()):3==t&&(dbnex_active(),nex_reset(),z3_reset(),x23_reset())}function i(){3<(t+=1)?t=0:t<0&&(t=3),e()}$(".btn_list li").click(function(){t=$(this).index(),e()}),$("#banner").mouseleave(i());setInterval(function(){i()},3500)}()),$(".product_cont").on("mouseenter","li",function(){$(this).find("p").stop().slideDown(),$(this).find(".small_img").stop().animate({left:-418,opacity:0})}),$(".product_cont").on("mouseleave","li",function(){$(this).find("p").stop().slideUp(),$(this).find(".small_img").stop().animate({left:24,opacity:1})});