"use strict";var addCar={init:function(){this.event(),this.getData()},event:function(){var n=this;$(".select_btn .add").click(function(){var t=$(".select .select_type span").html()-0;n.data.phoneCount=t,console.log(n.data.phoneCount)})},getData:function(){$.ajax("http://localhost:6623/vivo/vivo/server/json/phone.json",{type:"post",contentType:"json",success:function(t){this.data=t.phone[0]},error:function(){alert("数据获取失败")}})},insertData:function(t){console.log(t)},setItem:function(){var t=localStorage.getItem("shopList")||"[]";t=JSON.parse(t)}};addCar.init();