"use strict";var checkInput={username:function(e){return/^\w{6,14}$/.test(e)},phone:function(e){return/^1[35789]\d{9}$/.test(e)},password:function(e){return/^\w{6,11}$/.test(e)}},register={init:function(e){this.$el=document.querySelector(e),this.$inputAll=this.$el.querySelectorAll("input"),this.$btn=this.$el.querySelector("button"),this.event()},event:function(){for(var s=this,e=0;e<this.$inputAll.length;e++)this.$inputAll[e].value,this.$inputAll[e].onblur=function(){var e=this.value,t=this.nextElementSibling;if(""==this.value)t.className="text-danger bg-danger",t.innerHTML="内容不可以为空";else{var s=checkInput[this.name](e);t.innerHTML=s?("username"==this.name&&sendAjax("http://localhost:1023/vivo/server/php/register_check.php",{data:{username:this.value},success:function(e){0==(e=JSON.parse(e)).code?t.innerHTML="用户名称可以使用":t.innerHTML="用户名称已存在"}}),t.className="text-success bg-success","验证成功"):(t.className="text-danger bg-danger",this.getAttribute("data-error"))}};this.$el.password.addEventListener("blur",function(){s.$el.repassword.onblur()}),this.$el.repassword.onblur=function(){var e=this.nextElementSibling;this.value===s.$el.password.value?(e.className="text-success bg-success",e.innerHTML="验证成功"):(e.className="text-danger bg-danger",e.innerHTML=this.getAttribute("data-error"))},this.$btn.onclick=function(){for(var e=s.$el.querySelectorAll("p"),t=0;t<e.length;t++)if(-1==e[t].className.indexOf("text-success"))return e[t].previousElementSibling.focus(),!1;sendAjax("http://localhost:1023/vivo/server/php/register_send.php",{data:{user:s.$el.username.value,tel:s.$el.phone.value,pass:s.$el.password.value},success:function(e){1==e?location.href="VIVO-index.html":0==e&&alert("注册失败")}})}}};register.init(".form-box");